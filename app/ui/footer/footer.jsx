"use client";
import styles from "./footer.module.css";
import clsx from "clsx";
import { useClickAway } from "react-use";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [active, setActive] = useState(false);
  const [fixed, setFixed] = useState(true);
  const ref = useRef(null);
  const chatStyle = clsx(styles.chatBlock, active && styles.active);
  const chatContainer = clsx(
    styles.chatContainer,
    fixed && styles.fixed,
    !fixed && styles.absolute,
  );

  if (typeof window !== "undefined") {
    const footer = document.getElementById("footer1");

    document.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollHeight - footer.offsetHeight >
        window.pageYOffset + window.innerHeight
      ) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    });
  }
  useClickAway(ref, () => {
    setActive(false);
  });
  let config = {
    setup: {
      mode: "frame",
      injectTo: "footer",
      //startHidden: true,
      customWidgetButton: "styles.chatBtn",
      disableChatOpenHash: true,
      colors: {
        buttonText: "#fff",
        buttonBg: "#ef6324",
        clientBubbleBg: "#58b2ce",
        agentBubbleBg: "#5d6db1",
      },
    },
    ID: `Mf5qXsAum2k84ffzf`,
  };
  let Chatra = require("@chatra/chatra");
  useEffect(() => {
    Chatra("init", config);
  }, []);

  return (
    <div id={"footer1"} className={styles.container}>
      <div className={chatContainer}>
        <div className={styles.chatWrap} ref={ref}>
          <button className={styles.chatBtn} onClick={() => setActive(!active)}>
            QUICK FIX LIVECHAT
          </button>
          <div className={chatStyle} id={"footer"}></div>
        </div>
      </div>
      {/*<Link href={"/"} className={styles.logoSection}>
        <Image src={logo} alt={"Company logo"} className={styles.logoImg} />
      </Link>
      <p className={styles.product}>IS A PRODUCT OF</p>
      <div className={styles.logoSection}>
        <Home />
      </div>*/}
      <div className={styles.contactsSection}>
        <div className={styles.addressSubsection}>
          <p>QUICKFIX IS A BRAND OF KIA DEVELOPMENT CO. LTD</p>
          <p>COPYRIGHT © BY KIA DEVELOPMENT CO.LTD. 2025</p>
        </div>

        <div className={styles.menuSubSection}>
          <Link scroll={true} className={styles.menuItem} href={"/imprint"}>
            IMPRINT
          </Link>
          <Link className={styles.menuItem} href={"/terms_of_services#data"}>
            TERMS OF SERVICES
          </Link>
        </div>
        <div className={styles.menuSubSection}>
          <Link className={styles.menuItem} href={"/cookie_policy#data"}>
            COOKIE POLICY
          </Link>
          <Link
            scroll={true}
            className={styles.menuItem}
            href={"/privacy_policy#data"}
          >
            PRIVACY POLICY
          </Link>
        </div>
      </div>
    </div>
  );
}
