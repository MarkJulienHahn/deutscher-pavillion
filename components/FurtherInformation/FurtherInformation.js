"use client";

import { useState, useEffect, useRef } from "react";

import NavMenu from "../Nav/NavMenu";

import Image from "next/image";
import useWindowDimensions from "../useWindowDimensions";

import { urlFor } from "../../hooks/useImageUrlBuilder";
import { PortableText } from "@portabletext/react";

export default function Curators({ special, locale }) {
  const [imgWidth, setImgWidth] = useState(null);
  const ref = useRef();
  const { windowWidth } = useWindowDimensions();

  useEffect(() => {
    setImgWidth(ref.current?.clientWidth);
  }, [windowWidth]);

  return (
    <main>
      <div className="singlePageWrapper">
        <h1>
          {locale == "de" ? "Weitere Informationen" : "Further Information"}
        </h1>

        <div className="rsvpForm">
          <form
            action="https://seu2.cleverreach.com/f/360026-385006/wcs/"
            method="post"
            target="_blank"
          >
            <div id="8737408" rel="text" className="inputRow">
              <label for="cr_form-input--text8737408" class="itemname">
                {locale == "de" ? "Vorname*:" : "First Name*:"}
              </label>
              <input
                id="cr_form-input--text8737408"
                className="button"
                type="text"
                name="1128492"
                placeholder=""
              />
            </div>
            <div id="8737416" rel="text" className="inputRow">
              <label for="cr_form-input--textarea_8737416" class="itemname">
                {locale == "de" ? "Nachname*:" : "Last Name*"}
              </label>
              <input
                id="cr_form-input--textarea_8737416"
                className="button"
                name="1128493"
                placeholder=""
              />
            </div>

            <div id="8737410" rel="text" className="inputRow">
                <label for="cr_form-input--text8737410">Position:</label>
                <input
                  id="cr_form-input--text8737410"
                  type="text"
                  name="1203253"
                  className="button"
                  placeholder=""
                />
            </div>

            <div id="8730194" rel="email" className="inputRow">
                <label for="text8730194">E-Mail*:</label>
                <input
                  id="text8730194"
                  name="email"
                  className="button"
                  placeholder=""
                />
            </div>

            <div id="8730203" rel="checkbox" className="checkboxWrapper">
              <div className="checkboxContainer">
                <input
                  id="Offizielle Eröffnung Thresholds — Deutscher Pavillon8730203"
                  type="checkbox"
                  name="1203251[]"
                  value="Yes"
                  className="checkbox"
                />
                <span className="checkmark"></span>
                <label for="Offizielle Eröffnung Thresholds — Deutscher Pavillon8730203">
                  Offizielle Eröffnung Thresholds — Deutscher Pavillon
                </label>
              </div>

              <div className="checkboxContainer">
                <input
                  id="Offizielle Eröffnung Thresholds — La Certosa8737371"
                  type="checkbox"
                  name="1203252[]"
                  value="Yes"
                  className="checkbox"
                />
                <span className="checkmark"></span>
                <label for="Offizielle Eröffnung Thresholds — La Certosa8737371">
                  Offizielle Eröffnung Thresholds — La Certosa mit Performance
                </label>
              </div>

              <div className="checkboxContainer">
                <input
                  id="Offizieller (exklusiver) Eröffnungsempfang8737435"
                  type="checkbox"
                  name="1203254[]"
                  value="Yes"
                  className="checkbox"
                />
                <span className="checkmark"></span>
                <label for="Offizieller (exklusiver) Eröffnungsempfang8737435">
                  Offizieller (exklusiver) Eröffnungsempfang
                </label>
              </div>

              <div className="checkboxContainer">
                <input
                  id="Party8737437"
                  type="checkbox"
                  name="1203256[]"
                  value="Yes"
                  className="checkbox"
                />
                <span className="checkmark"></span>
                <label for="Party8737437">Party</label>
              </div>
            </div>

            <div id="8730196" rel="button">
              <button
                type="submit"
                className="button formButton"
                style={{ marginLeft: "0" }}
              >
                {locale == "de" ? "Anmelden" : "Submit"}
              </button>
            </div>

            <noscript>
              <a href="http://www.cleverreach.de">www.CleverReach.de</a>
            </noscript>
          </form>
        </div>

        {special.text ? (
          <div className="introText">
            <PortableText
              value={
                locale == "de"
                  ? special.text.textGerman
                  : special.text.textEnglish
              }
            />
          </div>
        ) : (
          ""
        )}

        {special.images.length && (
          <div className="imageArray">
            {special.images.map((image, i) => (
              <div className="imageCuratorOuter" key={i}>
                <div
                  className="imageCurator"
                  style={{
                    height:
                      imgWidth / image.asset.metadata.dimensions.aspectRatio,
                  }}
                  ref={ref}
                >
                  <Image
                    src={`${urlFor(image.asset.url).url()}/${
                      image.filename.current ||
                      "german-pavillon-2024-vernice-biennale"
                    }`}
                    alt={
                      image.alt ||
                      "An Image of by the German Pavillon of the 2024 Venice Art Biennale"
                    }
                    fill
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      aspectRatio: image.asset.metadata.dimensions.aspectRatio,
                    }}
                  />
                  {locale == "de"
                    ? image.captions?.german && (
                        <p className="imageCaptionCurator">
                          {image.captions.german}
                        </p>
                      )
                    : image.captions?.english && (
                        <p className="imageCaptionCurator">
                          {image.captions.english}
                        </p>
                      )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
