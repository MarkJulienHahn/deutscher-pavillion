"use client";

import { useState, useRef, useEffect } from "react";

import NavBottom from "../Nav/NavBottom";
import ProgramEntry from "../Program/ProgramEntry";

export default function Team({ program, locale }) {
  const [showArchive, setShowArchive] = useState(false);
  return (
    <main>
      <div className="singlePageWrapper">
        {program.length ? (
          <>
            <h2>{locale == "de" ? "Programm" : "Program"}</h2>

            {program.map(
              (entry, i) =>
                i < 5 && (
                  <ProgramEntry
                    key={i}
                    entry={entry}
                    locale={locale}
                    certosa={true}
                  />
                )
            )}

            {!showArchive ? (
              <h3 className="showMore" onClick={() => setShowArchive(!showArchive)}>
                Mehr Anzeigen
              </h3>
            ) : (
              ""
            )}
            {showArchive && (
              <div className="programArchiveAccordeon">
                {program.map(
                  (entry, i) =>
                    i >= 5 && (
                      <ProgramEntry
                        key={i}
                        entry={entry}
                        locale={locale}
                        certosa={true}
                      />
                    )
                )}
              </div>
            )}
          </>
        ) : (
          ""
        )}
      </div>
      <NavBottom locale={locale} />
    </main>
  );
}
