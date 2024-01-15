"use client";

import { useState, useRef, useEffect } from "react";

import NavMenu from "../Nav/NavMenu";
import ProgramEntry from "../Program/ProgramEntry";

const visible = { opacity: "1", height: "81.6px", transform: "translateX(2px)" };
const invisible = {
  opacity: "0",
  height: "81.6px",
  transform: "translateX(2px)",
};
export default function Team({ programPavillon, programCertosa, locale }) {
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
        <h1
          className="columnPageHeadline"
          style={showHeadline ? visible : invisible}
        >
          {locale == "de" ? "Programm" : "Program"}
        </h1>

        {programPavillon.length ? (
          <div className="columnWrapper bgRed" ref={left}>
            <h1>
              {locale == "de" ? "Deutscher Pavillon" : "German Pavillon"}
            </h1>

            {programPavillon.map((entry, i) => (
              <ProgramEntry key={i} entry={entry} locale={locale} />
            ))}
          </div>
        ) : (
          ""
        )}

        {programCertosa.length ? (
          <div
            className="columnWrapper bgBlue 
          "
            ref={right}
          >
            <h1>La Certosa</h1>

            {programCertosa.map((entry, i) => (
              <ProgramEntry key={i} entry={entry} locale={locale} certosa={true}/>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
