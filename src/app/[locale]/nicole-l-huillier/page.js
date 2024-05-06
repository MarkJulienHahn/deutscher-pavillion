import ArtistSingle from "../../../../components/Artists/ArtistSingle";
import {
  getArtists,
  getExhibitionPavillon,
  getExhibitionCertosa,
} from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const artists = await getArtists();
  const exhibitionPavillon = await getExhibitionPavillon();
  const exhibitionCertosa = await getExhibitionCertosa();
  return (
    <>
      <ArtistSingle
        slug={"nicole-l-huillier"}
        artists={artists}
        locale={locale}
        exhibitionPavillon={exhibitionPavillon}
        exhibitionCertosa={exhibitionCertosa}
      />
    </>
  );
}

export const revalidate = 10;
