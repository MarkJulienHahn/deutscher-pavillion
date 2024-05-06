"use client";

import { useState, useEffect, useRef } from "react";

import NavBottom from "../Nav/NavBottom";

import Image from "next/image";
import useWindowDimensions from "../useWindowDimensions";

import { urlFor } from "../../hooks/useImageUrlBuilder";
import { PortableText } from "@portabletext/react";

export default function Curators({ content, locale }) {
  const [imgWidth, setImgWidth] = useState(null);
  const biography = useRef();
  const ref = useRef();
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    setImgWidth(ref.current?.clientWidth);
  }, [windowWidth]);

  const biographyScroll = () => {
    biography.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div className="singlePageWrapper">
        <h1>
          {locale == "de" ? "Kuratorisches Konzept" : "Curatorial Concept"}
        </h1>
        <h1>Çağla Ilk</h1>

        <div className="scrollLink" onClick={biographyScroll}>
          <a style={{ paddingTop: "var(--space-XS)" }}>Biography</a>
        </div>

        <div className="curatorTitle">
          <PortableText
            value={locale == "de" ? content.title.de : content.title.en}
          />
        </div>

        {content.text ? (
          <div className="textCurator">
            <PortableText
              value={
                locale == "de"
                  ? content.text.textGerman
                  : content.text.textEnglish
              }
            />
          </div>
        ) : (
          ""
        )}

        <div className="biographyWrapper" ref={biography}>
          <h2>{locale == "de" ? "Biografie" : "Biography"}</h2>

          {content?.portrait && (
            <div className="imageCuratorOuter">
              <div
                className="imageCurator"
                style={{
                  height:
                    imgWidth /
                    content.portrait.asset.metadata.dimensions.aspectRatio,
                }}
                ref={ref}
              >
                <Image
                  src={`${urlFor(content.portrait.asset.url).url()}/${
                    content.portrait.filename?.current ||
                    "german-pavillon-2024-vernice-biennale"
                  }`}
                  alt={
                    content.portrait.alt ||
                    "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
                  }
                  fill
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    aspectRatio:
                      content.portrait.asset.metadata.dimensions.aspectRatio,
                  }}
                />
                {locale == "de"
                  ? content.portrait.captions?.german && (
                      <p className="imageCaptionCurator">
                        {content.portrait.captions.german}
                      </p>
                    )
                  : content.portrait.captions?.english && (
                      <p className="imageCaptionCurator">
                        {content.portrait.captions.english}
                      </p>
                    )}
              </div>
            </div>
          )}

          {content.biography ? (
            <div className="textCurator">
              <span>
                <PortableText
                  value={
                    locale == "de"
                      ? content.biography.textGerman
                      : content.biography.textEnglish
                  }
                />
              </span>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <NavBottom locale={locale} />
    </main>
  );
}
