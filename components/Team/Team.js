import TeamEntry from "./TeamEntry";
import NavMenu from "../Nav/NavMenu";

export default function Team({ team, locale }) {
  return (
    <main>
      <div className="singlePageWrapper">
        <h1>Team</h1>
        {team.map((entry, i) => (
          <TeamEntry key={i} entry={entry} locale={locale} />
        ))}
      </div>
      <NavMenu locale={locale} />
    </main>
  );
}
