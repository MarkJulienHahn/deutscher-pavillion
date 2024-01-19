import NavMenu from "../Nav/NavMenu";

import Image from "next/image";

import { urlFor } from "../../hooks/useImageUrlBuilder";
import { PortableText } from "@portabletext/react";

export default function Curators({ curators, locale }) {
  return (
    <main>
      <div className="singlePageWrapper">
        <h1>{locale == "de" ? "Kuratorin" : "Curator"}</h1>
        <h1>{curators[0].name}</h1>

        <div className="imageCentered">
          <span>
            
            <Image
              src={`${urlFor(curators[0].image.asset.url).url()}/${
                curators[0].image.filename.current ||
                "german-pavillon-2024-vernice-biennale"
              }`}
              alt={
                curators[0].image.alt ||
                "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
              }
              fill
              style={{
                objectFit: "cover",
              }}
            />
            {locale == "de"
              ? curators[0].image.captions?.german && (
                  <p className="imageCaptionCurator">
                    {curators[0].image.captions.german}
                  </p>
                )
              : curators[0].image.captions?.english && (
                  <p className="imageCaptionCurator">
                    {curators[0].image.captions.english}
                  </p>
                )}
          </span>
        </div>

        <div className="introText textCurator">
          <PortableText
            value={
              locale == "de"
                ? curators[0].text.textGerman
                : curators[0].text.textEnglish
            }
          />
        </div>
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
