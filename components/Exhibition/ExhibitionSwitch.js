import React from "react";
import { useState, useRef, useEffect } from "react";

import NavMenu from "../Nav/NavMenu";
import ExhibitionEntry from "./ExhibitionEntry";
import Nav from "../Nav/Nav";
import Switch from "../Switch";

import { Link } from "../../src/navigation";

import { usePathname } from "next/navigation";

import useWindowDimensions from "../useWindowDimensions";
import { use100vh } from "react-div-100vh";

import { urlFor } from "../../hooks/useImageUrlBuilder";

export default function ExhibitionSwitch({
  locale,
  exhibitionPavillon,
  exhibitionCertosa,
  switched,
}) {
  const [anchor, setAnchor] = useState(null);
  const [delay, setDelay] = useState(true);
  const [heightLeft, setHeightLeft] = useState(null);
  const [heightRight, setHeightRight] = useState(null);

  const [focusLeft, setFocusLeft] = useState(true);

  const height = use100vh();

  const pathname = usePathname();

  const anchorFunction = (slug) => {
    setAnchor(slug);
    setTimeout(() => setAnchor(null), 500);
  };

  const [showHeadline, setShowHeadline] = useState(true);

  // const [scrollPositionLeft, setScrollPositionLeft] = useState("");
  // const left = useRef();
  // const leftHeadline = useRef();

  // const [scrollPositionRight, setScrollPositionRight] = useState("");
  // const right = useRef();
  // const rightHeadline = useRef();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPositionLeft(left.current.scrollTop);
  //     setScrollPositionRight(right.current.scrollTop);
  //   };

  //   left.current.addEventListener("scroll", handleScroll);
  //   right.current.addEventListener("scroll", handleScroll);
  // });

  // useEffect(() => {
  //   scrollPositionLeft > 50 && focusLeft && setShowHeadline(false);
  //   scrollPositionLeft < 50 && focusLeft && setShowHeadline(true);

  //   scrollPositionRight > 50 && !focusLeft && setShowHeadline(false);
  //   scrollPositionRight < 50 && !focusLeft && setShowHeadline(true);
  // }, [scrollPositionLeft, scrollPositionRight]);

  useEffect(() => {
    setTimeout(setDelay(false), 500);
    switched && setFocusLeft(false);
  }, []);

  return (
    <>
      <Nav
        locale={locale}
        color={
          !focusLeft &&
          !pathname.includes("yael") &&
          !pathname.includes("ersan-mondtag")
            ? "orange"
            : "normal"
        }
      />

      <Switch
        locale={locale}
        trigger={focusLeft}
        showHeadline={showHeadline}
        setFocusLeft={setFocusLeft}
        focusLeft={focusLeft}
      />

      <div
        className="columnPageWrapperSwitch"
        style={{
          height: height,
          transform: focusLeft ? "" : "translateX(-90vw)",
        }}
      >
        <div
          className="columnWrapper bgRed active"
          onClick={!focusLeft ? () => setFocusLeft(true) : () => {}}
        >
          <div className="nameListWrapper">
            <h2>
              <Link href={"/deutscher-pavillon"}>
                {locale == "de" ? "Deutscher Pavillon" : "German Pavilion"}
              </Link>
            </h2>
            {exhibitionPavillon?.artists?.map((artist, i) => (
              <div className="nameWrapper" key={i}>
                <h1>
                  <Link href={`/${artist.slug.current}`}>{artist.name}</Link>
                </h1>
              </div>
            ))}
          </div>
        </div>

        <div
          className="columnWrapper bgBlue active"
          onClick={!focusLeft ? () => setFocusLeft(true) : () => {}}
        >
          <div className="nameListWrapper">
            <h2>
              <Link href={"/la-certosa"}>La Certosa</Link>
            </h2>
            {exhibitionCertosa?.artists?.map((artist, i) => (
              <div className="nameWrapper" key={i}>
                <h2>
                  <Link href={`/${artist.slug.current}`}>{artist.name}</Link>
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
