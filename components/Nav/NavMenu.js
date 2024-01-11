import styles from "./Nav.module.css";
import { Link } from "../../src/navigation";

import NavBottom from "./NavBottom";

import { menuDE, menuEN } from "./Menu";

export default function NavMenu({ locale }) {
  const menu = locale == "de" ? menuDE : menuEN;
  return (
    <div className={styles.menuWrapper}>

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
