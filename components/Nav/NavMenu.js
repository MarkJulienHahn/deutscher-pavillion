"use client";

import styles from "./Nav.module.css";
import { Link } from "../../src/navigation";

import { use100vh } from "react-div-100vh";

import NavBottom from "./NavBottom";

import { menuDE, menuEN } from "./Menu";

export default function NavMenu({ locale }) {
  const height = use100vh();
  const menu = locale == "de" ? menuDE : menuEN;

  return (
    <div className={styles.menuWrapper} style={{ height: height }}>
      <div className={styles.menuListWrapper}>
        <div className={styles.menuList}>
          {menu.map((entry, i) => (
            <Link key={i} href={`/${entry.slug}`}>
              <span>
                <h1>{entry.name}</h1>
              </span>
            </Link>
          ))}
        </div>
      </div>
      <NavBottom locale={locale} />
    </div>
  );
}
