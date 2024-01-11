"use client";

import { useState } from "react";

export default function Landing({ locale }) {
  const [hidden, setHidden] = useState(false);

  const visible = { opacity: "1", pointerEvents: "auto" };
  const invisible = { opacity: "0", pointerEvents: "none" };

  return (
    <div className="landingWrapper" onClick={() => setHidden(true)} style={hidden ? invisible : visible}>
      <div>
        {locale == "de" ? (
          <h3>
            Deutscher Pavillion 2024
            <br />
            60th International Art Exhibition –<br />
            La Biennale di Venezia
          </h3>
        ) : (
          <h3>
            German Pavillion 2024
            <br />
            60th International Art Exhibition –<br />
            La Biennale di Venezia
          </h3>
        )}
      </div>
      <div>
        {locale == "de" ? (
          <h3>
            20.April – 24.November
            <br />
            2024
          </h3>
        ) : (
          <h3>
            April 20–November24
            <br />
            2024
          </h3>
        )}
      </div>
    </div>
  );
}
