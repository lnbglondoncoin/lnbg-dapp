import Button from "@/components/buttons/Button";

export default function ParticipateCard({ lang }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-ash p-5">
      <span className="text-">
        {lang === "en"
          ? "You have not participated in any IDO projects"
          : lang === "fr"
            ? "Vous n'avez pas participé à des projets IDO"
            : lang === "es"
              ? "No has participado en ningún proyecto IDO"
              : "Вы не участвовали в про ектах IDO"}
      </span>
      <div className="flex flex-col sm:flex-row py-5 sm:py-1 items-center gap-5">
        <Button
          title={
            lang === "en"
              ? "Participate"
              : lang === "fr"
                ? "Participer"
                : lang === "es"
                  ? "Participar"
                  : "Участвовать"
          }
          className="py-1.5"
        />
        <Button
          title={
            lang === "en"
              ? "How to participate?"
              : lang === "fr"
                ? "Comment participer ?"
                : lang === "es"
                  ? "¿Cómo participar?"
                  : "Как участвовать?"
          }
          className="text-nowrap border border-primary bg-transparent py-1.5 text-white hover:bg-primary hover:text-black"
        />
      </div>
    </div>
  );
}
