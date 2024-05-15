import Homepage from "../../../components/_Home/Homepage";
import { getLivestream, getHome, getProgram } from "../../../sanity/sanity-utils";

export default async function Home({ params: { locale } }) {
  const livestream = await getLivestream();
  const home = await getHome();
  const program = await getProgram();
  return (
    <main>
      <Homepage
        locale={locale}
        livestream={livestream}
        home={home}
        program={program}
      />
    </main>
  );
}

export const revalidate = 10;
