import React from "react";

export default function Download({ download, locale }) {
  function convertDateFormatDE(dateStr) {
    let parts = dateStr.split("-"); // Splits the date by '-'
    return `${parts[2]}.${parts[1]}.${parts[0]}`; // Re-arranges the parts
  }
  function convertDateFormatEN(dateStr) {
    let parts = dateStr.split("-"); // Splits the date by '-'
    return `${parts[1]}/${parts[2]}/${parts[0]}`; // Re-arranges the parts
  }

  return (
    <div className="downloadRow">
      <div className="downloadLeft">
        <p className="downloadDate">
          {locale == "de"
            ? convertDateFormatDE(download.date)
            : convertDateFormatEN(download.date)}
        </p>
        <span>
          <p className="downloadTitle">
            {locale == "de" ? download.title.german : download.title.english}
          </p>
        </span>
      </div>
      <a href={download.file.asset.url} download>
        <p className="button downloadButton">{download.file.asset.extension}</p>
      </a>
    </div>
  );
}
