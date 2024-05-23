import React from "react";
import { getInterview } from "../../../../../sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function page({ params: { locale } }) {
  const interview = await getInterview();

  console.log(interview[1]);

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
            fontFamily: "ABCDailyScotch",
          }}
        >
          {locale == "de" ? interview[1]?.title : interview[1]?.titleEn}
        </h3>
        <PortableText
          value={
            locale == "de"
              ? interview[1]?.text.textGerman
              : interview[1]?.text.textEnglish
          }
        />
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "70vw",
            marginTop: "100px",
          }}
        >
          <Image
            src={interview[1].image.asset.url}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </div>
    </main>
  );
}
