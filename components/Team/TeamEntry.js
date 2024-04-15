import { PortableText } from "@portabletext/react";
import React from "react";

export default function TeamEntry({ entry, locale }) {
  const headline =
    entry.headline?.textGerman || entry.headline?.textEnglish
      ? locale == "de"
        ? entry.headline.textGerman
        : entry.headline.textEnglish
      : locale == "de"
      ? entry.headline.german
      : entry.headline.english;

  return (
    <div className="sectionWrapper">
      <h2 className="teamHeadline">
        {entry.headline?.textGerman || entry.headline?.textEnglish ? (
          <PortableText value={headline} />
        ) : (
          headline
        )}
      </h2>
      <div className="teamWrapper">
        {entry.names.map((name, i) =>
          !name.url ? (
            !name.nameEnglish ? (
              <p key={i}>{name.name}</p>
            ) : locale == "de" ? (
              <p key={i}>{name.name}</p>
            ) : (
              <p key={i}>{name.nameEnglish}</p>
            )
          ) : (
            <a key={i} href={name.url} target="_blank" rel="noreferrer">
              <p>{name.name}</p>
            </a>
          )
        )}
      </div>
    </div>
  );
}
