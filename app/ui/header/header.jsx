"use client";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import { Drawer } from "antd";
import clsx from "clsx";
import styles from "./header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(!open);
  };
  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      setOpen(false);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setOpen(false);
      });
    };
  }, []);

  useLayoutEffect(() => {
    if (open) {
      const body = document.querySelector("body");
      body.classList.add("fixed");
    } else {
      const body = document.querySelector("body");
      body.classList.remove("fixed");
    }
  }, [open]);

  const onClose = () => {
    setOpen(false);
  };

  const MainMenu = () => {
    return (
      <nav className={styles.navSection}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link className={styles.link} onClick={onClose} href={"#services"}>
              OUR SERVICES
            </Link>
          </li>
          <li>
            <div className={styles.menuDivider}></div>
          </li>
          {/*<li className={styles.navItem}>
            <Link className={styles.link} onClick={onClose} href={"#team"}>
              THE TEAM
            </Link>
          </li>-*/}
          {/*<li>
            <div className={styles.menuDivider}></div>
          </li>*/}

          <li className={styles.navItem}>
            <Link className={styles.link} onClick={onClose} href={"#get_fix"}>
              GET YOUR FIX TODAY
            </Link>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <div className={styles.container}>
      <MainMenu />
    </div>
  );
}
