import styles from "./Nav.module.css";
import { Link } from "../../src/navigation";

export default function NavBottom({ locale }) {
  return (
    <div className={styles.menuBottom}>
      <a
        href="https://www.facebook.com/deutscherpavillonvenedig"
        target="_blank"
        rel="noreferrer"
      >
        <p>Facebook</p>
      </a>
      <a
        href="https://www.instagram.com/deutscherpavillon/"
        target="_blank"
        rel="noreferrer"
      >
        <p>Instagram</p>
      </a>
      <Link href={"/newsletter"}>
        <p>Newsletter</p>
      </Link>
      <a
        href="https://archiv.deutscher-pavillon.org/"
        target="_blank"
        rel="noreferrer"
      >
        <p>Archiv</p>
      </a>

      {locale == "de" ? (
        <Link href={"/datenschutz"}>
          <p>Datenschutz</p>
        </Link>
      ) : (
        <Link href={"/privacy"}>
          <p>Privacy</p>
        </Link>
      )}
      {locale == "de" ? (
        <Link href={"/impressum"}>
          <p>Impressum</p>
        </Link>
      ) : (
        <Link href={"/imprint"}>
          <p>Imprint</p>
        </Link>
      )}
    </div>
  );
}
