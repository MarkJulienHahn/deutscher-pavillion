import React from "react";
import Chronicles from "../../../../components/Chronicles/Chronicles";

import { getChronicles } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const chronicles = await getChronicles();

  return <Chronicles locale={locale} chronicles={chronicles} />;
}

export const revalidate = 10;
