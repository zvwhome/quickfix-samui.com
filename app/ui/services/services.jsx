"use client";
import styles from "./services.module.css";
import security from "public/security.webp";
import paint from "public/paint.webp";
import tiling from "public/tilling.webp";
import metal from "public/metal.webp";
import construction from "public/construction.webp";
import airCon from "public/aircon.webp";
import sanitary from "public/sanitary.webp";
import windows from "public/windows.webp";
import electricity from "public/electicity.webp";
import Image from "next/image";

export default function Services() {
  return (
    <div id={"services"} className={styles.container}>
      <h1 className={styles.mainHeader}>THE ALL AROUND HOUSE FIXERS</h1>
      <div className={styles.cardSection}>
        {/*<div className={styles.card}>
          <Image
            className={styles.cardImg}
            src={security}
            alt={"Electronics and security"}
          />
          <p className={styles.cardHeader}>ELECTRONIC & SECURITY</p>
        </div>*/}
        <div className={styles.card}>
          <Image
            className={styles.cardImg}
            src={paint}
            alt={"Painting and varnishing"}
          />
          <p className={styles.cardHeader}>PAINTING & VARNISHING</p>
        </div>
        <div className={styles.card}>
          <Image className={styles.cardImg} src={tiling} alt={"Tiling works"} />
          <p className={styles.cardHeader}>TILING WORKS</p>
        </div>
        <div className={styles.card}>
          <Image className={styles.cardImg} src={metal} alt={"Metal works"} />
          <p className={styles.cardHeader}>METAL WORKS</p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImg}
            src={construction}
            alt={"Construction works"}
          />
          <p className={styles.cardHeader}>CONSTRUCTION WORKS</p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImg}
            src={airCon}
            alt={"Air conditioning"}
          />
          <p className={styles.cardHeader}>AIR CONDITIONING</p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImg}
            src={sanitary}
            alt={"Sanitary works"}
          />
          <p className={styles.cardHeader}>SANITARY WORKS</p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImg}
            src={windows}
            alt={"Windows and doors"}
          />
          <p className={styles.cardHeader}>WINDOWS & DOORS</p>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImg}
            src={electricity}
            alt={"Electric installations"}
          />
          <p className={styles.cardHeader}>ELECTRIC INSTALLATIONS</p>
        </div>
      </div>
    </div>
  );
}
