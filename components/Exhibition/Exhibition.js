"use client";

import NavMenu from "../Nav/NavMenu";
import ExhibitionSwitch from "./ExhibitionSwitch";

export default function Exhibition({
  exhibitionPavillon,
  exhibitionCertosa,
  locale,
  switched,
}) {
  return (
    <main>
      <div className="columnPageWrapper">
        <div>
          <ExhibitionSwitch
            locale={locale}
            exhibitionPavillon={exhibitionPavillon}
            exhibitionCertosa={exhibitionCertosa}
            switched={switched}
          />
        </div>
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
