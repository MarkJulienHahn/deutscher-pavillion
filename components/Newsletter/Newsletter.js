import NavMenu from "../Nav/NavMenu";
import { PortableText } from "@portabletext/react";

export default function Newsletter({ newsletter, locale }) {
  return (
    <>
      <div className="singlePageWrapper introText centered">
        <h1>Newsletter</h1>
        <div className="sectionWrapper">
          <h2>
            {locale == "de"
              ? "Anmeldung Newsletter"
              : "Newsletter Registration"}
          </h2>
          <p>
            {locale == "de"
              ? "Bitte geben Sie hier Ihre E-Mailadresse ein."
              : "Please enter your e-mail address here."}
          </p>
          <div className="registrationForm">
            <form>
              <input className="button"></input>
              <button className="button formButton">
                {locale == "de" ? "Anmelden" : "Register"}{" "}
              </button>
            </form>
          </div>

          <div className="pressDisclaimer">
            <PortableText
              value={locale == "de" ? newsletter.german : newsletter.english}
            />
          </div>
        </div>
      </div>
      <NavMenu locale={locale} />
    </>
  );
}
