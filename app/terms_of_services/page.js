import styles from "../imprint/page.module.css";
import Hero from "@/app/ui/hero/hero";

export default async function Terms() {
  return (
    <>
      <Hero />
      <div id={"dataWrap"} className={styles.wrap}>
        <div className={styles.container}>
          <div id={"data"}></div>
          <h2 className={styles.header}>Terms & Conditions</h2>

          <ol className={styles.list}>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>Scope</h3>
              <p className={styles.paragraph}>
                These Terms & Conditions apply to all contracts, deliveries, and
                services between Quick Fix Samui and its customers. Any
                differing conditions proposed by the customer will not be
                recognized unless expressly agreed upon in writing.
              </p>
            </li>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>Contract Formation</h3>
              <p className={styles.paragraph}>
                A contract is only concluded upon written confirmation or
                acceptance of an order by Quick Fix Samui.
              </p>
            </li>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>Prices and Payment Terms</h3>
              <p className={styles.paragraph}>
                All prices are quoted in the agreed currency plus applicable
                taxes. Payments must be made within the period specified on the
                invoice.
              </p>
            </li>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>
                Delivery and Service Provision
              </h3>
              <p className={styles.paragraph}>
                Delivery times are non-binding unless explicitly agreed
                otherwise in writing. Quick Fix Samui is not liable for delays
                due to force majeure.
              </p>
            </li>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>Liability and Warranty</h3>
              <p className={styles.paragraph}>
                Defects must be reported immediately. Quick Fix Samui is only
                liable for gross negligence and intent, not for indirect damages
                or lost profits.
              </p>
            </li>
            <li className={styles.section}>
              <h3 className={styles.sectionHeader}>Final Provisions</h3>
              <p className={styles.paragraph}>
                If individual provisions of these Terms & Conditions are found
                to be invalid, the validity of the remaining provisions shall
                not be affected. The applicable law is that of Thailand.
              </p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
