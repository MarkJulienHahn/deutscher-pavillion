import Imprint from "../../../../components/Imprint/Imprint";

import { getImprint } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const imprint = await getImprint();
  return <Imprint imprint={imprint[0]} locale={locale} />;
}

export const revalidate = 10;
