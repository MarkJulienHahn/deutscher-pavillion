import React from "react";
import { useState, useRef, useEffect } from "react";

import Image from "next/image";

import Artist from "./Artist";
import ArtistOverviewEntry from "./ArtistsOverviewEntry";

import useWindowDimensions from "../useWindowDimensions";

import { urlFor } from "../../hooks/useImageUrlBuilder";

const visible = {
  opacity: "1",
  height: "81.6px",
  transform: "translateX(2px)",
};
const invisible = {
  opacity: "0",
  height: "81.6px",
  transform: "translateX(2px)",
};

export default function AristsMobile({ locale, artists, artistImages }) {
  const [anchor, setAnchor] = useState(null);
  const [delay, setDelay] = useState(true);
  const [heightLeft, setHeightLeft] = useState(null);
  const [heightRight, setHeightRight] = useState(null);

  const anchorFunction = (slug) => {
    setAnchor(slug);
    setTimeout(() => setAnchor(null), 500);
  };

  const [showHeadline, setShowHeadline] = useState(true);

  const [scrollPositionLeft, setScrollPositionLeft] = useState("");
  const left = useRef();

  const [scrollPositionRight, setScrollPositionRight] = useState("");
  const right = useRef();

  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPositionLeft(left.current.scrollTop);
      setScrollPositionRight(right.current.scrollTop);
    };

    left.current.addEventListener("scroll", handleScroll);
    right.current.addEventListener("scroll", handleScroll);
  });

  useEffect(() => {
    (scrollPositionLeft > 240 || scrollPositionRight > 240) &&
      setShowHeadline(false);
    scrollPositionLeft < 240 &&
      scrollPositionRight < 240 &&
      setShowHeadline(true);
  }, [scrollPositionLeft, scrollPositionRight]);

  useEffect(() => {
    setTimeout(setDelay(false), 500);
  }, []);

  useEffect(() => {
    setHeightLeft(
      left.current?.clientWidth /
        artistImages.imageLeft.asset.metadata.dimensions.aspectRatio
    );
    setHeightRight(
      right.current?.clientWidth /
        artistImages.imageRight.asset.metadata.dimensions.aspectRatio
    );
  }, [left, right]);
  return (
    <div className="columnPageWrapper">
      <div className="columnWrapper bgRed" ref={left}>
        {windowWidth < 1300 && !delay && (
          <h1 className="mobileHeadline">
            {locale == "de" ? "Künstler:innen" : "Artists"}
          </h1>
        )}

        <div className="artistSelector">
          <h3>{locale == "de" ? "Deutscher Pavillon" : "German Pavillon"}</h3>

          {artists.map((artist, i) =>
            !artist.certosa ? (
              <ArtistOverviewEntry
                key={i}
                artist={artist}
                anchorFunction={anchorFunction}
              />
            ) : (
              ""
            )
          )}
        </div>

        <div className="imageFullwidth groupPicture">
          {heightLeft && (
            <div style={{ width: "100%", height: `${heightLeft}px` }}>
              <Image
                src={`${urlFor(artistImages.imageLeft?.asset.url).url()}/${
                  artistImages.imageLeft?.filename.current
                    ? artistImages.imageLeft?.filename.current
                    : "german-pavillon-2024-vernice-biennale"
                }`}
                alt={
                  artistImages.imageLeft?.alt ||
                  "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
                }
                loading="lazy"
                fill
                style={{
                  objectFit: "cover",
                  width: "100%",
                  aspectRatio:
                    artistImages.imageLeft.asset.metadata.dimensions
                      .aspectRatio,
                }}
              />
            </div>
          )}
        </div>

        {artists.map((artist, i) =>
          !artist.certosa ? (
            <Artist artist={artist} locale={locale} key={i} anchor={anchor} />
          ) : (
            ""
          )
        )}
      </div>

      <div className="columnWrapper bgBlue" ref={right}>
        <div className="artistSelector">
          <h3>La Certosa</h3>
          {artists.map((artist, i) =>
            artist.certosa ? (
              <ArtistOverviewEntry
                key={i}
                artist={artist}
                anchorFunction={anchorFunction}
              />
            ) : (
              ""
            )
          )}
        </div>

        <div className="imageFullwidth groupPicture">
          {heightRight && (
            <div style={{ width: "100%", height: `${heightRight}px` }}>
              <Image
                src={`${urlFor(artistImages.imageRight?.asset.url).url()}/${
                  artistImages.imageRight?.filename.current
                    ? artistImages.imageRight?.filename.current
                    : "german-pavillon-2024-vernice-biennale"
                }`}
                alt={
                  artistImages.imageRight?.alt ||
                  "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
                }
                loading="lazy"
                fill
                style={{
                  objectFit: "cover",
                  width: "100%",
                  aspectRatio:
                    artistImages.imageRight.asset.metadata.dimensions
                      .aspectRatio,
                }}
              />
            </div>
          )}
          {locale == "de"
            ? artistImages.imageRight.captions?.german && (
                <p className="imageCaption">
                  {artistImages.imageRight.captions.german}
                </p>
              )
            : artistImages.imageRight.captions?.english && (
                <p className="imageCaption">
                  {artistImages.imageRight.captions.english}
                </p>
              )}
        </div>

        {artists.map((artist, i) =>
          artist.certosa ? (
            <Artist artist={artist} locale={locale} key={i} anchor={anchor} />
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
}
