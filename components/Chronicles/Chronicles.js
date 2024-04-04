import NavMenu from "../Nav/NavMenu";
import Entry from "../Chronicles/Entry";
export default function Chronicles({ locale, chronicles }) {
  return (
    <main>
<<<<<<< HEAD
      <div className="singlePageWrapper chroniclesPage">
        <h1>Chronicles</h1>
=======
      <div className="singlePageWrapper">
        <h1>{locale == "de" ? "Chronisten" : "Chroniclers"}</h1>
>>>>>>> main
        {chronicles.map((entry, i) => (
          <Entry key={i} i={i} entry={entry} locale={locale} />
        ))}
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
