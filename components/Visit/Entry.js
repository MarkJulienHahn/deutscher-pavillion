import React from "react";
import { PortableText } from "@portabletext/react";
import Download from "../Press/Download";
import { serializers } from "../../hooks/portableTextSerializer";

export default function Entry({ entry, locale }) {
  const content = locale === "de" ? entry.german : entry.english;

  const url = content?.url || entry.german?.url;
  const headline = content?.headline || "Headline Unavailable";
  const text = content?.text || entry.german?.text;

  return (
    <div className="introText centered">
      {url ? (
        <h3>
          <a href={url} target="_blank" rel="noreferrer">
            {headline}
          </a>
        </h3>
      ) : (
        <h3>{headline}</h3>
      )}
      <div className="sectionWrapper">
        <PortableText value={text} components={serializers} />
        {entry?.downloads?.map((download, i) => (
          <Download download={download} locale={locale} key={i} />
        ))}
      </div>
    </div>
  );
}
