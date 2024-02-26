import { PortableText } from "@portabletext/react";
import { serializers } from "../../hooks/portableTextSerializer";
import NavBottom from "../Nav/NavBottom";

export default function Privacy({ privacy, locale }) {
  return (
    <main>
      <div className="singlePageWrapper">
        <h1>{locale == "de" ? "Datenschutz" : "Privacy"}</h1>
        <PortableText
          value={locale == "de" ? privacy?.german : privacy?.english}
          components={serializers}
        />
      </div>
      <NavBottom locale={locale} />
    </main>
  );
}
