import About from "../../../../components/About/About";

import { getAbout } from "../../../../public/sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const about = await getAbout();
  return <About about={about[0]} locale={locale} />;
}

export const revalidate = 10;
