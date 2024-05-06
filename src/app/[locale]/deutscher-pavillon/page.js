import Exhibition from "../../../../components/Exhibition/Exhibition";
import NavMenu from "../../../../components/Nav/NavMenu";

import { getExhibitionPavillon } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const exhibitionPavillon = await getExhibitionPavillon();
  return (
    <>
      <Exhibition
        exhibition={exhibitionPavillon}
        locale={locale}
        location={"pavilion"}
      />
      <NavMenu locale={locale} />
    </>
  );
}

export const revalidate = 10;
