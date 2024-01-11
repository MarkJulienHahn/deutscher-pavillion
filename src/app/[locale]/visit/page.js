import React from "react";
import Visit from "../../../../components/Visit/Visit";

import { getVisit } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const visit = await getVisit();
  return <Visit visit={visit} locale={locale} />;
}

export const revalidate = 10;
