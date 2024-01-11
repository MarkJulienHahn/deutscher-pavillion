import NavMenu from "../Nav/NavMenu";

export default function Team({ programPavillion, programCertosa, locale }) {
  return (
    <div>
      <h1>{locale == "de" ? "Programm" : "Program"}</h1>

      {programPavillion.length ? (
        <>
          <h1>{locale == "de" ? "Deutscher Pavillion" : "German Pavillion"}</h1>

          {programPavillion.map((entry, i) => (
            <TeamEntry key={i} entry={entry} locale={locale} />
          ))}
        </>
      ) : (
        ""
      )}

      {programCertosa.length ? (
        <>
          <h1>La Certosa</h1>

          {programCertosa.map((entry, i) => (
            <TeamEntry key={i} entry={entry} locale={locale} />
          ))}
        </>
      ) : (
        ""
      )}

      <NavMenu locale={locale} />
    </div>
  );
}
