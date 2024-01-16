import Artists from "../../../../components/Artists/Artists";

import { getArtists, getArtistImages } from "../../../../public/sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const artists = await getArtists();
  const artistImages = await getArtistImages();
  return (
    <Artists artists={artists} artistImages={artistImages[0]} locale={locale} />
  );
}

export const revalidate = 10;
