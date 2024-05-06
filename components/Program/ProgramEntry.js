"use client";

import React from "react";

import { PortableText } from "@portabletext/react";

export default function ProgramEntry({ entry, locale }) {
  return (
    <div>
      <div className="headlineWrapper">
        {entry.location == "German Pavillon" && (
          <p className="programButton orange">
            {locale == "de" ? "Deutscher Pavillon" : "German Pavilion"}
          </p>
        )}

        {entry.location == "La Certosa" && (
          <p className="programButton blue">La Certosa</p>
        )}
      </div>
      <div className="programBig">
        <PortableText
          value={locale == "de" ? entry.textBig.german : entry.textBig.english}
        />
      </div>
      <div className="programSmall">
        <PortableText
          value={
            locale == "de" ? entry.textSmall.german : entry.textSmall.english
          }
        />
      </div>
    </div>
  );
}
