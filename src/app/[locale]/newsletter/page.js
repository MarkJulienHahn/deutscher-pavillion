import Newsletter from "../../../../components/Newsletter/Newsletter";

import { getNewsletter } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const newsletter = await getNewsletter();
  return (
    <>
      

      <Newsletter newsletter={newsletter[0]} locale={locale} />
    </>
  );
}

export const revalidate = 10;
