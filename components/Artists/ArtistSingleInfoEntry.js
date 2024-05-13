import { useRef, useEffect } from "react";

import { PortableText } from "@portabletext/react";
import SwiperComponent from "../SwiperComponent";
import { useInView } from "react-intersection-observer";

const ArtistSingleInfoEntry = ({
  entry,
  locale,
  scrollAnchor,
  setInView,
  curator,
  threshold,
}) => {
  const scrollRef = useRef();

  const scrollFunction = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const { ref, inView } = useInView({
    threshold: threshold ? threshold : 0,
  });

  useEffect(() => {
    scrollAnchor == entry?._key && scrollFunction();
  }, [scrollAnchor]);

  useEffect(() => {
    inView && setInView(entry.slug?.current);
  }, [inView]);

  return (
    <div ref={ref} className="artistInfoWrapper">
      <div
        ref={scrollRef}
        style={{ position: "absolute", transform: "translateY(-120px)" }}
      />
      {curator ? (
        <h2
          style={{ marginTop: "var(--space-L)" }}
          id={entry.slug?.current}
        >
          {entry.title}
        </h2>
      ) : (
        <h3 ref={scrollRef} id={entry.slug?.current}>
          <em>{entry.title}</em>
        </h3>
      )}
      <p className="medium">
        {locale == "de" ? entry?.medium?.de : entry?.medium?.en}
      </p>
      {entry.images?.length ? (
        <SwiperComponent entry={entry} locale={locale} artists={true} />
      ) : (
        ""
      )}
      <PortableText value={locale == "de" ? entry.text?.de : entry.text?.en} />
    </div>
  );
};

export default ArtistSingleInfoEntry;
