"use client";

import { useState } from "react";

import NavBottom from "../Nav/NavBottom";
import ArtistSingleInfoEntry from "../Artists/ArtistSingleInfoEntry";
import CuratorsIntro from "./CuratorsIntro";
import CuratorsBiography from "./CuratorsBiography";
import CuratorsChroniclers from "./CuratorsChroniclers";
import ScrollMenu from "../ScrollMenuCurators";

import { PortableText } from "@portabletext/react";

export default function Curators({
  content,
  locale,
  chronicles,
  chroniclesIntro,
}) {
  const [inView, setInView] = useState("thresholds-when-the-dreams-sleep");
  const [scrollAnchor, setScrollAnchor] = useState(null);

  const scrollAnchorFct = async (ref) => {
    setScrollAnchor(ref), setTimeout(() => setScrollAnchor(null), 500);
  };

  return (
    <main>
      <ScrollMenu
        page={"curators"}
        inView={inView}
        scrollAnchorFct={scrollAnchorFct}
        locale={locale}
        content={content}
      />

      <div className="singlePageWrapper">
        <CuratorsIntro
          locale={locale}
          scrollAnchorFct={scrollAnchorFct}
          content={content}
          scrollAnchor={scrollAnchor}
          setInView={setInView}
        />
        <CuratorsBiography
          content={content}
          locale={locale}
          scrollAnchor={scrollAnchor}
          setInView={setInView}
        />
        {content?.info?.map((entry, i) => (
          <ArtistSingleInfoEntry
            scrollAnchor={scrollAnchor}
            entry={entry}
            key={i}
            locale={locale}
            setInView={setInView}
            curator={true}
            threshold={1}
          />
        ))}
        <CuratorsChroniclers
          setInView={setInView}
          scrollAnchor={scrollAnchor}
          locale={locale}
          chronicles={chronicles}
          chroniclesIntro={chroniclesIntro}
        />
      </div>
      <NavBottom locale={locale} />
    </main>
  );
}
