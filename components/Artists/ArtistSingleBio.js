"use client";

import { useState, useEffect, useRef } from "react";

import { PortableText } from "@portabletext/react";

import Image from "next/image";
import useWindowDimensions from "../useWindowDimensions";

import { urlFor } from "../../hooks/useImageUrlBuilder";

import ArtistSingleEntry from "./ArtistSingleEntry";
import ExhibitionTwoColumn from "../Exhibition/ExhibitionTwoColumn";
import ExhibitionSwitch from "../Exhibition/ExhibitionSwitch";

const blueBG = { background: "var(--blue)", color: "var(--red)" };
const orangeBG = { background: "var(--red)", color: "var(--blue)" };

const ArtistSingle = ({
  slug,
  artists,
  locale,
  exhibitionPavillon,
  exhibitionCertosa,
}) => {
  const [imgWidth, setImgWidth] = useState(null);
  const [scrollAnchor, setScrollAnchor] = useState(null);
  const artist = artists.filter((element) => element.slug.current == slug)[0];
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    setImgWidth(ref.current?.clientWidth);
  }, [windowWidth]);

  const biography = useRef();
  const ref = useRef();

  const scrollAnchorFct = async (ref) => {
    setScrollAnchor(ref), setTimeout(() => setScrollAnchor(null), 500);
  };

  const biographyScroll = () => {
    biography.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <div
        className="artistSingleWrapper"
        style={artist.certosa ? blueBG : orangeBG}
      >
        <div>
          <h2>{artist?.name}</h2>

          {artist?.portrait && (
            <div className="imageCuratorOuter">
              <div
                className="imageCurator"
                style={{
                  height:
                    imgWidth /
                    artist.portrait.asset.metadata.dimensions.aspectRatio,
                }}
                ref={ref}
              >
                <Image
                  src={`${urlFor(artist.portrait.asset.url).url()}/${
                    artist.portrait.filename?.current ||
                    "german-pavillon-2024-vernice-biennale"
                  }`}
                  alt={
                    artist.portrait.alt ||
                    "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
                  }
                  fill
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                    aspectRatio:
                      artist.portrait.asset.metadata.dimensions.aspectRatio,
                  }}
                />
                {locale == "de"
                  ? artist.portrait.captions?.german && (
                      <p className="imageCaptionCurator">
                        {artist.portrait.captions.german}
                      </p>
                    )
                  : artist.portrait.captions?.english && (
                      <p className="imageCaptionCurator">
                        {artist.portrait.captions.english}
                      </p>
                    )}
              </div>
            </div>
          )}

          {artist.text && (
            <div style={{ paddingTop: "var(--space-S)" }}>
              <PortableText
                value={
                  locale == "de"
                    ? artist.text.textGerman
                    : artist.text.textEnglish
                }
              />
            </div>
          )}
        </div>
      </div>
      <div className="exhibitionDesktop">
        <ExhibitionTwoColumn
          locale={locale}
          exhibitionPavillon={exhibitionPavillon[0]}
          exhibitionCertosa={exhibitionCertosa[0]}
        />
      </div>

      <div className="exhibitionMobile">
        <ExhibitionSwitch
          locale={locale}
          exhibitionPavillon={exhibitionPavillon[0]}
          exhibitionCertosa={exhibitionCertosa[0]}
          switched={false}
        />
      </div>
    </main>
  );
};

export default ArtistSingle;
