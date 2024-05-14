"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

import Artist from "./Artist";
import ArtistOverviewEntry from "./ArtistsOverviewEntry";
import ArtistsMobile from "./AristsMobile";
import NavMenu from "../Nav/NavMenu";

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

const Artists = ({ artists, artistImages, locale }) => {
  const [anchor, setAnchor] = useState(null);
  const [delay, setDelay] = useState(true);
  const [heightLeft, setHeightLeft] = useState(null);
  const [heightRight, setHeightRight] = useState(null);
  const [heightRightMobile, setHeightRightMobile] = useState(null);
  const [showHeadline, setShowHeadline] = useState(true);
  const [scrollPositionLeft, setScrollPositionLeft] = useState(0);
  const [scrollPositionRight, setScrollPositionRight] = useState(0);

  const left = useRef();
  const right = useRef();
  const rightMobile = useRef();

  const { windowWidth } = useWindowDimensions();

  const anchorFunction = (slug) => {
    setAnchor(slug);
    setTimeout(() => setAnchor(null), 500);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPositionLeft(left.current.scrollTop);
      setScrollPositionRight(right.current.scrollTop);
    };

    left.current.addEventListener("scroll", handleScroll);
    right.current.addEventListener("scroll", handleScroll);

    return () => {
      left.current.removeEventListener("scroll", handleScroll);
      right.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    (scrollPositionLeft > 240 || scrollPositionRight > 240) &&
      setShowHeadline(false);
    scrollPositionLeft < 240 &&
      scrollPositionRight < 240 &&
      setShowHeadline(true);
  }, [scrollPositionLeft, scrollPositionRight]);

  useEffect(() => {
    setTimeout(() => setDelay(false), 500);
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
    setHeightRightMobile(
      rightMobile.current?.clientWidth /
        artistImages.imageRightMobile.asset.metadata.dimensions.aspectRatio
    );
  }, [left, right, rightMobile, windowWidth]);

  useEffect(() => {
    let isProgrammaticScroll = false;

    const handleScroll = (e) => {
      if (isProgrammaticScroll) {
        isProgrammaticScroll = false;
        return;
      }

      const isLeftScrolling = e.target === left.current;
      const scrollableElement = isLeftScrolling ? left.current : right.current;
      const otherElement = isLeftScrolling ? right.current : left.current;

      const scrollRatio =
        scrollableElement.scrollTop /
        (scrollableElement.scrollHeight - scrollableElement.clientHeight);

      isProgrammaticScroll = true;
      otherElement.scrollTop =
        scrollRatio * (otherElement.scrollHeight - otherElement.clientHeight);
    };

    const leftElement = left.current;
    const rightElement = right.current;

    leftElement?.addEventListener("scroll", handleScroll);
    rightElement?.addEventListener("scroll", handleScroll);

    return () => {
      leftElement?.removeEventListener("scroll", handleScroll);
      rightElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="columnPageWrapper artistsDesktop">
        {windowWidth > 1000 && !delay && (
          <img
            className="columnPageHeadline"
            style={showHeadline ? visible : invisible}
            alt="headline"
            src={
              locale == "de" ? "/svg/headline-03.svg" : "/svg/headline-04.svg"
            }
          />
        )}

        <div className="columnWrapper bgRed" ref={left}>
          {windowWidth < 1000 && !delay && (
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
                      : "german-pavillon-2024-venice-biennale"
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
            {locale == "de"
              ? artistImages.imageLeft.captions?.german && (
                  <p
                    className="imageCaption"
                    style={{ top: `${heightLeft - 20}px` }}
                  >
                    {artistImages.imageLeft.captions.german}
                  </p>
                )
              : artistImages.imageLeft.captions?.english && (
                  <p
                    className="imageCaption"
                    style={{ top: `${heightLeft - 20}px` }}
                  >
                    {artistImages.imageLeft.captions.english}
                  </p>
                )}
          </div>

          <div className="imageFullwidth groupPictureMobile">
            {heightLeft && (
              <div style={{ width: "100%", height: `${heightLeft}px` }}>
                <Image
                  src={`${urlFor(artistImages.imageLeft?.asset.url).url()}/${
                    artistImages.imageLeft?.filename.current
                      ? artistImages.imageLeft?.filename.current
                      : "german-pavillon-2024-venice-biennale"
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
            {locale == "de"
              ? artistImages.imageLeft.captions?.german && (
                  <p
                    className="imageCaption"
                    style={{ top: `${heightLeft - 20}px` }}
                  >
                    {artistImages.imageLeft.captions.german}
                  </p>
                )
              : artistImages.imageLeft.captions?.english && (
                  <p
                    className="imageCaption"
                    style={{ top: `${heightLeft - 20}px` }}
                  >
                    {artistImages.imageLeft.captions.english}
                  </p>
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

          <div>
            <div className="imageFullwidth groupPicture">
              {heightRight && (
                <div style={{ width: "100%", height: `${heightRight}px` }}>
                  <Image
                    src={`${urlFor(artistImages.imageRight?.asset.url).url()}/${
                      artistImages.imageRight?.filename.current
                        ? artistImages.imageRight?.filename.current
                        : "german-pavillon-2024-venice-biennale"
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
                    <p
                      className="imageCaption"
                      style={{ top: `${heightRight - 20}px` }}
                    >
                      {artistImages.imageRight.captions.german}
                    </p>
                  )
                : artistImages.imageRight.captions?.english && (
                    <p
                      className="imageCaption"
                      style={{ top: `${heightRight - 20}px` }}
                    >
                      {artistImages.imageRight.captions.english}
                    </p>
                  )}
            </div>
          </div>

          <div className="imageFullwidth groupPictureMobile" ref={rightMobile}>
            {heightRightMobile && (
              <div style={{ width: "100%", height: `${heightRightMobile}px` }}>
                <Image
                  src={`${urlFor(
                    artistImages.imageRightMobile?.asset.url
                  ).url()}/${
                    artistImages.imageRightMobile?.filename.current
                      ? artistImages.imageRight?.filename.current
                      : "german-pavillon-2024-venice-biennale"
                  }`}
                  alt={
                    artistImages.imageRightMobile?.alt ||
                    "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
                  }
                  loading="lazy"
                  fill
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    aspectRatio:
                      artistImages.imageRightMobile.asset.metadata.dimensions
                        .aspectRatio,
                  }}
                />
              </div>
            )}
            {locale == "de"
              ? artistImages.imageRightMobile.captions?.german && (
                  <p
                    className="imageCaption"
                    style={{ top: `${heightRightMobile - 20}px` }}
                  >
                    {artistImages.imageRightMobile.captions.german}
                  </p>
                )
              : artistImages.imageRightMobile.captions?.english && (
                  <p
                    className="imageCaption"
                    style={{ top: `${heightRightMobile - 20}px` }}
                  >
                    {artistImages.imageRightMobile.captions.english}
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

      <div className="artistsMobile">
        <ArtistsMobile
          locale={locale}
          artists={artists}
          artistImages={artistImages}
        />
      </div>

      <div style={{ zIndex: "11", position: "relative" }}>
        <NavMenu locale={locale} />
      </div>
    </main>
  );
};

export default Artists;
