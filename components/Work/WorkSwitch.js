import React, { useState, useEffect } from "react";

import Nav from "../Nav/Nav";
import Switch from "../Switch";
import { use100vh } from "react-div-100vh";
import { Link } from "../../src/navigation";

export default function ExhibitionSwitch({ locale, artists }) {
  const [focusLeft, setFocusLeft] = useState(true);
  const height = use100vh();
  const [showHeadline, setShowHeadline] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShowHeadline = window.scrollY < 50;
      setShowHeadline(shouldShowHeadline);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
          <div className={"top"}></div>

          <div
            className="artistSelector"
            style={{
              pointerEvents: focusLeft ? "auto" : "none",
              marginBottom: "var(--space-M)",
            }}
          ></div>
          <div className="worksWrapper">
            {artists.map(
              (artist, i) =>
                !artist.certosa && (
                  <div className="worksInner" key={i}>
                    <Link href={`/${artist.slug.current}`}>
                      <h2>{artist.name}</h2>
                    </Link>
                  </div>
                )
            )}
          </div>
        </div>

        <div
          className="columnWrapper bgBlue"
          onClick={focusLeft ? () => setFocusLeft(false) : () => {}}
        >
          <div
            className="artistSelector"
            style={{ pointerEvents: !focusLeft ? "auto" : "none" }}
          ></div>
          <div className="worksWrapper">
            {artists.map(
              (artist, i) =>
                artist.certosa && (
                  <div className="worksInner" key={i}>
                    <Link href={`/${artist.slug.current}`}>
                      <h2>{artist.name}</h2>
                    </Link>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
