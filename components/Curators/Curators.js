"use client";

import { useState, useEffect, useRef } from "react";

import NavMenu from "../Nav/NavMenu";

import Image from "next/image";
import useWindowDimensions from "../useWindowDimensions";

import { urlFor } from "../../hooks/useImageUrlBuilder";
import { PortableText } from "@portabletext/react";

export default function Curators({ curators, locale }) {
  const [imgWidth, setImgWidth] = useState(null);
  const ref = useRef();
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    setImgWidth(ref.current?.clientWidth);
  }, [windowWidth]);

  return (
    <main>
      <div className="singlePageWrapper">
        <h1>{locale == "de" ? "Kuratorin" : "Curator"}</h1>
        <h1>{curators[0].name}</h1>
        <div className="imageCuratorOuter">
          <div
            className="imageCurator"
            style={{
              height:
                imgWidth /
                curators[0].image.asset.metadata.dimensions.aspectRatio,
            }}
            ref={ref}
          >
            <Image
              src={`${urlFor(curators[0].image.asset.url).url()}/${
                curators[0].image.filename.current ||
                "german-pavillon-2024-vernice-biennale"
              }`}
              alt={
                curators[0].image.alt ||
                "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
              }
              fill
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                aspectRatio:
                  curators[0].image.asset.metadata.dimensions.aspectRatio,
              }}
            />
            {locale == "de"
              ? curators[0].image.captions?.german && (
                  <p className="imageCaptionCurator">
                    {curators[0].image.captions.german}
                  </p>
                )
              : curators[0].image.captions?.english && (
                  <p className="imageCaptionCurator">
                    {curators[0].image.captions.english}
                  </p>
                )}
          </div>
        </div>

        {curators[0].text ? (
          <div className="introText textCurator">
            <PortableText
              value={
                locale == "de"
                  ? curators[0].text.textGerman
                  : curators[0].text.textEnglish
              }
            />
          </div>
        ) : (
          ""
        )}

        {curators[0].textBottom ? (
          <div className="introTextBottom textCurator">
            <span>
              <PortableText
                value={
                  locale == "de"
                    ? curators[0].textBottom.textGerman
                    : curators[0].textBottom.textEnglish
                }
              />
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
