"use client";

import { useState } from "react";

export default function ArtistsOverviewEntry({ artist, anchorFunction }) {
  return (
    <h2 onClick={() => anchorFunction(artist.slug.current)}>{artist.name}</h2>
  );
}
