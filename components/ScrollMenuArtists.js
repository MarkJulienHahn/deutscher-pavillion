import React, { useState, useEffect } from "react";
import useWindowDimensions from "./useWindowDimensions";

const ScrollMenu = ({ inView, artist, scrollAnchorFct, page }) => {
  const [mobile, setMobile] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const { windowWidth } = useWindowDimensions();

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      setShowButton(false);
    } else {
      // Scrolling up
      setShowButton(true);
    }
    setLastScrollY(currentScrollY);
  };

  // Debouncing the scroll event handler
  const debounce = (func, delay) => {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  useEffect(() => {
    const debouncedHandleScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    windowWidth < 1300 ? setMobile(true) : setMobile(false);
  }, [windowWidth]);

  return (
    <div
      className={`artistScrollMenu 
      ${page == "curators" ? "scrollCurator" : "scrollArtist"}
      ${!showButton ? "navVisible" : "navHidden"}`}
      style={{
        background:
          !artist.certosa && mobile
            ? "var(--red)"
            : artist.certosa && mobile
            ? "var(--blue)"
            : "none",
      }}
    >
      {artist.works?.map((entry, i) => (
        <div key={i}>
          {entry?.slug?.current == inView && (
            <div
              style={{
                background: artist.certosa ? "var(--red)" : "var(--blue)",
              }}
              className="dot"
            />
          )}
          <div key={i} onClick={() => scrollAnchorFct(entry?._key)}>
            {entry?.title}
          </div>
        </div>
      ))}
      {artist.info?.map((entry, i) => (
        <div key={i}>
          {entry?.slug?.current == inView && (
            <div
              style={{
                background: artist.certosa ? "var(--red)" : "var(--blue)",
              }}
              className="dot"
            />
          )}
          <div
            key={i}
            style={{ fontFamily: "ABCDaily" }}
            onClick={() => scrollAnchorFct(entry?._key)}
          >
            {entry?.title}
          </div>{" "}
        </div>
      ))}
    </div>
  );
};

export default ScrollMenu;
