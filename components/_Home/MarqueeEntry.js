"use client";
import React from "react";
import { PortableText } from "@portabletext/react";

const MarqueeEntry = ({ entry, locale }) => {
  return (
    entry.startpage && (
      <div className="marqueeEntryWrapper">
        {entry.location == "La Certosa" && (
          <div className="programButton blue">La Certosa</div>
        )}
        {entry.location == "German Pavillon" && (
          <div className="programButton orange">
            {locale == "de" ? "Deutscher Pavillon" : "German Pavilion"}
          </div>
        )}

        <div className="marqueeBig">
          <PortableText
            value={
              locale == "de" ? entry.textBig.german : entry.textBig.english
            }
          />
        </div>
        <div className="marqueeSmall">
          <PortableText
            value={
              locale == "de" ? entry.textSmall.german : entry.textSmall.english
            }
          />{" "}
        </div>
      </div>
    )
  );
};

export default MarqueeEntry;
