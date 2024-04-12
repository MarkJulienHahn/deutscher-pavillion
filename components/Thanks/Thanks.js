"use client";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import NavMenu from "../Nav/NavMenu";
import { urlFor } from "../../hooks/useImageUrlBuilder";
import Image from "next/image";

import logo1 from "../../public/svg/AA_logo_black.svg";
import logo2 from "../../public/svg/bw_logo_black.svg";
import logo3 from "../../public/svg/ifa_logo_black.svg";

export default function Thanks({ thanks, locale }) {
  const [delay, setDelay] = useState(true);

  const content =
    locale === "de" ? thanks.partner.german : thanks.partner.english;
  const partnerHeadline = content.headline || "headline unavailable";
  const partnerText = content.text;

  useEffect(() => {
    setTimeout(setDelay(false), 500);
  }, []);

  return (
    <main>
      <div className="singlePageWrapper">
        <div className="dankWrapper">
          <h1>{locale == "de" ? "Dank" : "Thanks"}</h1>
          {/* {thanks.biennaleLogo && (
            <div className="dankLogos" style={{ paddingTop: "0" }}>
              <span
                style={{
                  width: "250px",
                  height: "200px",
                  position: "relative",
                }}
              >
                <Image
                  fill
                  src={thanks.biennaleLogo.asset.url}
                  alt={"German Pavillon 2024 Venice Biennale Supporter Logo"}
                  loading="lazy"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </span>
            </div>
          )} */}
          <PortableText
            value={locale == "de" ? thanks.text.german : thanks.text.english}
          />
          <div className="dankLogos">
            {thanks.logos.map((logo, i) => (
              <span
                key={i}
                style={{
                  width: "250px",
                  height: "120px",
                  position: "relative",
                }}
              >
                <Image
                  fill
                  src={logo.asset.url}
                  alt={"German Pavillon 2024 Venice Biennale Supporter Logo"}
                  loading="lazy"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%",
                  }}
                />
              </span>
            ))}
          </div>

          {thanks.partner && (
            <div>
              <p>
                {locale == "de"
                  ? thanks.partner.german.headline
                  : thanks.partner.english.headline}
              </p>
              <div className="dankLogos">
                {thanks.partner?.logos.map((logo, i) => (
                  <span
                    key={i}
                    style={{
                      width: "250px",
                      height: "80px",
                      position: "relative",
                    }}
                  >
                    <Image
                      fill
                      src={logo.asset.url}
                      alt={
                        "German Pavillon 2024 Venice Biennale Supporter Logo"
                      }
                      loading="lazy"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
          )}

          {thanks.supporter && (
            <div>
              <p>
                {locale == "de"
                  ? thanks.supporter.german.headline
                  : thanks.supporter.english.headline}
              </p>
              <div className="dankLogos">
                {thanks.supporter?.logos.map((logo, i) => (
                  <span
                    key={i}
                    style={{
                      width: "100%",
                      height: "100px",
                      position: "relative",
                    }}
                  >
                    <Image
                      fill
                      src={logo.asset.url}
                      alt={
                        "German Pavillon 2024 Venice Biennale Supporter Logo"
                      }
                      loading="lazy"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
          )}

          {thanks.cooperation && (
            <div>
              <p>
                {locale == "de"
                  ? thanks.cooperation.german.headline
                  : thanks.cooperation.english.headline}
              </p>
              <div className="dankLogos">
                {thanks.cooperation?.logos.map((logo, i) => (
                  <span
                    key={i}
                    style={{
                      width: "250px",
                      height: "100px",
                      position: "relative",
                    }}
                  >
                    <Image
                      fill
                      src={logo.asset.url}
                      alt={
                        "German Pavillon 2024 Venice Biennale Supporter Logo"
                      }
                      loading="lazy"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </span>
                ))}
              </div>
            </div>
          )}

          {thanks.thanks && (
            <div>
              <p>
                {locale == "de"
                  ? thanks.thanks.german.headline
                  : thanks.thanks.english.headline}
              </p>
              <div className="dankListe">
                {thanks.thanks?.entry.map((entry, i) => (
                  <p key={i}>{entry}</p>
                ))}
              </div>
            </div>
          )}

          {thanks.lenders && (
            <div style={{marginTop: "var(--space-L)"}}>
              <p>
                {locale == "de"
                  ? thanks.lenders.german.headline
                  : thanks.lenders.english.headline}
              </p>
              <div className="dankListe">
                {thanks.lenders?.entry.map((entry, i) => (
                  <p key={i}>{entry}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
