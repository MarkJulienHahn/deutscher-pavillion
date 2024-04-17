import ArtistSingle from "../../../../components/Artists/ArtistSingle";
import { getArtists } from "../../../../sanity/sanity-utils";

export default async function page() {
  const artists = await getArtists();
  return (
    <>
      <ArtistSingle slug={"jan-st-werner"} artists={artists} />
    </>
  );
}

export const revalidate = 10;
