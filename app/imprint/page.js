import styles from "./page.module.css";
import Hero from "@/app/ui/hero/hero";

export default async function Imprint() {
  return (
    <>
      <Hero />
      <div className={styles.wrap}>
        <div className={styles.container}>
          <h3 className={styles.header}>IMPRINT</h3>

          <p className={styles.paragraph}>
            <span className={styles.key}>Quick Fix Samui Co. Ltd.&nbsp;</span>
          </p>

          <p className={styles.paragraph}>
            <span className={styles.key}>Tax ID:&nbsp;</span>
            0835563009028
          </p>
          <p className={styles.paragraph}>
            <span className={styles.key}>Company Registration No:&nbsp;</span>
            0835563009028
          </p>
          <p className={styles.paragraph}>
            <span className={styles.key}>Address:&nbsp;</span>
            106/51 Moo 1, Bophut, Koh Samui, <br className={styles.break} />
            Surat Thani, Thailand 84320
          </p>
          <p className={styles.paragraph}>
            <span className={styles.key}>Phone: &nbsp;</span>
            <a className={styles.link} href={"tel:+66649963987"}>
              +66 [0] 649 963 987
            </a>
          </p>
          <p className={styles.paragraph}>
            <span className={styles.key}>Email: &nbsp;</span>
            <a className={styles.link} href={"mailto:info@quickfix-samui.com"}>
              info@quickfix-samui.com
            </a>
          </p>
          <p className={styles.paragraph}>
            <span className={styles.key}>Dispute Resolution:</span>
          </p>
          <p className={styles.paragraph}>
            We are not obliged to participate in dispute resolution proceedings
            before a consumer arbitration board.
          </p>
        </div>
      </div>
    </>
  );
}
