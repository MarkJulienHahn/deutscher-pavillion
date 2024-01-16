import React from "react";
import Program from "../../../../components/Program/Program";

import { getProgramPavillon, getProgramCertosa } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const programPavillon = await getProgramPavillon();
  const programCertosa = await getProgramCertosa();
  return (
    <></>
    // <Program
    //   programPavillon={programPavillon}
    //   programCertosa={programCertosa}
    //   locale={locale}
    // />
  );
}

export const revalidate = 10;
