"use client";
import { useState, useRef, useEffect } from "react";

import NavMenu from "../Nav/NavMenu";
import ExhibitionEntry from "./ExhibitionEntry";
import ExhibitionMobile from "./ExhibitionMobile";

import useWindowDimensions from "../useWindowDimensions";

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
export default function Exhibition({
  exhibitionPavillon,
  exhibitionCertosa,
  locale,
  switched
}) {
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
    let isProgrammaticScroll = false; // Flag to indicate if the scroll is programmatic

    const handleScroll = (e) => {
      if (isProgrammaticScroll) {
        // Reset the flag and exit if the scroll was programmatic
        isProgrammaticScroll = false;
        return;
      }

      const isLeftScrolling = e.target === left.current;
      const scrollableElement = isLeftScrolling ? left.current : right.current;
      const otherElement = isLeftScrolling ? right.current : left.current;

      const scrollRatio =
        scrollableElement.scrollTop /
        (scrollableElement.scrollHeight - scrollableElement.clientHeight);

      // Set the flag before programmatically setting scrollTop
      isProgrammaticScroll = true;
      otherElement.scrollTop =
        scrollRatio * (otherElement.scrollHeight - otherElement.clientHeight);
    };

    left.current?.addEventListener("scroll", handleScroll);
    right.current?.addEventListener("scroll", handleScroll);
    handleScroll;
    // Clean up
    return () => {
      left.current?.removeEventListener("scroll", handleScroll);
      right.current?.removeEventListener("scroll", handleScroll);
    };
  }, []); // Dependencies array remains empty for component mount effect

  return (
    <main>
      <div className="columnPageWrapper">
        <img
          className="columnPageHeadline"
          style={showHeadline ? visible : invisible}
          alt="headline"
          src={locale == "de" ? "/svg/headline-01.svg" : "/svg/headline-02.svg"}
        />
        {/* <h1
          className="columnPageHeadline"
          style={showHeadline ? visible : invisible}
        >
          {locale == "de" ? "Ausstellung" : "Exhibition"}
        </h1> */}

        <div className="columnWrapper bgRed exhibitionWrapper" ref={left}>
          <h1>{locale == "de" ? "Deutscher Pavillon" : "German Pavillon"}</h1>
          {exhibitionPavillon.map((entry, i) => (
            <ExhibitionEntry key={i} entry={entry} locale={locale} />
          ))}
        </div>

        <div className="columnWrapper bgBlue exhibitionWrapper" ref={right}>
          <h1>La Certosa</h1>
          {exhibitionCertosa.map((entry, i) => (
            <ExhibitionEntry
              key={i}
              entry={entry}
              locale={locale}
              certosa={true}
            />
          ))}
        </div>

        <div className="artistsMobile">
          <ExhibitionMobile
            locale={locale}
            exhibitionPavillon={exhibitionPavillon}
            exhibitionCertosa={exhibitionCertosa}
            switched={switched}
          />
        </div>
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
