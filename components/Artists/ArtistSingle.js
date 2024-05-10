"use client";

import { useState, useEffect, useRef } from "react";

import Link from "next/link";
import useWindowDimensions from "../useWindowDimensions";

import ArtistSingleEntry from "./ArtistSingleEntry";
import ArtistSingleInfoEntry from "./ArtistSingleInfoEntry";
import ExhibitionTwoColumn from "../Exhibition/ExhibitionTwoColumn";
import ExhibitionSwitch from "../Exhibition/ExhibitionSwitch";

const blueBG = { background: "var(--blue)", color: "var(--red)" };
const orangeBG = { background: "var(--red)", color: "var(--blue)" };

const ArtistSingle = ({
  slug,
  artists,
  locale,
  exhibitionPavillon,
  exhibitionCertosa,
}) => {
  const [imgWidth, setImgWidth] = useState(null);
  const [scrollAnchor, setScrollAnchor] = useState(null);
  const artist = artists.filter((element) => element.slug.current == slug)[0];
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    setImgWidth(ref.current?.clientWidth);
  }, [windowWidth]);

  const ref = useRef();

  const scrollAnchorFct = async (ref) => {
    setScrollAnchor(ref), setTimeout(() => setScrollAnchor(null), 500);
  };

  return (
    <main>
      <div
        className="artistSingleWrapper"
        style={artist.certosa ? blueBG : orangeBG}
      >
        <div className="artistSingleHeadline">
          <h2>{artist?.name}</h2>
        </div>
        <div className="scrollLink">
          <Link href={`${artist.slug.current}/bio`}>Biography</Link>
        </div>

        {/* {artist.works?.length > 1 && (
          <div className="artistScrollMenu">
            {artist.works?.map((entry, i) => (
              <div key={i} onClick={() => scrollAnchorFct(entry?._key)}>
                {entry?.title}
              </div>
            ))}
          </div>
        )} */}

        {artist?.works?.map((entry, i) => (
          <ArtistSingleEntry
            scrollAnchor={scrollAnchor}
            entry={entry}
            key={i}
            locale={locale}
          />
        ))}

        {artist?.info?.map((entry, i) => (
          <ArtistSingleInfoEntry
            scrollAnchor={scrollAnchor}
            entry={entry}
            key={i}
            locale={locale}
          />
        ))}
      </div>

      <div className="exhibitionDesktop">
        <ExhibitionTwoColumn
          locale={locale}
          exhibitionPavillon={exhibitionPavillon[0]}
          exhibitionCertosa={exhibitionCertosa[0]}
        />
      </div>

      <div className="exhibitionMobile">
        <ExhibitionSwitch
          locale={locale}
          exhibitionPavillon={exhibitionPavillon[0]}
          exhibitionCertosa={exhibitionCertosa[0]}
          switched={false}
        />
      </div>
    </main>
  );
};

export default ArtistSingle;
