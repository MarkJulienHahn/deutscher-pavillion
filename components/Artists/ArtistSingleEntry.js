import { useRef, useEffect } from "react";

import { PortableText } from "@portabletext/react";
import SwiperComponent from "../SwiperComponent";
import { useInView } from "react-intersection-observer";

const ArtistSingleEntry = ({ entry, locale, scrollAnchor, setInView }) => {
  const scrollRef = useRef();

  const scrollFunction = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    scrollAnchor == entry?._key && scrollFunction();
  }, [scrollAnchor]);

  useEffect(() => {
    inView && setInView(entry.slug?.current);
  }, [inView]);

  return (
    <div ref={ref}>
      <h2 ref={scrollRef} id={entry.slug?.current}>
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
    </div>
  );
};

export default ArtistSingleEntry;
