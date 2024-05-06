import { useState, useEffect } from "react";

export default function Switch({
  locale,
  trigger,
  showHeadline,
  setFocusLeft,
  focusLeft,
}) {
  return (
    <div className="switchOuter">
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
            {locale == "de" ? (
              <p style={{ zIndex: "10", color: "var(--red)" }}>
                Deutscher <br />
                Pavillon
              </p>
            ) : (
              <p style={{ zIndex: "10", color: "var(--red)" }}>
                German <br />
                Pavilion
              </p>
            )}
          </span>
          <span>
            <p style={{ zIndex: "10", color: "var(--blue)" }}>
              La <br />
              Certosa
            </p>
          </span>
        </div>
        <div
          className="switchButton"
          style={
            !trigger
              ? { left: "225px", background: "var(--red)" }
              : { left: "0", background: "var(--blue)" }
          }
        ></div>
        <div
          className="switchButtonMobile"
          style={
            !trigger
              ? { left: "32vw", background: "var(--red)" }
              : { left: "-2vw", background: "var(--blue)" }
          }
        ></div>
      </div>
    </div>
  );
}
