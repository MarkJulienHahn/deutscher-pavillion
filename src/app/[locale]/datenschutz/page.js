import Privacy from "../../../../components/Privacy/Privacy";

import { getPrivacy } from "../../../../sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const privacy = await getPrivacy();
  return <Privacy privacy={privacy[0]} locale={locale} />;
}

export const revalidate = 10;
