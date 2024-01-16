import React from "react";
import Press from "../../../../components/Press/Press";

import { getPress } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const press = await getPress();
  return <Press press={press[0]} locale={locale} />;
}

export const revalidate = 10;
