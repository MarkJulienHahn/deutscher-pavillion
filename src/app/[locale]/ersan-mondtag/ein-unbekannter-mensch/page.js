"use client";
import React from "react";
import { getInterview } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function page({ params: { locale } }) {
  const interview = await getInterview();

  return (
    <main>
      <div
        className="artistSingleWrapper"
        style={{ background: "var(--red)", marginBottom: "0px" }}
      >
        <h3
          style={{
            textAlign: "center",
            width: "100%",
            marginBottom: "var(--space-L)",
            fontFamily: "ABCDailyScotch"
          }}
        >
          {locale == "de" ? interview[1]?.title : interview[1]?.titleEn}
        </h3>
        <PortableText value={interview[1]?.text.textGerman} />
      </div>
    </main>
  );
}
