"use client";
import styles from "./menu.module.css";
import clsx from "clsx";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";
import logo from "../../../public/logo.png";
import Image from "next/image";

export default function Menu() {
  const [scrolled, setScrolled] = useState(false);

  const [open, setOpen] = useState(false);

  const burgerClass = clsx(styles.burger, open && styles.open);
  const burgerClassS = clsx(styles.burgerSpan, open && styles.open);
  const mobileMenuClass = clsx(
    styles.mobileMenu,
    open && styles.mobileMenuActive,
  );

  useLayoutEffect(() => {
    if (open) {
      const body = document.querySelector("html");
      body.classList.add("fixed");
    } else {
      const body = document.querySelector("html");
      body.classList.remove("fixed");
    }
  }, [open]);

  const containerClass = clsx(
    styles.container,
    scrolled && styles.scrolled,
    open && styles.openDrawer,
  );

  const servicesClass = clsx(styles.navItem, styles.inActive);

  const aboutClass = clsx(styles.navItem, styles.inActive);

  const contactClass = clsx(styles.navItem, styles.inActive);

  const showDrawer = () => {
    setOpen(!open);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  useLayoutEffect(() => {
    if (window.scrollY > 70) {
      setScrolled(true);
    }
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else setScrolled(false);
    });
    window.addEventListener("resize", () => {
      setOpen(false);
    });
    return () => {
      window.removeEventListener("scroll", function () {
        if (window.scrollY > 10) {
          setScrolled(true);
        } else setScrolled(false);
      });
      window.removeEventListener("resize", () => {
        setOpen(false);
      });
    };
  }, []);
  /*const homeClass = clsx(styles.navItem, styles.logoItem);*/
  const homeClass = clsx(styles.logoItem);
  const Home = () => {
    return (
      <Link
        href={"/"}
        className={homeClass}
        scroll={true}
        onClick={closeDrawer}
      >
        <div className={styles.logoContainer}>
          <Image
            className={styles.logoImgContent}
            src={logo}
            alt={"Company logo"}
          />
        </div>
      </Link>
    );
  };

  const About = () => {
    return (
      <Link href={"/#about"} className={aboutClass} onClick={closeDrawer}>
        <span className={styles.linkText}>ABOUT QUICK FIX</span>
      </Link>
    );
  };

  const Services = () => {
    return (
      <Link href={"/#services"} className={servicesClass} onClick={closeDrawer}>
        <span className={styles.linkText}>THE SERVICES</span>
      </Link>
    );
  };

  const Contact = () => {
    return (
      <Link href={"/#contact"} className={contactClass} onClick={closeDrawer}>
        <span className={styles.linkText}>CONTACT</span>
      </Link>
    );
  };

  return (
    <>
      <div className={containerClass}>
        <div className={styles.deskTop}>
          <div className={styles.logoSection}>
            <Home />
          </div>
          <nav className={styles.navSection}>
            <Services />
            <Contact />
            <About />
          </nav>
        </div>
        <div className={styles.mobile}>
          <div className={styles.mobileHeader}>
            <div className={styles.burgerBtn}>
              <button className={burgerClass} onClick={showDrawer}>
                <span className={burgerClassS}></span>
                <span className={styles.burgerSpan}></span>
                <span className={styles.burgerSpan}></span>
              </button>
            </div>
            <Home />
          </div>
          <div className={mobileMenuClass}>
            <Services />
            <Contact />
            <About />
          </div>
        </div>
      </div>
    </>
  );
}
