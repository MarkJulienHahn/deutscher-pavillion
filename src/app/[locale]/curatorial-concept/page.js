import React from "react";
import Curators from "../../../../components/Curators/Curators";

import { getCuratorialConcept } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const curatorialConcept = await getCuratorialConcept();
  return <Curators content={curatorialConcept[0]} locale={locale} />;
}

export const revalidate = 10;
