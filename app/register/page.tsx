import GoBack from "@/components/GoBack";
import PlayerRegistrationForm from "@/components/PlayerRegistrationForm";
import SectionTitle from "@/components/SectionTitle";

const PlayerRegistrationPage = () => {
  return (
    <main>
      <section className="container mx-auto py-20">
        <div className="flex gap-5 items-start">
          <GoBack />
          <SectionTitle title="Register a player" />
        </div>
        <PlayerRegistrationForm />
      </section>
    </main>
  );
};

export default PlayerRegistrationPage;
