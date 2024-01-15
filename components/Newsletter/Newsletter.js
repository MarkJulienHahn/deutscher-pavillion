"use client";
import { useState } from "react";

import NavMenu from "../Nav/NavMenu";
import { PortableText } from "@portabletext/react";

export default function Newsletter({ newsletter, locale }) {
  const [submissionStatus, setSubmissionStatus] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmissionStatus("Submitting...");

    const formData = {
      email: event.target.email.value,
    };

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus("Success! Thank you for registering.");
      } else {
        setSubmissionStatus("Error: Could not register. Please try again.");
      }
    } catch (error) {
      setSubmissionStatus("Network error: Please try again later.");
    }
  }

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
            <form
              action="https://seu2.cleverreach.com/f/360026-377456/wcs/"
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

          {/* <div className="registrationForm">
            <form onSubmit={handleSubmit}>
              <input name="email" className="button" placeholder="Email" />
              <button className="button formButton">
                {locale === "de" ? "Anmelden" : "Register"}
              </button>
            </form>
            {submissionStatus && <p>{submissionStatus}</p>}
          </div> */}

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
