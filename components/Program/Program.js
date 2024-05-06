"use client";

import { useState, useRef, useEffect } from "react";

import NavBottom from "../Nav/NavBottom";
import ProgramEntry from "../Program/ProgramEntry";

export default function Team({ program, locale }) {
  return (
    <main>
      <div className="singlePageWrapper">
        {program.length ? (
          <>
            <h2>{locale == "de" ? "Programm" : "Program"}</h2>

            {program.map((entry, i) => (
              <ProgramEntry
                key={i}
                entry={entry}
                locale={locale}
                certosa={true}
              />
            ))}
          </>
        ) : (
          ""
        )}
      </div>
        <NavBottom locale={locale} />
    </main>
  );
}
