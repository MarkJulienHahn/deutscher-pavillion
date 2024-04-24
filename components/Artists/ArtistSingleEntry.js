import { PortableText } from "@portabletext/react";
import SwiperComponent from "../SwiperComponent";

const ArtistSingleEntry = ({ entry, locale }) => {
  return (
    <>
      <h2>
        <em>{entry.title}</em>
      </h2>
      <p className="medium">
        {locale == "de" ? entry?.medium?.de : entry?.medium?.en}
      </p>
      {entry.images?.length ? (
        <SwiperComponent entry={entry} locale={locale} artists={true}/>
      ) : (
        ""
      )}
      <PortableText value={locale == "de" ? entry.text?.de : entry.text?.en} />
      <div className="exhibitionImageWrapper"></div>
    </>
  );
};

export default ArtistSingleEntry;
