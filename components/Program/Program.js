"use client";

import { useState, useRef, useEffect } from "react";

import NavBottom from "../Nav/NavBottom";
import ProgramEntry from "../Program/ProgramEntry";

export default function Team({ program, locale }) {
  const [showArchive, setShowArchive] = useState(false);

  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <main>
      <div className="singlePageWrapper">
        {program.length ? (
          <>
            <h2>{locale == "de" ? "Programm" : "Program"}</h2>

            {program.map(
              (entry, i) =>
                entry.date >= formattedDate && (
                  <ProgramEntry
                    key={i}
                    entry={entry}
                    locale={locale}
                    certosa={true}
                  />
                )
            )}

            {!showArchive ? (
              <h3
                className="showMore"
                onClick={() => setShowArchive(!showArchive)}
              >
                {locale == "de" ? "[ Vergangene Veranstaltungen ]" : "[ Past Events ]"}
              </h3>
            ) : (
              ""
            )}
            {showArchive && (
              <div className="programArchiveAccordeon">
            {program.map(
              (entry, i) =>
                entry.date < formattedDate && (
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
