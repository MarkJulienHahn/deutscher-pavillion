"use client";

import { useState, useEffect, useRef } from "react";

import NavMenu from "../Nav/NavMenu";

import Image from "next/image";
import useWindowDimensions from "../useWindowDimensions";

import { urlFor } from "../../hooks/useImageUrlBuilder";
import { PortableText } from "@portabletext/react";

export default function Curators({ special, locale }) {
  const [imgWidth, setImgWidth] = useState(null);
  const ref = useRef();
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    setImgWidth(ref.current?.clientWidth);
  }, [windowWidth]);

  console.log(special);

  return (
    <main>
      <div className="singlePageWrapper">
        <h1>
          {locale == "de" ? "Weitere Informationen" : "Further Information"}
        </h1>

        {special.text ? (
          <div className="introText">
            <PortableText
              value={
                locale == "de"
                  ? special.text.textGerman
                  : special.text.textEnglish
              }
            />
          </div>
        ) : (
          ""
        )}

        {special.images.length && (
          <div className="imageArray">
            {special.images.map((image, i) => (
              <div className="imageCuratorOuter" key={i}>
                <div
                  className="imageCurator"
                  style={{
                    height:
                      imgWidth / image.asset.metadata.dimensions.aspectRatio,
                  }}
                  ref={ref}
                >
                  <Image
                    src={`${urlFor(image.asset.url).url()}/${
                      image.filename.current ||
                      "german-pavillon-2024-vernice-biennale"
                    }`}
                    alt={
                      image.alt ||
                      "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
                    }
                    
                    fill
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      aspectRatio: image.asset.metadata.dimensions.aspectRatio,
                    }}
                  />
                  {locale == "de"
                    ? image.captions?.german && (
                        <p className="imageCaptionCurator">
                          {image.captions.german}
                        </p>
                      )
                    : image.captions?.english && (
                        <p className="imageCaptionCurator">
                          {image.captions.english}
                        </p>
                      )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
