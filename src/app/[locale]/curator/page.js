import React from "react";
import Curators from "../../../../components/Curators/Curators";

import { getCurators } from "../../../../public/sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const curators = await getCurators();
  return <Curators curators={curators} locale={locale} />;
}

export const revalidate = 10;
