import React from "react";
import Curators from "../../../../components/Curators/Curators";

import {
  getCuratorialConcept,
  getChronicles,
  getChroniclesIntro,
} from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const curatorialConcept = await getCuratorialConcept();
  const chronicles = await getChronicles();
  const chroniclesIntro = await getChroniclesIntro();
  return (
    <Curators
      content={curatorialConcept[0]}
      chronicles={chronicles}
      chroniclesIntro={chroniclesIntro[0]}
      locale={locale}
    />
  );
}

export const revalidate = 10;
