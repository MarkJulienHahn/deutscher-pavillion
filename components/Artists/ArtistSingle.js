"use client";

import { PortableText } from "@portabletext/react";
import NavMenu from "../Nav/NavMenu";

const ArtistSingle = ({ slug, artists }) => {
  const artist = artists.filter((element) => element.slug.current == slug)[0];
  console.log(artist);
  return (
    <main>
      <div className="singlePageWrapper">
        <h2>{artist?.name}</h2>
        <h2><em>{artist?.artworkTitle}</em></h2>
        <div className="artistMedium">
          <PortableText value={artist?.medium?.text} />
        </div>
        <div className="artistText">
          <h2>En</h2>
          <PortableText value={artist?.artworkText?.textEnglish} />
        </div>
        <div className="artistText">
          <h2>De</h2>
          <PortableText value={artist?.artworkText?.textGerman} />
        </div>
      </div>
      <NavMenu />
    </main>
  );
};

export default ArtistSingle;
