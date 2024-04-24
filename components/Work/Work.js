"use client";

import NavMenu from "../Nav/NavMenu";
import WorkSwitch from "./WorkSwitch";

export default function Work({ artists, locale, switched }) {
  return (
    <main>
      <div className="columnPageWrapper">
        <div>
          <WorkSwitch locale={locale} artists={artists} switched={switched} />
        </div>
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
