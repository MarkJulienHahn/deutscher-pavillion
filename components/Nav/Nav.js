"use client";

import { useState, useEffect } from "react";

import { Link } from "../../src/navigation";
import styles from "./Nav.module.css";

import { usePathname } from "next/navigation";

import NavMenu from "./NavMenu";

function removeFirstThreeCharacters(str) {
  str.length >= 3;
  return str.substring(3);
}

const visible = { opacity: "1", pointerEvents: "auto" };
const hidden = { opacity: "0", pointerEvents: "none" };

// const selected = {
//   textDecoration: "underline",
//   textDecorationThickness: "3px",
//   textUnderlineOffset: "5px",
// };

// const unselected = {
//   textDecoration: "none",
// };

export default function Nav({ locale }) {
  const [active, setActive] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [twoColors, setTwoColors] = useState(false);

  const pathname = usePathname();
  const neutralPath = removeFirstThreeCharacters(pathname);

  useEffect(() => {
    setActive(false);
  }, [pathname]);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setShowButton(false);
    } else {
      // Scrolling up
      setShowButton(true);
    }
    setLastScrollY(currentScrollY);
  };

  // Debouncing the scroll event handler
  const debounce = (func, delay) => {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    pathname.includes("exhibition") ||
    pathname.includes("ausstellung") ||
    pathname.includes("artists") ||
    pathname.includes("kuenstlerinnen") ||
    pathname.includes("program") ||
    pathname.includes("programm")
      ? setTwoColors(true)
      : setTwoColors(false);

    pathname == "/en" || pathname == "de"
      ? setShowButton(false)
      : setShowButton(true);
  }, [pathname]);

  return (
    <>
      <div className={styles.header} style={showButton ? visible : hidden}>
        <Link className={styles.hideMobile} href="/">
          <h3>Thresholds</h3>
        </Link>

        {twoColors ? (
          <img
            className={styles.twoColorButton}
            // style={showButton ? visible : hidden}
            alt="headline"
            onClick={() => setActive(true)}
            src={
              locale == "de" ? "/svg/headline-05.svg" : "/svg/headline-06.svg"
            }
          />
        ) : (
          <h3
            className={styles.button}
            onClick={() => setActive(true)}
            // style={showButton ? visible : hidden}
          >
            {locale == "de" ? "Menü" : "Menu"}
          </h3>
        )}

        <h3
          className={`${styles.localePicker} ${styles.hideMobile}`}
          style={{ color: twoColors ? "var(--red)" : "var(--blue)" }}
        >
          <Link href={`/${neutralPath}`} locale="de">
            <span
              className={locale == "de" ? styles.selected : styles.unselected}
            >
              De
            </span>
          </Link>
          /
          <Link href={`/${neutralPath}`} locale="en">
            <span
              className={locale !== "de" ? styles.selected : styles.unselected}
            >
              En
            </span>
          </Link>
        </h3>
      </div>

      <div
        className={styles.menuFixed}
        style={active ? visible : hidden}
        onClick={() => setActive(false)}
      >
        <h3 className={styles.closeButton}>
          {locale == "de" ? "Schließen" : "Close"}
        </h3>
        <div className={styles.mobileHead}>
          <Link href="/">
            <h3>Thresholds</h3>
          </Link>{" "}
          <h3 className={styles.localePicker}>
            <Link href={`/${neutralPath}`} locale="de">
              <span
                className={locale == "de" ? styles.selected : styles.unselected}
              >
                De
              </span>
            </Link>
            /
            <Link href={`/${neutralPath}`} locale="en">
              <span
                className={
                  locale !== "de" ? styles.selected : styles.unselected
                }
              >
                En
              </span>
            </Link>
          </h3>
        </div>
        <NavMenu locale={locale} />
      </div>
    </>
  );
}
