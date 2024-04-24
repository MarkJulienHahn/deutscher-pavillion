import React from "react";
import { useState, useRef, useEffect } from "react";

import Image from "next/image";

import Artist from "./Artist";
import ArtistOverviewEntry from "./ArtistsOverviewEntry";
import Nav from "../Nav/Nav";
import Switch from "../Switch";

import useWindowDimensions from "../useWindowDimensions";
import { use100vh } from "react-div-100vh";

import { urlFor } from "../../hooks/useImageUrlBuilder";

export default function AristsMobile({ locale, artists, artistImages }) {
  const [anchor, setAnchor] = useState(null);
  const [delay, setDelay] = useState(true);
  const [heightLeft, setHeightLeft] = useState(null);
  const [heightRight, setHeightRight] = useState(null);

  const [focusLeft, setFocusLeft] = useState(true);

  const height = use100vh();

  const anchorFunction = (slug) => {
    setAnchor(slug);
    setTimeout(() => setAnchor(null), 500);
  };

  const [showHeadline, setShowHeadline] = useState(true);

  const [scrollPositionLeft, setScrollPositionLeft] = useState("");
  const left = useRef();
  const leftHeadline = useRef();

  const [scrollPositionRight, setScrollPositionRight] = useState("");
  const right = useRef();
  const rightHeadline = useRef();

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
    scrollPositionLeft > 50 && focusLeft && setShowHeadline(false);
    scrollPositionLeft < 50 && focusLeft && setShowHeadline(true);

    scrollPositionRight > 50 && !focusLeft && setShowHeadline(false);
    scrollPositionRight < 50 && !focusLeft && setShowHeadline(true);
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
        artistImages.imageRightMobile.asset.metadata.dimensions.aspectRatio
    );
  }, [left, right, windowWidth]);

  useEffect(() => {
    !focusLeft &&
      setTimeout(() => {
        leftHeadline.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 500);
    focusLeft &&
      setTimeout(
        rightHeadline.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        }),
        500
      );
  }, [focusLeft]);

  return (
    <>
      <Nav locale={locale} color={focusLeft ? "normal" : "orange"} />

      <Switch
        locale={locale}
        trigger={focusLeft}
        showHeadline={showHeadline}
        setFocusLeft={setFocusLeft}
        focusLeft={focusLeft}
      />

      <div
        className="columnPageWrapper"
        style={{
          height: height,
          transform: focusLeft ? "" : "translateX(-90vw)",
        }}
      >
        <div
          className="columnWrapper bgRed active"
          ref={left}
          onClick={!focusLeft ? () => setFocusLeft(true) : () => {}}
        >
          <div className={"top"} ref={leftHeadline}></div>

          <div
            className="artistSelector"
            style={{ pointerEvents: focusLeft ? "auto" : "none" }}
          >
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
          <div className="imageFullwidth groupPictureMobile">
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

        <div
          className="columnWrapper bgBlue"
          ref={right}
          onClick={focusLeft ? () => setFocusLeft(false) : () => {}}
        >
          <div className={"top"} ref={rightHeadline}></div>
          <div
            className="artistSelector"
            style={{ pointerEvents: !focusLeft ? "auto" : "none" }}
          >
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
          <div className="imageFullwidth groupPictureMobile">
            {heightRight && (
              <div style={{ width: "100%", height: `${heightRight}px` }}>
                <Image
                  src={`${urlFor(
                    artistImages.imageRightMobile?.asset.url
                  ).url()}/${
                    artistImages.imageRightMobile?.filename.current
                      ? artistImages.imageRightMobile?.filename.current
                      : "german-pavillon-2024-vernice-biennale"
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
                    style={{ top: `${heightRight - 20}px` }}
                  >
                    {artistImages.imageRightMobile.captions.german}
                  </p>
                )
              : artistImages.imageRightMobile.captions?.english && (
                  <p
                    className="imageCaption"
                    style={{ top: `${heightRight - 20}px` }}
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
    </>
  );
}
