import styles from "../imprint/page.module.css";
import Hero from "@/app/ui/hero/hero";

export default async function Privacy() {
  return (
    <>
      <Hero />
      <div id={"dataWrap"} className={styles.wrap}>
        <div className={styles.container}>
          <div id={"data"}></div>
          <h2 className={styles.header}>Data Protection Policy</h2>

          <ol className={styles.list}>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>General Information</h3>
              <p className={styles.paragraph}>
                Protecting your personal data is important to us. This Data
                Protection Policy explains what data we collect, how we use it,
                and what rights you have regarding your information.
              </p>
            </li>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>What data do we collect?</h3>

              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.listItemHeader}>
                    Personal information such as name, email address, and phone
                    number when you contact us or register.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listItemHeader}>
                    Technical data such as IP address, browser type, and access
                    times to improve our website.
                  </span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listItemHeader}>
                    Cookies and tracking data to analyze and optimize our online
                    presence.
                  </span>
                </li>
              </ul>
            </li>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>How do we use your data?</h3>
              <p className={styles.paragraph}>
                We use your data solely to provide our services, improve our
                website, and comply with legal obligations. Your data will not
                be shared with third parties without your consent.
              </p>
            </li>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>Your Rights</h3>
              <p className={styles.paragraph}>
                You have the right to access, rectify, delete, and restrict the
                processing of your data. If you have any questions about data
                processing, you can contact us at any time.
              </p>
            </li>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>Contact</h3>
              <p className={styles.paragraph}>
                If you have any questions about this Data Protection Policy,
                please contact us using the details provided in our imprint.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
