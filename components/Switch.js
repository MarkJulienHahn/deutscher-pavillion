import { useState, useEffect } from "react";

export default function Switch({
  locale,
  trigger,
  showHeadline,
  setFocusLeft,
  focusLeft,
}) {
  return (
    <div
      className="switchWrapper"
      style={{
        borderColor: !trigger ? "var(--red)" : "var(--blue)",
        opacity: showHeadline ? "1" : "0",
        pointerEvents: showHeadline ? "auto" : "none",
      }}
      onClick={() => setFocusLeft(!focusLeft)}
    >
      <div className="switchNamesWrapper">
        <span>
          <p
            style={{
              zIndex: "1000",
              color: "var(--red)",
            }}
          >
            {(locale = "de" ? "Deutscher Pavillon" : "German Pavilion")}
          </p>
        </span>
        <span>
          <p style={{ zIndex: "1000", color: "var(--blue)" }}>
            La <br />
            Certosa
          </p>
        </span>
      </div>
      <div
        className="switchButton"
        style={
          !trigger
            ? { left: "32vw", background: "var(--red)" }
            : { left: "0vw", background: "var(--blue)" }
        }
      ></div>
    </div>
  );
}
