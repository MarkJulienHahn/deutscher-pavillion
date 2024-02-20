import exhibitionPavillon from "./exhibitionPavillon"
import exhibitionCertosa from "./exhibitionCertosa"

import programPavillon from "./programPavillon"
import programCertosa from "./programCertosa"

import about from "./about"
import artists from "./artists";
import artistImages from "./artistImages"
import curators from "./curators";
import chronicles from "./chronicles";
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
  exhibitionPavillon,
  exhibitionCertosa,

  programPavillon,
  programCertosa,

  about,
  artists,
  artistImages,
  curators,
  chronicles,
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
