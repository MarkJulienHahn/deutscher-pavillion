"use client";
import { useState, useRef, useEffect } from "react";

import Artist from "./Artist";
import ArtistOverviewEntry from "./ArtistsOverviewEntry";
import NavMenu from "../Nav/NavMenu";

const visible = { opacity: "1", height: "96px", transform: "translateX(2px)" };
const invisible = {
  opacity: "0",
  height: "96px",
  transform: "translateX(2px)",
};

const Artists = ({ artists, locale }) => {
  const [anchor, setAnchor] = useState(null);

  const anchorFunction = (slug) => {
    setAnchor(slug);
    setTimeout(() => setAnchor(null), 500);
  };

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
          src={locale == "de" ? "/svg/headline-03.svg" : "/svg/headline-04.svg"}
        />

        <div className="columnWrapper bgRed" ref={left}>
          <div className="artistSelector">
            <h3>
              {locale == "de" ? "Deutscher Pavillon" : "German Pavillon"}
            </h3>
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

          {artists.map((artist, i) =>
            artist.certosa ? (
              <Artist artist={artist} locale={locale} key={i} anchor={anchor} />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <NavMenu locale={locale} />
    </main>
  );
};

export default Artists;
