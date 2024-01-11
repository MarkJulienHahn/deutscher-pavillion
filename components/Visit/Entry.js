import React from "react";
import { PortableText } from "@portabletext/react";

export default function Entry({ entry, locale }) {
  const content = locale === "de" ? entry.german : entry.english;

  const url = content?.url || entry.german?.url;
  const headline = content?.headline || "Headline Unavailable";
  const text = content?.text || entry.german?.text;

  return (
    <div className="introText centered">
      {url ? (
        <h2>
          <a href={url} target="_blank" rel="noreferrer">
            {headline}
          </a>
        </h2>
      ) : (
        <h2>{headline}</h2>
      )}
      <div className="sectionWrapper">
        <PortableText value={text} />
      </div>
    </div>
  );
}
