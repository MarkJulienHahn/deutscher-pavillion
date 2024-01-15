"use client";

import { useState } from "react";
import { useLottie } from "lottie-react";
import animation from "../../public/animation/thresholds-animation.json";

export default function Landing({ locale }) {
  const [hidden, setHidden] = useState(false);

  const visible = { opacity: "1", pointerEvents: "none" };
  const invisible = { opacity: "0", pointerEvents: "none" };

  const options = {
    animationData: animation,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div
      className="landingWrapper"
      // onClick={() => setHidden(true)}
      style={hidden ? invisible : visible}
    >
      <div>
        {locale == "de" ? (
          <h3>
            Deutscher Pavillon 2024
            <br />
            60<sup>th</sup> International Art Exhibition –<br />
            La Biennale di Venezia
          </h3>
        ) : (
          <h3>
            German Pavillon 2024
            <br />
            60<sup>th</sup> International Art Exhibition –<br />
            La Biennale di Venezia
          </h3>
        )}
      </div>

      <div className="animationWrapper">{View}</div>

      <div>
        {locale == "de" ? (
          <h3>
            20. April – 24. November
            <br />
            2024
          </h3>
        ) : (
          <h3>
            April 20 – November 24
            <br />
            2024
          </h3>
        )}
      </div>
    </div>
  );
}
