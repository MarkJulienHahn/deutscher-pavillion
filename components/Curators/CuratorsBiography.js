import { useState, useEffect, useRef } from "react";

import Image from "next/image";
import { PortableText } from "@portabletext/react";

import useWindowDimensions from "../useWindowDimensions";
import { useInView } from "react-intersection-observer";

import { urlFor } from "../../hooks/useImageUrlBuilder";

const CuratorsBiography = ({ content, locale, scrollAnchor, setInView }) => {
  const [imgWidth, setImgWidth] = useState(null);
  const scrollRef = useRef();
  const imgRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const scrollFunction = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    setImgWidth(imgRef.current?.clientWidth);
  }, [windowWidth]);

  useEffect(() => {
    scrollAnchor == "biography" && scrollFunction();
  }, [scrollAnchor]);

  useEffect(() => {
    inView && setInView("biography");
  }, [inView]);

  return (
    <div className="biographyWrapper" ref={ref}>
      <div
        ref={scrollRef}
        style={{ position: "absolute", transform: "translateY(-120px)" }}
      />
      <h2>{locale == "de" ? "Biografie" : "Biography"}</h2>

      {content?.portrait && (
        <div className="imageCuratorOuter" ref={imgRef}>
          <div
            className="imageCurator"
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
  );
};

export default CuratorsBiography;
