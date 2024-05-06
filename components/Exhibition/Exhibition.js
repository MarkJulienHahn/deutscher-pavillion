"use client"

import React from "react";
import ExhibitionEntry from "./ExhibitionEntry";

const Exhibition = ({ locale, exhibition, location }) => {

  return (
    <div
      className={`singlePageWrapper ${
        location == "pavilion" ? "orange" : "blue"
      }`}
    >
      <h2>
        {location == "pavilion"
          ? locale == "de"
            ? "Deutscher Pavillon"
            : "German Pavilion"
          : "La Certosa"}
      </h2>
      {exhibition.map((entry, i) => (
        <ExhibitionEntry
          entry={entry}
          locale={locale}
          key={i}
          certosa={false}
        />
      ))}
    </div>
  );
};

export default Exhibition;
