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
    threshold: 0.1,
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
    <div ref={ref} className="curatorTop">
      <h1 ref={scrollRef} style={{ paddingTop: "100px", marginTop: "-100px" }}>
        {locale == "de" ? "Das Kuratorische" : "Curatorial"}
      </h1>
      <h1>Çağla Ilk</h1>

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
