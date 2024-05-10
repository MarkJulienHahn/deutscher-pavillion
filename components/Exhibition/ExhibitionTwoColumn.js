import React, { useState } from "react";
import { Link } from "../../src/navigation";

const ExhibitionTwoColumn = ({
  locale,
  exhibitionPavillon,
  exhibitionCertosa,
}) => {
  const [imageLeft, setImageLeft] = useState(null);
  const [imageRight, setImageRight] = useState(null);

  return (
    <div className="twoColumn">
      <div
        className="oneColumn"
        style={{
          backgroundImage: imageLeft ? `url(${imageLeft})` : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "var(--red)",
        }}
      >
        {/* <h3>{locale == "de" ? "Deutscher Pavillon" : "German Pavilion"}</h3> */}
        <div className="nameListWrapper">
          <h2>
            <Link href={"/deutscher-pavillon"}>
              {locale == "de" ? "Deutscher Pavillon" : "German Pavilion"}
            </Link>
          </h2>
          {exhibitionPavillon?.artists?.map((artist, i) => (
            <div className="nameWrapper" key={i}>
              <h2
                onMouseEnter={() => setImageLeft(artist?.coverImage?.asset.url)}
                onMouseLeave={() => setImageLeft(null)}
              >
                <Link href={`/${artist.slug.current}`}>{artist.name}</Link>
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div
        className="oneColumn"
        style={{
          backgroundImage: imageRight ? `url(${imageRight})` : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "var(--blue)",
          color: "var(--red)",
        }}
      >
        {/* <h3>La Certosa</h3> */}
        <div className="nameListWrapper">
          <h2>
            <Link href={"/la-certosa"}>
             La Certosa
            </Link>
          </h2>
          {exhibitionCertosa?.artists?.map((artist, i) => (
            <div className="nameWrapper" key={i}>
              <h2
                onMouseEnter={() =>
                  setImageRight(artist?.coverImage?.asset.url)
                }
                onMouseLeave={() => setImageRight(null)}
              >
                <Link href={`/${artist.slug.current}`}>{artist.name}</Link>
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExhibitionTwoColumn;
