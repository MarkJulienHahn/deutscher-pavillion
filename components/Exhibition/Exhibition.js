"use client";

import React from "react";
import ExhibitionEntry from "./ExhibitionEntry";
import CertosaMap from "../../components/svg/CertosaMap.js";
import PavilionMap from "../../components/svg/PavilionMap.js";

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

      <div className="mapWrapper">
       {location == "certosa" ? <CertosaMap /> : <PavilionMap />}
      </div>

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
