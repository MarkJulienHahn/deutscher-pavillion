import Landing from "./Landing";
import Livestream from "./Livestream";
import MarqueeEntry from "./MarqueeEntry";

import Introslider from "./Introslider";
import { getLivestream, getHome, getProgram } from "../../sanity/sanity-utils";

import Marquee from "react-fast-marquee";

export default async function Homepage({ locale }) {
  const livestream = await getLivestream();
  const home = await getHome();
  const program = await getProgram();

  console.log(program);

  return (
    <>
      <Landing locale={locale} />
      <div className="introMarquee">
        <Marquee speed={80}>
          <MarqueeEntry entry={program[0]} locale={locale} />
        </Marquee>
      </div>
      <Introslider locale={locale} entry={home} />
      <Livestream locale={locale} livestream={livestream[0]} />
    </>
  );
}
