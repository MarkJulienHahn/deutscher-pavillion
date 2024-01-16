"use client";

import { use100vh } from "react-div-100vh";

import { useState, useEffect, useRef } from "react";
import { useLottie } from "lottie-react";
import animation from "../../public/animation/thresholds-animation.json";

export default function Landing({ locale }) {
  const [delay, setDelay] = useState(true);
  const [hidden, setHidden] = useState(false);

  const height = use100vh();

  const visible = { opacity: "1", pointerEvents: "auto", height: height };
  const invisible = { opacity: "0", pointerEvents: "none", height: height };

  const options = {
    animationData: animation,
    loop: true,
  };

  const ref = useRef();

  const { View } = useLottie(options);

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, []);

  return (
    <div
      className="landingWrapper"
      onClick={() => setHidden(true)}
      style={hidden ? invisible : visible}
    >
      <div>
        {locale == "de" ? (
          <h3>
            Deutscher Pavillon 2024
            <br />
            60. Internationale Kunstausstellung
            <br />
            La Biennale di Venezia
          </h3>
        ) : (
          <h3>
            German Pavilion 2024
            <br />
            60<sup style={{ lineHeight: "10px" }}>th</sup> International Art
            Exhibition
            <br />
            La Biennale di Venezia
          </h3>
        )}
      </div>

      <div
        className="animationWrapper"
        style={{ height: height, width: "100vw" }}
      >
        {View}
      </div>

      <div ref={ref}>
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
