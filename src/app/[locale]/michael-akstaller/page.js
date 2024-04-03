import { getArtists, getArtistImages } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const artists = await getArtists();
  const artistImages = await getArtistImages();
  return (
    <>
      <h1>Michael Akstaller</h1>
    </>
  );
}

export const revalidate = 10;
