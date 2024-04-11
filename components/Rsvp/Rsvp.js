import React from "react";

export default function Rsvp({ locale }) {
  return (
    <div className="rsvpForm">
      <form
        action="https://seu2.cleverreach.com/f/360026-385006/wcs/"
        method="post"
        target="_blank"
      >
        <div id="8730203" rel="checkbox" className="checkboxWrapper">
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
              Yes, I would like to attend the exclusive reception at La Certosa
              at 20:30 &apos;clock.
            </label>
          </div>

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
              Yes, I will also take part in the other events of the German
              Pavilion on Thursday, 18 April.
            </label>
          </div>
        </div>

        <div id="8737416" rel="text" className="inputRow">
          <label for="cr_form-input--textarea_8737416" class="itemname">
            Surname:
          </label>
          <input
            id="cr_form-input--textarea_8737416"
            className="button"
            name="1128493"
            placeholder="Surname"
            required
          />
        </div>

        <div id="8737408" rel="text" className="inputRow">
          <label for="cr_form-input--text8737408" class="itemname">
            First Name:
          </label>
          <input
            id="cr_form-input--text8737408"
            className="button"
            type="text"
            name="1128492"
            placeholder="First Name"
            required
          />
        </div>

        <div id="8737410" rel="text" className="inputRow">
          <label for="cr_form-input--text8737410">Profession / Function:</label>
          <input
            id="cr_form-input--text8737410"
            type="text"
            name="1203253"
            className="button"
            placeholder="Profession / Function"
            required
          />
        </div>

        <div id="8738658" rel="text" className="inputRow">
          <label for="cr_form-input--text8738658">Address:</label>

          <input
            id="cr_form-input--text8738658"
            className="button"
            type="text"
            name="1203291"
            placeholder="Street, Nr. | City | Zip | Country"
            required
          />
        </div>

        <div id="8730194" rel="email" className="inputRow">
          <label for="text8730194">E-Mail:</label>
          <input
            id="text8730194"
            name="email"
            className="button"
            placeholder="E-Mail"
            required
          />
        </div>

        <div id="8738659" rel="email" className="inputRow">
          <label for="cr_form-input--text8738659">
            Telephone (optional):
          </label>
          <input
            id="cr_form-input--text8738659"
            type="text"
            name="1203292"
            placeholder="Telephone"
            className="button"
          />
        </div>

        <div id="8730196" rel="button">
          <button
            type="submit"
            className="button formButton submitButton"
            style={{ marginLeft: "0" }}
          >
            Submit
          </button>
        </div>

        <noscript>
          <a href="http://www.cleverreach.de">www.CleverReach.de</a>
        </noscript>
      </form>
    </div>
  );
}
