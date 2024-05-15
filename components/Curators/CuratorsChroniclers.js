import React, {useRef, useEffect} from "react";
import { serializers } from "../../hooks/portableTextSerializer";

import Entry from "../Chronicles/Entry";
import { useInView } from "react-intersection-observer";

import { PortableText } from "@portabletext/react";

const CuratorsChroniclers = ({
  setInView,
  scrollAnchor,
  chronicles,
  chroniclesIntro,
  locale,
}) => {
  const scrollRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0.20,
  });
  const scrollFunction = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollAnchor == "chroniclers" && scrollFunction();
  }, [scrollAnchor]);

  useEffect(() => {
    inView && setInView("chroniclers");
  }, [inView]);
  return (
    <div className="chroniclesPage" ref={ref}>
      <div
        ref={scrollRef}
        className="scrollAnchor"
      />
      <h2>{locale == "de" ? "Chronisten" : "Chroniclers"}</h2>

      {chroniclesIntro?.text ? (
        <div className="introTextChronicles">
          <PortableText
            value={
              locale == "de"
                ? chroniclesIntro?.text.textGerman
                : chroniclesIntro?.text.textEnglish
            }
            components={serializers}
          />
        </div>
      ) : (
        ""
      )}

      <div className="chroniclesTextWrapper">
        {chronicles.map((entry, i) => (
          <Entry key={i} i={i} entry={entry} locale={locale} />
        ))}
      </div>
    </div>
  );
};

export default CuratorsChroniclers;
