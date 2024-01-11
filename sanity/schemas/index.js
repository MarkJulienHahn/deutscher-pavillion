import exhibitionPavillion from "./exhibitionPavillion"
import exhibitionCertosa from "./exhibitionCertosa"

import programPavillion from "./programPavillion"
import programCertosa from "./programCertosa"

import about from "./about"
import artists from "./artists";
import curators from "./curators";
import visit from "./visit";
import press from "./press";
import newsletter from "./newsletter";
import team from "./team";
import dank from "./dank";

import privacy from "./privacy";
import imprint from "./imprint";

import durationType from "./duration/durationType"
import timeValueType from "./duration/timeValueType"

const schemaTypes = [
  exhibitionPavillion,
  exhibitionCertosa,

  programPavillion,
  programCertosa,

  about,
  artists,
  curators,
  visit,
  press,
  newsletter,
  team,
  dank,

  privacy,
  imprint,

  durationType,
  timeValueType
];

export default schemaTypes;
