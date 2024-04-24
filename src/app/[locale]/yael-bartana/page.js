import ArtistSingle from "../../../../components/Artists/ArtistSingle";
import { getArtists } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const artists = await getArtists();
  return (
    <>
      <ArtistSingle slug={"yael-bartana"} artists={artists} locale={locale} />
    </>
  );
}

export const revalidate = 10;
