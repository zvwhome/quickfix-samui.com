import styles from "./about.module.css";
import Image from "next/image";
import about from "../../../public/about.webp";

export default function About() {
  return (
    <div id={"aboutWrap"} className={styles.container}>
      <div id={"about"}></div>
      <div className={styles.descriptionSection}>
        <h2 className={styles.header}>
          Your Trusted Partner for Home & Business
        </h2>
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
      <div className={styles.imageSection}>
        <Image src={about} alt={"About"} className={styles.img} />
      </div>
    </div>
  );
}
