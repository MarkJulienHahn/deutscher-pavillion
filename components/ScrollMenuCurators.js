import React, { useState, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import useWindowDimensions from "./useWindowDimensions";

const ScrollMenu = ({ inView, content, locale, scrollAnchorFct, page }) => {
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
    >
      <div>
        {"thresholds-when-the-dreams-sleep" == inView && (
          <div
            style={{
              background: "var(--blue)",
            }}
            className="dot"
          />
        )}
        <div
          onClick={() => scrollAnchorFct("thresholds-when-the-dreams-sleep")}
        >
          <PortableText
            value={locale == "de" ? content.title.de : content.title.en}
          />
        </div>
      </div>

      <div>
        {"biography" == inView && (
          <div
            style={{
              background: "var(--blue)",
            }}
            className="dot"
          />
        )}
        <div onClick={() => scrollAnchorFct("biography")}>
          {locale == "de" ? "Biografie" : "Biography"}
        </div>
      </div>

      {content?.info?.map((entry, i) => (
        <div>
          {entry?.slug.current == inView && (
            <div
              style={{
                background: "var(--blue)",
              }}
              className="dot"
            />
          )}
          <div onClick={() => scrollAnchorFct(entry?._key)}>{entry?.title}</div>
        </div>
      ))}

      <div>
        {"chroniclers" == inView && (
          <div
            style={{
              background: "var(--blue)",
            }}
            className="dot"
          />
        )}
        <div onClick={() => scrollAnchorFct("chroniclers")}>
          {locale == "de" ? "Chronisten" : "Chroniclers"}
        </div>
      </div>
    </div>
  );
};

export default ScrollMenu;
