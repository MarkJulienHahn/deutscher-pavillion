import React from "react";
import { useState, useRef, useEffect } from "react";

import NavMenu from "../Nav/NavMenu";
import ExhibitionEntry from "./ExhibitionEntry";
import Nav from "../Nav/Nav";
import Switch from "../Switch";

import useWindowDimensions from "../useWindowDimensions";
import { use100vh } from "react-div-100vh";

import { urlFor } from "../../hooks/useImageUrlBuilder";

export default function AristsMobile({
  locale,
  exhibitionPavillon,
  exhibitionCertosa,
}) {
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

  //   useEffect(() => {
  //     setHeightLeft(
  //       left.current?.clientWidth /
  //         artistImages.imageLeft.asset.metadata.dimensions.aspectRatio
  //     );
  //     setHeightRight(
  //       right.current?.clientWidth /
  //         artistImages.imageRightMobile.asset.metadata.dimensions.aspectRatio
  //     );
  //   }, [left, right, windowWidth]);

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

console.log(scrollPositionLeft, focusLeft, showHeadline)


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
          transform: focusLeft ? "" : "translateX(-80vw)",
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
            <h2>{locale == "de" ? "Deutscher Pavillon" : "German Pavillon"}</h2>
          </div>

          {exhibitionPavillon.map((entry, i) => (
            <ExhibitionEntry
              entry={entry}
              locale={locale}
              key={i}
              anchor={anchor}
              certosa={false}
            />
          ))}
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
            <h2>La Certosa</h2>
          </div>
          {exhibitionCertosa.map((entry, i) => (
            <ExhibitionEntry
              entry={entry}
              locale={locale}
              key={i}
              anchor={anchor}
              certosa={true}
            />
          ))}
        </div>
      </div>
    </>
  );
}
