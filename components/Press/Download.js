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
        {download?.date && (
          <p className="downloadDate">
            {locale == "de"
              ? convertDateFormatDE(download.date)
              : convertDateFormatEN(download.date)}
          </p>
        )}

        <span>
          <p className="downloadTitle">
            {locale == "de" ? download.title.german : download.title.english}
          </p>
        </span>
      </div>
      {locale == "de" && download.file?.asset?.url ? (
        <a
          href={download.file.asset.url}
          download
          target="_blank"
          rel="noreferrer"
        >
          <p className="button downloadButton">
            {download.file.asset.extension}
          </p>
        </a>
      ) : (
        ""
      )}

      {locale !== "de" && download.fileEnglish?.asset?.url ? (
        <a
          href={download.fileEnglish.asset.url}
          download
          target="_blank"
          rel="noreferrer"
        >
          <p className="button downloadButton">
            {download.fileEnglish.asset.extension}
          </p>
        </a>
      ) : (
        ""
      )}
    </div>
  );
}
