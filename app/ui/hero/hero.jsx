"use client";
import styles from "./hero.module.css";
import Image from "next/image";
import hero from "public/hero.webp";
import logo from "public/logo.svg";

export default function Hero() {
  return (
    <div className={styles.container}>
      <Image className={styles.heroImg} src={hero} alt={"Quick Fix"} />
      <Image className={styles.logoImg} src={logo} alt={"Company logo"} />
    </div>
  );
}
