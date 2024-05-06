import React from "react";
import Program from "../../../../components/Program/Program";

import { getProgram } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const program = await getProgram();
  return (

    <Program
      program={program}
      locale={locale}
    />
  );
}

export const revalidate = 10;
