import React from "react";

export default function TeamEntry({ entry, locale }) {
  const headline =
    locale == "de" ? entry.headline.german : entry.headline.english;

  return (
    <div className="sectionWrapper">
      <h2>{headline}</h2>
      <div className="teamWrapper">
        {entry.names.map((name, i) =>
          !name.url ? (
            <p key={i}>{name.name}</p>
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
