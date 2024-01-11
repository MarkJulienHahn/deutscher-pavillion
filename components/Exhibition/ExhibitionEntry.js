import SwiperComponent from "../SwiperComponent";

import { PortableText } from "@portabletext/react";

export default function ExhibitionEntry({ entry, certosa, locale }) {
  return (
    <div>
      <div className="headlineWrapper">
        <h3
          className="button"
          style={{ borderColor: certosa ? "var(--red)" : "inherit" }}
        >
          {entry.name}
        </h3>
      </div>
      <div className="exhibitionArtists">
        {entry.artists.map((artist, i) => (
          <h3>{artist.name}</h3>
        ))}
      </div>
      <PortableText
        value={locale == "de" ? entry.text.german : entry.text.english}
      />

      {entry.images.length ? (
        <SwiperComponent entry={entry} locale={locale} />
      ) : (
        ""
      )}
    </div>
  );
}
