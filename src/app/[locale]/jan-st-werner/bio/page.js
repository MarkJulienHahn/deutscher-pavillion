import ArtistSingleBio from "../../../../../components/Artists/ArtistSingleBio";
import {
  getArtists,
  getExhibitionPavillon,
  getExhibitionCertosa,
} from "../../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const artists = await getArtists();
  const exhibitionPavillon = await getExhibitionPavillon();
  const exhibitionCertosa = await getExhibitionCertosa();
  return (
    <>
      <ArtistSingleBio
        slug={"jan-st-werner"}
        artists={artists}
        locale={locale}
        exhibitionPavillon={exhibitionPavillon}
        exhibitionCertosa={exhibitionCertosa}
      />
    </>
  );
}

export const revalidate = 10;
