import NavMenu from "../Nav/NavMenu";
import Entry from "../Chronicles/Entry";
export default function Chronicles({ locale, chronicles }) {
  return (
    <main>
      <div className="singlePageWrapper chroniclesPage">
        <h1>{locale == "de" ? "Chronisten" : "Chroniclers"}</h1>
        {chronicles.map((entry, i) => (
          <Entry key={i} i={i} entry={entry} locale={locale} />
        ))}
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
