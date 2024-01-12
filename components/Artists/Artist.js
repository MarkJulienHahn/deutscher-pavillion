import { useEffect, useRef } from "react";

import { PortableText } from "@portabletext/react";

export default function Artist({ artist, locale, anchor }) {
  const ref = useRef();

  useEffect(() => {
    anchor == artist.slug.current &&
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [anchor]);

  return (
    <div className={"artistWrapper"}>
      <div className={"artistAnchor"} ref={ref}></div>
      <h2>{artist.name}</h2>

      <PortableText
        value={
          locale == "de" ? artist.text.textGerman : artist.text.textEnglish
        }
      />
    </div>
  );
}
