"use client";
import { useState, useRef, useEffect } from "react";

import Image from "next/image";

import { urlFor } from "../../hooks/useImageUrlBuilder";
import { PortableText } from "@portabletext/react";
import { serializers } from "../../hooks/portableTextSerializer";

import useWindowDimensions from "../useWindowDimensions";

function isEven(number) {
  return number % 2 === 0;
}

export default function Entry({ locale, entry, i }) {
  const [height, setHeight] = useState(null);

  const ref = useRef();
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    setHeight(
      ref.current?.clientWidth /
        entry.image.asset.metadata.dimensions.aspectRatio
    );
  }, [ref, windowWidth]);

  return (
    <div
      className={`chronicleEntryWrapper ${
        isEven(i) ? "chronicleLeft" : "chronicleRight"
      } ${i > 0 ? "offsetTop" : ""}`}
    >
      <div className="chronicleEntryInner" ref={ref}>
        <h2>{entry.name}</h2>
        <div className="imageFullwidth chroniclePicture">
          {height && (
            <div style={{ width: "100%", height: `${height}px` }}>
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
                  aspectRatio:
                    entry.image.asset.metadata.dimensions.aspectRatio,
                }}
              />
            </div>
          )}{" "}
          {locale == "de"
            ? entry.image.captions?.german && (
                <p className="imageCaption" style={{ top: `${height - 20}px` }}>
                  {entry.image.captions.german}
                </p>
              )
            : entry.image.captions?.english && (
                <p className="imageCaption" style={{ top: `${height - 20}px` }}>
                  {entry.image.captions.english}
                </p>
              )}
        </div>



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
