import Landing from "./Landing";
import Livestream from "./Livestream";
import NavMenu from "../Nav/NavMenu";

export default function Homepage({ locale }) {
  return (
    <>
      <Landing locale={locale} />
      <Livestream locale={locale} />
      <NavMenu locale={locale} />
    </>
  );
}
