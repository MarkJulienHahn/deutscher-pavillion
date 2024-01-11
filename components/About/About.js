import { PortableText } from "@portabletext/react";
import NavMenu from "../Nav/NavMenu";

export default function About({ about, locale }) {
  return (
    <main>
      <div className="singlePageWrapper">
        <h1>About</h1>
        <div className="introText">
          <PortableText
            value={locale == "de" ? about.intro.german : about.intro.english}
          />
        </div>
        <div className="twoColumns">
          <PortableText
            value={locale == "de" ? about.text.german : about.text.english}
          />
        </div>
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
