import Thanks from "../../../../components/Thanks/Thanks";

import { getThanks } from "../../../../public/sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const thanks = await getThanks();
  return <Thanks thanks={thanks[0]} locale={locale} />;
}

export const revalidate = 10;
