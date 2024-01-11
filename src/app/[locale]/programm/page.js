import React from "react";
import Program from "../../../../components/Program/Program";

import { getProgramPavillion, getProgramCertosa } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const programPavillion = await getProgramPavillion();
  const programCertosa = await getProgramCertosa();
  return (
    <Program
      programPavillion={programPavillion}
      programCertosa={programCertosa}
      locale={locale}
    />
  );
}

export const revalidate = 10;
