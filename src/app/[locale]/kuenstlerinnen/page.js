import React from "react";
import Artists from "../../../../components/Artists/Artists";

import { getArtists } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const artists = await getArtists();
  return <Artists artists={artists} locale={locale} />;
}

export const revalidate = 10;
