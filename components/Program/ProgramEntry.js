"use client";

import React from "react";
import SwiperComponent from "../SwiperComponent";

import { PortableText } from "@portabletext/react";

export default function ProgramEntry({ entry, locale, certosa }) {
  function convertDateFormatDE(dateStr) {
    let parts = dateStr.split("-"); // Splits the date by '-'
    const monthsDE = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];
    let month = monthsDE[parseInt(parts[1], 10) - 1]; // Converts month number to German month name
    return `${parts[2]}. ${month} ${parts[0]}`; // Re-arranges the parts with month name
  }

  function convertDateFormatEN(dateStr) {
    let parts = dateStr.split("-"); // Splits the date by '-'
    const monthsEN = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = monthsEN[parseInt(parts[1], 10) - 1]; // Converts month number to English month name
    return `${month} ${parts[2]}, ${parts[0]}`; // Re-arranges the parts with month name
  }

  return (
    <div>
      <div className="headlineWrapper">
        <p
          className="button"
          style={{ borderColor: certosa ? "var(--red)" : "inherit" }}
        >
          {locale == "de"
            ? convertDateFormatDE(entry.date.date)
            : convertDateFormatEN(entry.date.date)}{" "}
          {entry.date.duration?.start}
          {entry.date.duration?.end && `–${entry.date.duration?.end}`}{" "}
          {locale == "de" ? "Uhr" : "h"}
        </p>
      </div>

      <PortableText
        value={locale == "de" ? entry.text.german : entry.text.english}
      />

      {entry.images?.length ? (
        <SwiperComponent entry={entry} locale={locale} />
      ) : (
        ""
      )}
    </div>
  );
}
