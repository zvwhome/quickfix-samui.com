import styles from "../imprint/page.module.css";
import Hero from "@/app/ui/hero/hero";

export default async function Cookie() {
  return (
    <>
      <Hero />
      <div id={"dataWrap"} className={styles.wrap}>
        <div className={styles.container}>
          <div id={"data"}></div>
          <h2 className={styles.header}>Cookie Policy </h2>
          <div className={styles.section}>
            <p className={styles.paragraph}>
              This website uses cookies to enhance user experience, analyze
              traffic, and provide personalized content. Cookies are small text
              files stored on your device that serve various functions,
              including storing preferences and improving site navigation.
            </p>
          </div>

          <ol className={styles.list}>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>
                What types of cookies do we use?{" "}
              </h3>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.listItemHeader}>
                    Essential Cookies:
                  </span>
                  <p className={styles.paragraph}>
                    Necessary for the operation of the website and core
                    functions.
                  </p>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listItemHeader}>
                    Analytical Cookies:
                  </span>
                  <p className={styles.paragraph}>
                    Help us understand how visitors interact with our website.
                  </p>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listItemHeader}>
                    Marketing Cookies:
                  </span>
                  <p className={styles.paragraph}>
                    Enable personalized advertising and marketing efforts.
                  </p>
                </li>
              </ul>
            </li>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>
                How can you manage cookies?
              </h3>
              <p className={styles.paragraph}>
                You can adjust your cookie settings in your browser and disable
                non-essential cookies. Please note that some website
                functionalities may not work properly if certain cookies are
                disabled. For more information, please refer to our Data
                Protection Policy.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
