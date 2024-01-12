import React from "react";

export default function ProgramEntry({ entry, locale, certosa }) {
  return (
    <div>
      <div className="headlineWrapper">
        <p
          className="button"
          style={{ borderColor: certosa ? "var(--red)" : "inherit" }}
        >
          {entry.date.date} {entry.date.date}
        </p>
      </div>
    </div>
  );
}
