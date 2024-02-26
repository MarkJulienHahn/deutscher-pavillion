import { PortableText } from "@portabletext/react";
import { serializers } from "../../hooks/portableTextSerializer";
import NavBottom from "../Nav/NavBottom";

export default function Imprint({ imprint, locale }) {
  return (
    <main>
      <div className="singlePageWrapper imprint">
        <h1>{locale == "de" ? "Impressum" : "Imprint"}</h1>
        <PortableText
          value={locale == "de" ? imprint?.german : imprint?.english}
          components={serializers}
        />
      </div>
      <NavBottom locale={locale} />
    </main>
  );
}
