import { getArtists, getArtistImages } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const artists = await getArtists();
  const artistImages = await getArtistImages();
  return (
    <>
      <h1>Louis-Chude-Sokei</h1>
    </>
  );
}

export const revalidate = 10;
