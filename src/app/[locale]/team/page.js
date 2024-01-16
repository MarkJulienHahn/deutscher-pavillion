import Team from "../../../../components/Team/Team";

import { getTeam } from "../../../../public/sanity/sanity-utils";

export default async function page({ params: { locale } }) {
  const team = await getTeam();
  return <Team team={team} locale={locale} />;
}

export const revalidate = 10;
