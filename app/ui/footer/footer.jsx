"use client";
import styles from "./footer.module.css";
import clsx from "clsx";
import { useClickAway } from "react-use";
import fb from "../../../public/fb.png";
import inst from "../../../public/inst.png";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Home from "../home/Home";
import logo from "../../../public/logo.png";

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
      <Link href={"/"} className={styles.logoSection}>
        <Image src={logo} alt={"Company logo"} className={styles.logoImg} />
      </Link>
      <p className={styles.product}>IS A PRODUCT OF</p>
      <div className={styles.logoSection}>
        <Home />
      </div>
      <div className={styles.contactsSection}>
        <div className={styles.addressSection}>
          <div className={styles.addressSubsection}>
            <p>106/51 Moo 1</p>
            <p>Bophut Koh Samui</p>
            <p>Surattani 84320</p>
            <p>Thailand</p>
          </div>
          <div className={styles.addressSubsection}>
            <p>Tax ID: 0835563009028</p>
            <Link href={"https://kia-development.com"} target={"_blank"}>
              https://kia-development.com
            </Link>
            <a className={styles.link} href={"mailto:info@quickfix-samui.com"}>
              info@quickfix-samui.com
            </a>
            <a className={styles.link} href={"tel:+66649963987"}>
              +66 (0) 649 963 987
            </a>
          </div>
        </div>
        <div className={styles.menuSection}>
          <Link scroll={true} className={styles.menuItem} href={"/imprint"}>
            IMPRINT
          </Link>
          <Link className={styles.menuItem} href={"/terms_of_services#data"}>
            TERMS OF SERVICES
          </Link>
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
      <div className={styles.socialSection}>
        <a
          href={"https://instagram.com/quickfixsamui?igshid=MzMyNGUyNmU2YQ=="}
          target={"_blank"}
        >
          <Image className={styles.socialIcon} src={inst} alt={"Instagram"} />
        </a>
        <a
          href={
            "https://www.facebook.com/profile.php?id=61552961145624&mibextid=LQQJ4d"
          }
          target={"_blank"}
        >
          <Image className={styles.socialIcon} src={fb} alt={"Facebook"} />
        </a>
      </div>
      <p className={styles.byKia}>
        @ BY KIA DEVELOPMENT CO. LTD. FOR QUICK FIX SAMUI. | 2025
      </p>
    </div>
  );
}
