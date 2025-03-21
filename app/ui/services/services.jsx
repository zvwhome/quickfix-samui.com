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
    <div id={"servicesWrap"} className={styles.container}>
      <div id={"services"}></div>
      <div className={styles.inner}>
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
            <p className={styles.cardDescription}>
              We provide professional painting and varnishing services, ensuring
              smooth finishes and long-lasting protection for your walls,
              furniture, and exteriors.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.cardImg}
              src={tiling}
              alt={"Tiling works"}
            />
            <p className={styles.cardHeader}>TILING WORKS</p>
            <p className={styles.cardDescription}>
              Expert tiling solutions for walls and floors, offering precision
              installation with high-quality materials for a stylish and durable
              finish.
            </p>
          </div>
          <div className={styles.card}>
            <Image className={styles.cardImg} src={metal} alt={"Metal works"} />
            <p className={styles.cardHeader}>METAL WORKS</p>
            <p className={styles.cardDescription}>
              Custom metal fabrication, welding, and repairs for gates,
              railings, and structures, delivering strength, durability, and
              modern designs.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.cardImg}
              src={construction}
              alt={"Construction works"}
            />
            <p className={styles.cardHeader}>CONSTRUCTION WORKS</p>
            <p className={styles.cardDescription}>
              Reliable construction services, from renovations to new builds,
              executed with high-quality craftsmanship and attention to detail.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.cardImg}
              src={airCon}
              alt={"Air conditioning"}
            />
            <p className={styles.cardHeader}>AIR CONDITIONING</p>
            <p className={styles.cardDescription}>
              From installation to maintenance and repairs, we keep your air
              conditioning systems running efficiently, ensuring a cool and
              comfortable environment.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.cardImg}
              src={sanitary}
              alt={"Sanitary works"}
            />
            <p className={styles.cardHeader}>SANITARY WORKS</p>
            <p className={styles.cardDescription}>
              We handle all sanitary installations and repairs, from plumbing
              systems to bathroom fittings, ensuring hygiene, efficiency, and
              leak-free solutions.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.cardImg}
              src={windows}
              alt={"Windows and doors"}
            />
            <p className={styles.cardHeader}>WINDOWS & DOORS</p>
            <p className={styles.cardDescription}>
              Professional installation and repair of windows and doors,
              enhancing security, insulation, and aesthetics for homes and
              businesses.
            </p>
          </div>
          <div className={styles.card}>
            <Image
              className={styles.cardImg}
              src={electricity}
              alt={"Electric installations"}
            />
            <p className={styles.cardHeader}>ELECTRIC INSTALLATIONS</p>
            <p className={styles.cardDescription}>
              Safe and efficient electrical installations, repairs, and
              upgrades, ensuring compliance with safety standards and optimal
              performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
