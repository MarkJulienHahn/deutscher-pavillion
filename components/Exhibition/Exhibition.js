"use client";
import { useState, useRef, useEffect } from "react";

import NavMenu from "../Nav/NavMenu";
import ExhibitionEntry from "./ExhibitionEntry";

const visible = { opacity: "1", height: "81.6px", transform: "translateX(2px)" };
const invisible = {
  opacity: "0",
  height: "81.6px",
  transform: "translateX(2px)",
};
export default function Exhibition({
  exhibitionPavillon,
  exhibitionCertosa,
  locale,
}) {
  const [showHeadline, setShowHeadline] = useState(true);

  const [scrollPositionLeft, setScrollPositionLeft] = useState("");
  const left = useRef();

  const [scrollPositionRight, setScrollPositionRight] = useState("");
  const right = useRef();

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
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
