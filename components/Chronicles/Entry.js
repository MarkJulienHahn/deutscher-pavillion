"use client";

import Image from "next/image";

import { urlFor } from "../../hooks/useImageUrlBuilder";
import { PortableText } from "@portabletext/react";
import { serializers } from "../../hooks/portableTextSerializer";

function isEven(number) {
  return number % 2 === 0;
}

export default function Entry({ locale, entry, i }) {
  return (
    <div
      className={`chronicleEntryWrapper ${
        isEven(i) ? "chronicleLeft" : "chronicleRight"
      } ${i > 0 ? "offsetTop" : ""}`}
    >
      <div className="chronicleEntryInner">
        <div id={entry?.slug?.current} style={{transform: "translateY(-60px)"}}></div>
        <h2>{entry.name}</h2>
        <div className="chroniclePicture">
          <Image
            src={`${urlFor(entry.image.asset.url).url()}/${
              entry.image.filename.current ||
              "german-pavillon-2024-vernice-biennale"
            }`}
            alt={
              entry.image.alt ||
              "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
            }
            loading="lazy"
            fill
            style={{
              objectFit: "cover",
              width: "100%",
              aspectRatio: entry.image.asset.metadata.dimensions.aspectRatio,
            }}
          />
        </div>

        <p className="imageCaptionChroniclers">
          {locale == "de"
            ? entry.image.captions.german
            : entry.image.captions.english}
        </p>

        {entry.text ? (
          <div className="textChronicles">
            <PortableText
              value={
                locale == "de" ? entry.text.textGerman : entry.text.textEnglish
              }
              components={serializers}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
