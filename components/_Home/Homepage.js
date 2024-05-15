import Landing from "./Landing";
import Livestream from "./Livestream";
import MarqueeEntry from "./MarqueeEntry";

import Introslider from "./Introslider";


import Marquee from "react-fast-marquee";

export default async function Homepage({ locale, livestream, home, program }) {
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
