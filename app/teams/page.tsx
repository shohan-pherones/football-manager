import GoBack from "@/components/GoBack";
import SectionTitle from "@/components/SectionTitle";
import { teams } from "@/data/teams";
import { teamType } from "@/types/team";
import Link from "next/link";

const TeamsPage = () => {
  return (
    <main>
      <section className="container mx-auto py-20">
        <div className="flex gap-5 items-start">
          <GoBack />
          <SectionTitle title="All teams" />
        </div>
        <div className="flex flex-col gap-5">
          {teams.map((team: teamType) => (
            <Link
              href={`/teams/${team.route}`}
              key={team.id}
              className="bg-gray-100 w-fit p-5 rounded-lg cursor-pointer hover:bg-gray-200 transition"
            >
              <h2 className="text-xl font-medium">{team.title}</h2>
              <div className="flex items-center gap-5 text-gray-500">
                <p>Current players: {team.curPlayerCount}</p>
                <p>Max players: {team.maxPlayer}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default TeamsPage;
