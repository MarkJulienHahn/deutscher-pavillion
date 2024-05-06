"use client";

import ExhibitionTwoColumn from "./ExhibitionTwoColumn";
import ExhibitionSwitch from "./ExhibitionSwitch";

export default function Exhibitions({
  exhibitionPavillon,
  exhibitionCertosa,
  locale,
}) {
  return (
    <main>
      <div className="columnPageWrapper">
        <div className="exhibitionDesktop">
          <ExhibitionTwoColumn
            locale={locale}
            exhibitionPavillon={exhibitionPavillon[0]}
            exhibitionCertosa={exhibitionCertosa[0]}
          />
        </div>

        <div className="exhibitionMobile">
          <ExhibitionSwitch
            locale={locale}
            exhibitionPavillon={exhibitionPavillon[0]}
            exhibitionCertosa={exhibitionCertosa[0]}
            switched={false}
          />
        </div>
      </div>
    </main>
  );
}
