import { Dot } from "lucide-react";

export default function BridgeInfo({ lang }) {
  return (
    <div className="col-span-3 flex w-full flex-col h-fit items-center gap-3 rounded-3xl bg-ash p-5 lg:col-span-1">
      <h1 className="w-full text-center text-2xl font-medium">
        {lang === "en"
          ? "Bridge Info"
          : lang === "es"
            ? "Información del puente"
            : lang === "ru"
              ? "Информация о мосте"
              : "Informations sur le pont"}
      </h1>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        {lang === "en"
          ? "Yield comes from ETH staking and RWA protocols."
          : lang === "es"
            ? "El rendimiento proviene del staking de ETH y los protocolos RWA."
            : lang === "ru"
              ? "Доход идет от стейкинга ETH и протоколов RWA."
              : "Le rendement provient du staking ETH et des protocoles RWA."}
      </div>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        {lang === "en"
          ? "The yield from these decentralized protocols is passed back to LNBG users automatically."
          : lang === "es"
            ? "El rendimiento de estos protocolos descentralizados se devuelve automáticamente a los usuarios de LNBG."
            : lang === "ru"
              ? "Доход от этих децентрализованных протоколов автоматически возвращается пользователям LNBG."
              : "Le rendement de ces protocoles décentralisés est automatiquement restitué aux utilisateurs de LNBG."}
      </div>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        {lang === "en"
          ? "The default interest rate on other L2s is 0%."
          : lang === "es"
            ? "La tasa de interés predeterminada en otros L2 es del 0%."
            : lang === "ru"
              ? "Процентная ставка по умолчанию на других L2 составляет 0%."
              : "Le taux d'intérêt par défaut sur les autres L2 est de 0%."}
      </div>
    </div>
  );
}
