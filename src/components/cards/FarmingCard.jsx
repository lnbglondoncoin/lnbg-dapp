import Button from "@/components/buttons/Button";

export default function FarmingCard({ lang }) {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-ash p-5">
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold text-gray2">
          {lang === "en"
            ? "Stake your ETH, WETH, USDB and get Extra Rewards"
            : lang === "fr"
              ? "Misez votre ETH, WETH, USDB et obtenez des récompenses supplémentaires"
              : lang === "es"
                ? "Apueste su ETH, WETH, USDB y obtenga recompensas adicionales"
                : "Ставьте свой ETH, WETH, USDB и получайте дополнительные вознаграждения"}
        </span>
        <span>
          {lang === "en"
            ? "Native yield 2.93% for ETH/WETH and 6.00% for USDB."
            : lang === "fr"
              ? "Rendement natif 2,93% pour ETH/WETH et 6,00% pour USDB."
              : lang === "es"
                ? "Rendimiento nativo 2,93% para ETH/WETH y 6,00% para USDB."
                : "Нативный доход 2,93% для ETH/WETH и 6,00% для USDB."}
        </span>
        <span>
          {lang === "en"
            ? "The special ability to buy launchpad project tokens without registration."
            : lang === "fr"
              ? "La capacité spéciale d'acheter des jetons de projet de plateforme de lancement sans inscription."
              : lang === "es"
                ? "La capacidad especial de comprar tokens de proyectos de plataforma de lanzamiento sin registro."
                : "Специальная возможность покупать токены проектов платформы запуска без регистрации."}
        </span>
        <span>
          {lang === "en"
            ? "Stake and earn Booster points every day."
            : lang === "fr"
              ? "Misez et gagnez des points de booster tous les jours."
              : lang === "es"
                ? "Apueste y gane puntos de refuerzo todos los días."
                : "Ставьте и зарабатывайте бустерные очки каждый день."}
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <Button
          title={
            lang === "en"
              ? "OPEN IDO FARMING"
              : lang === "fr"
                ? "OUVRIR L'AGRICULTURE IDO"
                : lang === "es"
                  ? "ABRIR LA AGRICULTURA IDO"
                  : "ОТКРЫТЬ ФЕРМЕРСТВО IDO"
          }
          className="py-1.5"
        />
      </div>
    </div>
  );
}
