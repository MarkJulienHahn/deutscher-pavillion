import Exhibition from "../../../../components/Exhibition/Exhibition";

import { getExhibitionPavillion, getExhibitionCertosa } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const exhibitionPavillion = await getExhibitionPavillion();
  const exhibitionCertosa = await getExhibitionCertosa();
  return (
    <Exhibition
      exhibitionPavillion={exhibitionPavillion}
      exhibitionCertosa={exhibitionCertosa}
      locale={locale}
    />
  );
}

export const revalidate = 10;
