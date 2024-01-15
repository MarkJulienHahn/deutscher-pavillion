"use client";
import { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import NavMenu from "../Nav/NavMenu";
import { urlFor } from "../../hooks/useImageUrlBuilder";
import Image from "next/image";

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
          <PortableText
            value={locale == "de" ? thanks.text.german : thanks.text.english}
          />
          <div className="dankLogos">
            {thanks.logos.map((logo, i) => (
              <span
                key={i}
                style={{
                  width: "250px",
                  height: "100px",
                  position: "relative",
                }}
              >
                {!delay && (
                  <Image
                    fill
                    src={logo.asset.url}
                    alt={"logo"}
                    loading="lazy"
                  />
                )}
              </span>
            ))}
          </div>
          <div>
            <h2>{partnerHeadline}</h2>
            <PortableText value={partnerText} />
          </div>
        </div>
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
