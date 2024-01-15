import { PortableText } from "@portabletext/react";
import NavMenu from "../Nav/NavMenu";

import Image from "next/image";

export default function Thanks({ thanks, locale }) {
  const content =
    locale === "de" ? thanks.partner.german : thanks.partner.english;
  const partnerHeadline = content.headline || "headline unavailable";
  const partnerText = content.text;

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
              <Image
                style={{ width: "250px" }}
                width={300}
                height={150}
                key={i}
                src={logo.asset.url}
              />
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
