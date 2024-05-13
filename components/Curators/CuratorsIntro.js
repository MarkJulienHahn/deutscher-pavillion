import React, { useRef, useEffect } from "react";
import { PortableText } from "@portabletext/react";
import { useInView } from "react-intersection-observer";

const CuratorsIntro = ({
  locale,
  content,
  scrollAnchor,
  scrollAnchorFct,
  setInView,
}) => {
  const scrollRef = useRef();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  const scrollFunction = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollAnchor == "thresholds-when-the-dreams-sleep" && scrollFunction();
  }, [scrollAnchor]);

  useEffect(() => {
    inView && setInView("thresholds-when-the-dreams-sleep");
  }, [inView]);

  return (
    <div ref={ref}>
      <h1 ref={scrollRef}>
        {locale == "de" ? "Kuratorisches Konzept" : "Curatorial Concept"}
      </h1>
      <h1>Çağla Ilk</h1>
      <div
        className="scrollLink"
        onClick={() => scrollAnchorFct("biography")}
        ref={ref}
      >
        <a style={{ paddingTop: "var(--space-XS)" }}>Biography</a>
      </div>
      <div className="curatorTitle">
        <PortableText
          value={locale == "de" ? content.title.de : content.title.en}
        />
      </div>
      {content.text ? (
        <div className="textCurator">
          <PortableText
            value={
              locale == "de"
                ? content.text.textGerman
                : content.text.textEnglish
            }
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CuratorsIntro;
