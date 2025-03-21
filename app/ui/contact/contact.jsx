"use client";
import styles from "./contact.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactDatePicker, { CalendarContainer } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as yup from "yup";
import { message } from "antd";

import { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import clsx from "clsx";

export default function Contact() {
  const [messageApi, contextHolder] = message.useMessage();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const recaptchaRef = useRef(null);
  useEffect(() => {
    recaptchaRef.current?.reset();
    emailjs.init(`${process.env.NEXT_PUBLIC_PUBLIC}`);
  }, []);

  const successMessage = () => {
    messageApi.open({
      type: "success",
      content: "Your request sent successfully",
    });
  };

  const errorMessage = (message) => {
    messageApi.open({
      type: "error",

      content: `Error. Please try again later. - ${message}`,
    });
  };

  const sendMessage = () => {
    messageApi.open({
      type: "loading",
      content: "Sending message",
      duration: 0,
      key: "load",
    });
  };

  useEffect(() => {
    if (loading) {
      sendMessage();
    }
    if (!loading) {
      messageApi.destroy("load");
    }
  }, [loading]);

  const schema = yup
    .object({
      firstName: yup.string().required("Required field"),

      mail: yup.string().email("Email invalid").required("Required field"),
    })
    .required();

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (values) => {
    setLoading(true);
    setDisabledBtn(true);
    const recValue = recaptchaRef.current?.getValue();
    recaptchaRef.current?.reset();
    let localStartDateForm = "not set";
    let localEndDateForm = "not set";
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (startDate) {
      localStartDateForm = new Intl.DateTimeFormat("de-De", {
        timeZone: "Asia/Bangkok",
        dateStyle: "full",
        timeStyle: "long",
      }).format(startDate);
    }
    if (endDate) {
      localEndDateForm = new Intl.DateTimeFormat("de-De", {
        timeZone: "Asia/Bangkok",
        dateStyle: "full",
        timeStyle: "long",
      }).format(endDate);
    }
    const params = {
      ...values,
      "g-recaptcha-response": recValue,
      userTz: tz,
      usersd: startDate ? startDate.toLocaleString("en-GB") : "not set",
      usernd: endDate ? endDate.toLocaleString("en-GB") : "not set",
      localstart: localStartDateForm,
      localEnd: localEndDateForm,
    };

    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE}`,
        params,
      )
      .then((res) => {
        reset();
        setLoading(false);
        setDisabledBtn(true);
        successMessage();
      })
      .catch((err) => {
        reset();
        setLoading(false);
        setDisabledBtn(true);
        errorMessage(err.message);
        console.log("Error", err);
      });
  };

  function onChange(value) {
    if (value) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }

  function expired() {
    setDisabledBtn(true);
  }

  const MyContainer = ({ className, children }) => {
    return (
      <div style={{ width: "100%", marginLeft: 20 }}>
        <CalendarContainer className={className}>
          <div style={{ position: "relative" }}>{children}</div>
        </CalendarContainer>
      </div>
    );
  };

  return (
    <div id={"contactWrap"} className={styles.container}>
      <div id={"contact"}></div>
      <div className={styles.wrap}>
        <div className={styles.imageSection}></div>
        <div className={styles.contactForm}>
          {contextHolder}
          <div className={styles.formSection}>
            <h2 className={styles.header}>GET YOUR FIX TODAY</h2>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.fieldsSectionWrap}>
                <div className={styles.set}>
                  <input
                    placeholder={"YOUR NAME"}
                    className={styles.input}
                    id={"username"}
                    {...register("firstName")}
                    aria-invalid={errors.firstName ? "true" : "false"}
                  />
                  <span className={styles.star}>*</span>

                  <p className={styles.errorMessage}>
                    {errors.firstName?.message}
                  </p>
                </div>
                <div className={styles.set}>
                  <input
                    id={"mail"}
                    className={styles.input}
                    placeholder={"YOUR EMAIL"}
                    {...register("mail", {})}
                    aria-invalid={errors.mail ? "true" : "false"}
                  />
                  <span className={styles.star}>*</span>
                  <p className={styles.errorMessage}>{errors.mail?.message}</p>
                </div>

                <div className={styles.set}>
                  <input
                    id={"phone"}
                    type={"tel"}
                    className={styles.input}
                    placeholder={"YOUR PHONE NUMBER"}
                    {...register("phone", {})}
                    aria-invalid={errors.phone ? "true" : "false"}
                  />
                </div>
                <h3 className={styles.subHeader}>{"YOUR CONTACT SCHEDULE"}</h3>
                <div className={styles.dateSelector}>
                  <div
                    className={styles.dateSelectorField}
                    //className={styles.set}
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <label className={styles.label}>FROM</label>

                    <Controller
                      control={control}
                      name="datePicker"
                      defaultValue={startDate}
                      render={({ field }) => (
                        <ReactDatePicker
                          {...field}
                          showIcon
                          showTimeSelect
                          timeFormat="p"
                          calendarContainer={MyContainer}
                          timeIntervals={15}
                          isClearable={false}
                          className={styles.input}
                          closeOnScroll={false}
                          dateFormat="dd/MM/yyyy h:mm aa"
                          selected={startDate}
                          placeholderText=" DD/MM/YYYY | XX:YY"
                          onChange={(date) => setStartDate(date)}
                          icon={
                            <svg
                              version="1.2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              width="100"
                              height="100"
                            >
                              <title>calendar</title>
                              <defs>
                                <image
                                  width="512"
                                  height="512"
                                  id="img1"
                                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAAXNSR0IB2cksfwAAAvFQTFRFTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PrV54egAAAPt0Uk5TABdmqcXe9//85syzfCshcq/J4vqucB9Sw/3aeAoEZ9DNYwM/yOVV1lECicATCaqjCA3dGxgHxu4mFd/bEqLZEAa9uZqS9FM0/i6VtSBiQjp3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"
                                />
                              </defs>
                              <style></style>
                              <use id="Background" href="#img1" x="0" y="0" />
                            </svg>
                          }
                          minDate={new Date()}
                        />
                      )}
                    />
                  </div>

                  <div
                    className={styles.dateSelectorField}
                    /*className={styles.set}*/
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <label className={styles.label} style={{}}>
                      UNTIL
                    </label>

                    <Controller
                      control={control}
                      name="datePicker"
                      defaultValue={endDate}
                      render={({ field }) => (
                        <ReactDatePicker
                          {...field}
                          showIcon
                          calendarContainer={MyContainer}
                          showTimeSelect
                          timeFormat="p"
                          timeIntervals={15}
                          isClearable={false}
                          className={styles.input}
                          closeOnScroll={false}
                          dateFormat="dd/MM/yyyy h:mm aa"
                          selected={endDate}
                          placeholderText=" DD/MM/YYYY | XX:YY"
                          onChange={(date) => setEndDate(date)}
                          icon={
                            <svg
                              version="1.2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              width="100"
                              height="100"
                            >
                              <title>calendar</title>
                              <defs>
                                <image
                                  width="512"
                                  height="512"
                                  id="img1"
                                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAAXNSR0IB2cksfwAAAvFQTFRFTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PTU1PrV54egAAAPt0Uk5TABdmqcXe9//85syzfCshcq/J4vqucB9Sw/3aeAoEZ9DNYwM/yOVV1lECicATCaqjCA3dGxgHxu4mFd/bEqLZEAa9uZqS9FM0/i6VtSBiQjp3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"
                                />
                              </defs>
                              <style></style>
                              <use id="Background" href="#img1" x="0" y="0" />
                            </svg>
                          }
                          minDate={new Date()}
                        />
                      )}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.set}>
                <textarea
                  id={"request"}
                  style={{ lineHeight: 1 }}
                  className={styles.input}
                  maxLength={200}
                  placeholder={"YOUR MESSAGE"}
                  {...register("request", {})}
                />
              </div>
              <div className={styles.mandatoryTextWrap}>
                <span className={styles.mandatoryText}>
                  ALL ENTRIES MARKED WITH
                </span>
                <span className={styles.mandatoryText}>ARE MANDATORY</span>
              </div>
              <div className={styles.buttonWrap}>
                <button
                  className={styles.button}
                  disabled={disabledBtn}
                  type="submit"
                >
                  <p className={styles.buttonTxt}>SEND US YOUR MESSAGE</p>
                </button>
              </div>

              <ReCAPTCHA
                className={styles.captcha}
                sitekey={`${process.env.NEXT_PUBLIC_CAPTCHA}`}
                ref={recaptchaRef}
                onChange={onChange}
                onExpired={expired}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
