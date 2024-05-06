import Exhibition from "../../../../components/Exhibition/Exhibition";
import NavMenu from "../../../../components/Nav/NavMenu";

import { getExhibitionCertosa } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const exhibitionCertosa = await getExhibitionCertosa();
  return (
    <>
      <Exhibition
        exhibition={exhibitionCertosa}
        locale={locale}
        location={"certosa"}
      />
      <NavMenu locale={locale} />
    </>
  );
}

export const revalidate = 10;
