import Download from "./Download";
import NavMenu from "../Nav/NavMenu";

import { PortableText } from "@portabletext/react";

import Link from "next/link";

export default function Press({ press, locale }) {
  return (
    <>
      <div className="singlePageWrapper introText centered">
        <h1>{locale == "de" ? "Presse" : "Press"}</h1>
        {/* <div className="sectionWrapper">
          <h2>Downloads</h2>
          {press.downloads.map((download, i) => (
            <Download download={download} locale={locale} key={i} />
          ))}
        </div> */}

        <div className="sectionWrapper">
          <h2>
            {locale == "de"
              ? "Anmeldung Presseverteiler"
              : "Registration Presslist"}
          </h2>
          <p>
            {locale == "de"
              ? "Bitte geben Sie hier Ihre E-Mailadresse ein."
              : "Please enter your e-mail address here."}
          </p>

          <div className="registrationForm">
            <form
              action="https://seu2.cleverreach.com/f/360026-377546/wcs/"
              method="post"
              target="_blank"
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <input
                name="email"
                id="text8554093"
                className="button"
                placeholder=""
              />
              <div id="8554095" rel="button">
                <button type="submit" className="button formButton">
                  {locale == "de" ? "Anmelden" : "Register"}
                </button>
              </div>

              <noscript>
                <a href="http://www.cleverreach.de">www.CleverReach.de</a>
              </noscript>
            </form>
          </div>

          <div className="pressDisclaimer">
            <PortableText
              value={
                locale == "de"
                  ? press.disclaimer.german
                  : press.disclaimer.english
              }
            />
          </div>
          <p>
            {locale == "de"
              ? "Wir bitten um Übersendung eines digitalen Belegexemplars."
              : "We kindly ask you to send us a digital specimen copy."}
          </p>
        </div>

        {press.pressContact && (
          <div className="sectionWrapper">
            {locale == "de" ? (
              <>
                <h2>Pressekontakt</h2>
                <PortableText value={press.pressContact.german} />
              </>
            ) : (
              <>
                <h2>Press Contact</h2>
                <PortableText value={press.pressContact.english} />
              </>
            )}
          </div>
        )}

        {press.pressDates && (
          <div className="sectionWrapper">
            {locale == "de" ? (
              <>
                <h2>Pressetermine</h2>
                <PortableText value={press.pressDates.german} />
              </>
            ) : (
              <>
                <h2>Press Dates</h2>
                <PortableText value={press.pressDates.english} />
              </>
            )}
          </div>
        )}

        {press.accreditation && (
          <div className="sectionWrapper">
            {locale == "de" ? (
              <>
                <h2>Akkreditierung</h2>
                <PortableText value={press.accreditation.german} />
              </>
            ) : (
              <>
                <h2>Accreditation</h2>
                <PortableText value={press.accreditation.english} />
              </>
            )}
          </div>
        )}
      </div>
      <NavMenu locale={locale} />
    </>
  );
}
