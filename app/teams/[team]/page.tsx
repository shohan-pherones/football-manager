import GoBack from "@/components/GoBack";
import SectionTitle from "@/components/SectionTitle";
import { teams } from "@/data/teams";
import { teamType } from "@/types/teams";
import { notFound } from "next/navigation";

const TeamPage = ({ params }: { params: { team: string } }) => {
  const team = teams.find((team: teamType) => team.route === params.team);

  if (!team) notFound();

  return (
    <main>
      <section className="container mx-auto py-20">
        <div className="flex items-start gap-5">
          <GoBack />
          <SectionTitle title={team.title} />
        </div>
        <div className="flex items-center gap-5 text-gray-500 mb-5">
          <p>Current players: {team.curPlayerCount}</p>
          <p>Max players: {team.maxPlayer}</p>
        </div>
        <SectionTitle title="All players" />
        <div className="grid grid-cols-3 gap-5 max-w-xl border-b py-2.5 px-5 rounded mb-5 font-semibold">
          <p>S/L</p>
          <p>Player</p>
          <p>Jersey</p>
        </div>
        <div className="flex flex-col gap-5">
          {/* <div className="grid grid-cols-3 gap-5 max-w-xl border-b py-2.5 px-5 rounded">
            <p>01.</p>
            <p>Messi</p>
            <p>10</p>
          </div> */}
        </div>
      </section>
    </main>
  );
};

export default TeamPage;
