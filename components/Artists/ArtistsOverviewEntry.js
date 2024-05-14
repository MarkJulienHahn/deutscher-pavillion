"use client";
import { Link } from "../../src/navigation";

import { useState } from "react";

export default function ArtistsOverviewEntry({ artist, anchorFunction }) {
  return (
    <Link href={`/${artist.slug.current}`}>
      <h2 className="link">{artist.name}</h2>
    </Link>
    // <h2 onClick={() => anchorFunction(artist.slug.current)}>{artist.name}</h2>
  );
}
