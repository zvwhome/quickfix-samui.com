"use client";
import styles from "./contact.module.css";
import {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Form, Input, Space, Alert } from "antd";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import clsx from "clsx";
import phone from "public/phone.webp";
import mail from "public/mail.webp";
import house from "public/house.webp";
import inst from "public/inst.webp";
import facebook from "public/facebook.webp";
import wa from "public/wa.webp";

export default function Contact() {
  const [disabled, setDisabled] = useState(true);
  const requiredNameMessage = "Name is required";
  const requiredEmailMessage = "Email is required";
  const requiredMessage = "Message is required";
  const emailWrongMessage = "Please enter valid email";

  const messageIsBig = "Message is 200 letters max";

  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [err, setErr] = useState("");
  const [loaded, setLoaded] = useState(false);
  const SubmitButton = ({ form }) => {
    const [submittable, setSubmittable] = useState(false);
    const [clear, setClear] = useState(false);

    useEffect(() => {
      if (submittable && !disabled) {
        setClear(true);
      } else setClear(false);
    }, [submittable, disabled]);

    const values = Form.useWatch([], form);
    useEffect(() => {
      form.validateFields({ validateOnly: true }).then(
        () => {
          setSubmittable(true);
        },
        () => {
          setSubmittable(false);
        },
      );
    }, [values]);

    return (
      <button className={styles.btn} type="primary" /*disabled={!clear}*/>
        SEND MESSAGE
      </button>
    );
  };

  const [form] = Form.useForm();
  const recaptchaRef = useRef(null);

  useEffect(() => {
    recaptchaRef.current?.reset();
    emailjs.init(`${process.env.NEXT_PUBLIC_PUBLIC}`);
    setLoaded(true);
  }, []);

  const onFinish = (values) => {
    form.resetFields();
    const recValue = recaptchaRef.current?.getValue();
    setDisabled(true);
    recaptchaRef.current?.reset();
    const params = { ...values, "g-recaptcha-response": recValue };
    emailjs
      .send(
        `${process.env.NEXT_PUBLIC_SERVIE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE}`,
        params,
      )
      .then((res) => {
        showSuccess();
      })
      .catch((err) => {
        setErr(err);
        showFail();
      });
  };

  const showSuccess = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const showFail = () => {
    setShowErrorMessage(true);
    setTimeout(() => {
      setShowErrorMessage(false);
      setErr("");
    }, 3000);
  };

  function onChange(value) {
    if (value) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function expired() {
    setDisabled(true);
  }

  return (
    <div id={"get_fix"} className={styles.container}>
      <div className={styles.contactSection}>
        <p className={styles.contactFormHeader}>GET YOUR FIX TODAY</p>
        <div className={styles.contactSectionInnerWrap}>
          <div className={styles.contactFormContainer}>
            {loaded && (
              <Form
                name={"form1"}
                form={form}
                /*layout="vertical"*/
                autoComplete="off"
                onFinish={onFinish}
                /*rootClassName={styles.form}*/
              >
                <Form.Item
                  name="name"
                  rules={[{ required: true, message: requiredNameMessage }]}
                >
                  <Input className={styles.input} placeholder={"Name"} />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: requiredEmailMessage },
                    { type: "email", message: emailWrongMessage },
                  ]}
                >
                  <Input className={styles.input} placeholder={"Email"} />
                </Form.Item>
                <Form.Item
                  name="phone"
                  rules={[
                    {
                      pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g,
                      message: "Only digits",
                    },
                    /*{ required: false, message: "Please enter correct number" },*/
                    { max: 15, message: "Max 15 numbers" },
                    { min: 5, message: "Min 5 numbers" },
                  ]}
                >
                  {
                    <Input
                      className={styles.input}
                      placeholder={"Phone"}
                      controls={false}
                    />
                  }
                </Form.Item>

                <Form.Item
                  name="message"
                  rules={[
                    { required: true, message: requiredMessage },
                    { max: 200, message: messageIsBig },
                  ]}
                >
                  <Input.TextArea
                    className={styles.input}
                    placeholder="Message"
                  />
                </Form.Item>
                <Form.Item>
                  <Space>
                    <SubmitButton form={form} />
                  </Space>
                </Form.Item>
              </Form>
            )}

            <div className={styles.captcha}>
              <ReCAPTCHA
                className={styles.captcha}
                sitekey={`${process.env.NEXT_PUBLIC_CAPTCHA}`}
                ref={recaptchaRef}
                onChange={onChange}
                onExpired={expired}
              />
            </div>
          </div>
          <div className={styles.addressGroupContainer}>
            <div className={styles.addressRecord}>
              <Image className={styles.phoneIcon} src={phone} alt={"Phone"} />
              <a
                href={"tel:+66960435091"}
                className={styles.addressRecordDescription}
              >
                +66 [0] 960 453 5091
              </a>
            </div>
            <div className={styles.addressRecord}>
              <Image className={styles.mailIcon} src={mail} alt={"Mail"} />
              <a
                href={"mailto:info@quickfix-samui.com"}
                className={styles.addressRecordDescription}
              >
                info@quickfix-samui.com
              </a>
            </div>
            <div className={styles.addressRecord}>
              <Image className={styles.houseIcon} src={house} alt={"House"} />
              <p className={styles.addressRecordDescription}>
                106/51, Moo 1
                <br />
                Bophut Koh Samui
                <br />
                Surattani 84320
                <br />
                Thailand
              </p>
            </div>
            <div className={styles.socialSection}>
              <a
                target={"_blank"}
                className={styles.socialLink}
                href={
                  "https://instagram.com/quickfixsamui?igshid=MzMyNGUyNmU2YQ=="
                }
              >
                <Image
                  src={inst}
                  className={styles.socialSectionImg}
                  alt={"Instagram"}
                />
              </a>
              <a
                target={"_blank"}
                className={styles.socialLink}
                href={
                  "https://www.facebook.com/profile.php?id=61552961145624&mibextid=LQQJ4d"
                }
              >
                <Image
                  src={facebook}
                  className={styles.socialSectionImg}
                  alt={"Facebook"}
                />
              </a>
              <a
                target={"_blank"}
                className={styles.socialLink}
                href={"https://wa.me/66960435091"}
              >
                <Image
                  src={wa}
                  className={styles.socialSectionImg}
                  alt={"WhatsApp"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 10 }}>
        {showSuccessMessage && (
          <Alert message={<p>Message send success</p>} type="success" />
        )}
      </div>

      <div style={{ marginBottom: 10 }}>
        {showErrorMessage && (
          <Alert message={<p>Message send fail {err.text}</p>} type="error" />
        )}
      </div>
      <div className={styles.descriptionSection}>
        <p className={styles.descriptionContent}>
          Behind QuickFix is a reliable craft company with 30 years of
          experience in Germany, which now also offers services relating to real
          estate on Koh Samui.
        </p>
        <p className={styles.descriptionContent}>
          We are a family from Germany with extensive organizational and
          technical know-how and can therefore offer you reliable and
          professional services that meet the highest quality standards.
        </p>
        <p className={styles.descriptionContent}>
          Due to our extensive experience in these areas, we offer you all
          trades from a single source, regardless of whether it is just a small
          repair, a renovation or a larger project. You can reach us quickly and
          easily via phone, WhatsApp, line or email and make an appointment for
          your concern. Thanks to our flexible and well-structured setup, we
          guarantee that we will be on site within 2 hours to get an impression
          of the work to be done.
        </p>
        <p className={styles.descriptionContent}>
          All work that arises and needs to be carried out is monitored by us
          over time, checked after completion and checked according to our
          quality standards.
        </p>
        <p className={styles.descriptionContent}>
          We would also like to help you with your upcoming projects related to
          your home - no matter the extent. Simply contact us in the easiest way
          possible for you. Our friendly and experienced team will be happy to
          address your concerns.
        </p>
      </div>
    </div>
  );
}
