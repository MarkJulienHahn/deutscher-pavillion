import Work from "../../../../components/Work/Work";

import { getArtists, getArtistImages } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const artists = await getArtists();
  const artistImages = await getArtistImages();
  return (
    <Work artists={artists} locale={locale} />
  );
}

export const revalidate = 10;
