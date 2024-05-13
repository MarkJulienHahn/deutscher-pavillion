import SwiperComponent from "../SwiperComponent";

import { PortableText } from "@portabletext/react";
import { Link } from "../../src/navigation";

export default function ExhibitionEntry({ entry, certosa, locale }) {
  return (
    <div className="exhibitionEntryWrapper">
      <div className="exhibitionArtists">
        {entry.artists.map((artist, i) => (
          <h3 key={i}>
            <Link href={`/${artist?.slug?.current}`}>{artist.name}</Link>
          </h3>
        ))}
      </div>
      <PortableText
        value={locale == "de" ? entry.text.german : entry.text.english}
      />

      {/* {entry.images.length ? (
        <div className="exhibitionImageWrapper">
          <SwiperComponent entry={entry} locale={locale} />
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
}
