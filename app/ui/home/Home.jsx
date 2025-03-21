"use client";
import logo from "../../../public/logo_kia.webp";
import Link from "next/link";
import styles from "./home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <Link
      href={"https://kia-development.com"}
      target={"_blank"}
      className={styles.logoItem}
    >
      <div className={styles.logoContainer}>
        <Image
          className={styles.logoImgContent}
          src={logo}
          alt={"Company logo"}
        />
        <div className={styles.logoTextContainer}>
          <p className={styles.logoText}>
            KIA DEVELOPMENT <span className={styles.logoSpan}>CO.LTD</span>
          </p>
          <p className={styles.bottomLogoText}>WE BUILD YOUR DREAMS</p>
        </div>
      </div>
    </Link>
  );
}
