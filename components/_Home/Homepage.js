import Landing from "./Landing";
import Livestream from "./Livestream";
import NavMenu from "../Nav/NavMenu";
import { getLivestream } from "../../sanity/sanity-utils";

export default async function Homepage({ locale }) {
  const livestream = await getLivestream();
  return (
    <>
      <Landing locale={locale} />
      <Livestream locale={locale} livestream={livestream[0]} />
      <NavMenu locale={locale} />
    </>
  );
}
