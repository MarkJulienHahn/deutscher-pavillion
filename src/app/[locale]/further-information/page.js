import React from "react";
import FurtherInformation from "../../../../components/FurtherInformation/FurtherInformation";

import { getSpecial } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {

  const special = await getSpecial();
  return <FurtherInformation special={special[0]} locale={locale} />;
}

export const revalidate = 10;
