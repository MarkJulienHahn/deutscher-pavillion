import { useRef, useEffect } from "react";

import { PortableText } from "@portabletext/react";
import SwiperComponent from "../SwiperComponent";

const ArtistSingleEntry = ({ entry, locale, scrollAnchor }) => {
  const ref = useRef();

  const scrollFunction = () => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollAnchor == entry?._key && scrollFunction();
  }, [scrollAnchor]);



  return (
    <>
      <h2 ref={ref}>
        <em>{entry.title}</em>
      </h2>
      <p className="medium">
        {locale == "de" ? entry?.medium?.de : entry?.medium?.en}
      </p>
      {entry.images?.length ? (
        <SwiperComponent entry={entry} locale={locale} artists={true} />
      ) : (
        ""
      )}
      <PortableText value={locale == "de" ? entry.text?.de : entry.text?.en} />
      <div className="exhibitionImageWrapper"></div>
    </>
  );
};

export default ArtistSingleEntry;
