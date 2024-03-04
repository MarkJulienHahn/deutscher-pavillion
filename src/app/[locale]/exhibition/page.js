import Exhibition from "../../../../components/Exhibition/Exhibition";

import {
  getExhibitionPavillon,
  getExhibitionCertosa,
} from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const exhibitionPavillon = await getExhibitionPavillon();
  const exhibitionCertosa = await getExhibitionCertosa();
  return (
    <></>
    // <Exhibition
    //   exhibitionPavillon={exhibitionPavillon}
    //   exhibitionCertosa={exhibitionCertosa}
    //   locale={locale}
    // />
  );
}

export const revalidate = 10;
