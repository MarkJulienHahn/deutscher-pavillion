import { useEffect, useRef } from "react";

import { urlFor } from "../../hooks/useImageUrlBuilder";
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
      <div className="imageFullwidth">
        <img
          src={`${urlFor(artist.image.asset.url).url()}/${
            artist.image.filename.current ||
            "german-pavillion-2024-vernice-biennale"
          }`}
          alt={
            artist.image.alt ||
            "An Image of by the German Pavillion of the 2024 Venice Art Biennale"
          }
          loading="lazy"
          style={{
            width: "100%",
          }}
        />
      </div>
      <PortableText
        value={
          locale == "de" ? artist.text.textGerman : artist.text.textEnglish
        }
      />
    </div>
  );
}
