import Entry from "./Entry";
import NavMenu from "../Nav/NavMenu";

export default function Visit({ visit, locale }) {
  return (
    <main>
      <div className="singlePageWrapper">
        <h1>{locale == "de" ? "Besuch" : "Visit"}</h1>

        {visit.map((entry, i) => (
          <Entry key={i} entry={entry} locale={locale} />
        ))}
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
