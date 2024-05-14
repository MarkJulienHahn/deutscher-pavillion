"use client";
import React from "react";
import { getInterview } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export default async function page() {
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
          {interview[0]?.title}
        </h3>
        <PortableText value={interview[0]?.text.textGerman} />
      </div>
    </main>
  );
}
