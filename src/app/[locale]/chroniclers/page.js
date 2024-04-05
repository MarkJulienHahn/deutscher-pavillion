import React from "react";
import Chronicles from "../../../../components/Chronicles/Chronicles";

import { getChronicles } from "../../../../sanity/sanity-utils";
import { getChroniclesIntro } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const chronicles = await getChronicles();
  const chroniclesIntro = await getChroniclesIntro();

  return (
    <Chronicles
      locale={locale}
      chronicles={chronicles}
      chroniclesIntro={chroniclesIntro[0]}
    />
  );
}

export const revalidate = 10;
