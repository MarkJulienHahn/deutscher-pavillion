"use client";

import ArtistSingleEntry from "./ArtistSingleEntry";
import NavMenu from "../Nav/NavMenu";

const ArtistSingle = ({ slug, artists, locale }) => {
  const artist = artists.filter((element) => element.slug.current == slug)[0];
  console.log(artist);

  const blueBG = { background: "var(--blue)", color: "var(--red)" };
  const orangeBG = { background: "var(--red)", color: "var(--blue)" };

  return (
    <main>
      <div
        className="singlePageWrapper artistSingleWrapper"
        style={artist.certosa ? blueBG : orangeBG}
      >
        <div className="artistSingleHeadline">
          <h2>{artist?.name}</h2>
        </div>
        {artist?.works?.map((entry, i) => (
          <ArtistSingleEntry entry={entry} key={i} locale={locale} />
        ))}
      </div>
      <NavMenu />
    </main>
  );
};

export default ArtistSingle;
