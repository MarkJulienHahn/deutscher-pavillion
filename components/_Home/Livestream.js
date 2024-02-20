"use client";
import React from "react";
import { PortableText } from "@portabletext/react";

export default function Livestream({ locale, livestream }) {
  function formatDateTimeToHTML(isoDateString, locale) {
    // Create a Date object from the ISO string
    const date = new Date(isoDateString);

    // Format the date and time parts
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // JavaScript months are 0-indexed
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    let formattedHTMLDate = "";
    let formattedHTMLTime = "";

    if (locale == "de") {
      formattedHTMLDate = `${day}.${month}.${year}`;
      formattedHTMLTime = `${hours}:${minutes} Uhr`;
    } else {
      formattedHTMLDate = `${day}/${month}/${year}`;
      formattedHTMLTime =
        hours > 12 ? `${hours - 12}:${minutes}pm` : `${hours}:${minutes}am`;
    }

    return [formattedHTMLDate, formattedHTMLTime];
  }

  const date = formatDateTimeToHTML(livestream.date, locale);

  return (
    livestream.live && (
      <div className="liveStreamWrapper">
        <div className="liveStreamInfo">
          <div>{date[0]}</div>
          <div>{date[1]}</div>
        </div>
        <h1>
          {locale == "de"
            ? "Livestream zum Performanceprogramm"
            : "Performance Program Live Stream"}
        </h1>
        <div className="videoWrapper">
          <div className="video-responsive">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${livestream.embedID}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Live Stream"
            ></iframe>
          </div>
        </div>
        <div className="videoDescription">
          <PortableText
            value={
              locale == "de" ? livestream.text.german : livestream.text.english
            }
          />
        </div>
      </div>
    )
  );
}
