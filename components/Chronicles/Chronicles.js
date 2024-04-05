import NavMenu from "../Nav/NavMenu";
import Entry from "../Chronicles/Entry";
import { PortableText } from "@portabletext/react";
import { serializers } from "../../hooks/portableTextSerializer";

export default function Chronicles({ locale, chroniclesIntro, chronicles }) {
  return (
    <main>
      <div className="singlePageWrapper">
        <h1>{locale == "de" ? "Chronisten" : "Chroniclers"}</h1>

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
      <NavMenu locale={locale} />
    </main>
  );
}
