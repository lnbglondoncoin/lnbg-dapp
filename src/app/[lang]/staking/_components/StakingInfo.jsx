import { Dot } from "lucide-react";

export default function StakingInfo({ lang }) {
  return (
    <div className="col-span-3 flex w-full flex-col items-center gap-3 rounded-3xl bg-ash p-5 lg:col-span-2">
      <h1 className="w-full text-center text-2xl font-medium">
        {lang === "en"
          ? "Staking info"
          : lang === "es"
            ? "Información de apuesta"
            : lang === "ru"
              ? "Информация о ставках"
              : "Informations sur les paris"}
      </h1>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        {lang === "en"
          ? "Locked LNBG is a special token that is pegged to the $LNBG token rate."
          : lang === "es"
            ? "LNBG bloqueado es un token especial que está vinculado a la tasa de token $LNBG."
            : lang === "ru"
              ? "Заблокированный LNBG - это специальный токен, привязанный к курсу токена $LNBG."
              : "LNBG bloqué est un jeton spécial qui est lié au taux de jeton $LNBG."}
      </div>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        {lang === "en"
          ? "Locked LNBG will be distributed to all $LNBG holders on the LNBG network based on the snapshot of balances from May 31, 2024."
          : lang === "es"
            ? "LNBG bloqueado se distrib uirá a todos los titulares de $LNBG en la red LNBG basado en la instantánea de saldos del 31 de mayo de 2024."
            : lang === "ru"
              ? "Заблокированный LNBG будет распределен всем держателям $LNBG на сети LNBG на основе снимка балансов от 31 мая 2024 года."
              : "LNBG bloqué sera distribué à tous les détenteurs de $LNBG sur le réseau LNBG en fonction de l'instantané des soldes au 31 mai 2024."}
      </div>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        {lang === "en"
          ? "Locked LNBG can be staked to earn additional rewards: increased APR and bonus Booster Points."
          : lang === "es"
            ? "LNBG bloqueado se puede apostar para ganar recompensas adicionales: APR aumentado y puntos de bonificación Booster."
            : lang === "ru"
              ? "Заблокированный LNBG можно поставить, чтобы заработать дополнительные награды: увеличенный APR и бонусные баллы Booster."
              : "LNBG bloqué peut être misé pour gagner des récompenses supplémentaires: APR augmenté et points bonus Booster."}
      </div>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        {lang === "en"
          ? "The longer you stake, the higher the APR reward. After ending stake period reward will stop accumulate"
          : lang === "es"
            ? "Cuanto más tiempo apuestes, mayor será la recompensa APR. Después de finalizar el período de apuesta, la recompensa dejará de acumularse"
            : lang === "ru"
              ? "Чем дольше вы ставите, тем выше награда APR. После окончания периода ставки награда прекратится накапливаться"
              : "Plus vous misez longtemps, plus la récompense APR est élevée. Après la fin de la période de mise, la récompense cessera de s'accumuler"}
      </div>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        {lang === "en"
          ? "To participate in the IDO, you must stake a minimum of 2,000 Locked LNBG tokens."
          : lang === "es"
            ? "Para participar en el IDO, debes apostar un mínimo de 2,000 tokens LNBG bloqueados."
            : lang === "ru"
              ? "Чтобы принять участие в IDO, вы должны поставить не менее 2 000 заблокированных токенов LNBG."
              : "Pour participer à l'IDO, vous devez miser un minimum de 2 000 jetons LNBG bloqués."}
      </div>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        {lang === "en"
          ? "At the TGE, you can convert Locked LNBG tokens to $LNBG tokens at a 1:1 ratio."
          : lang === "es"
            ? "En el TGE, puedes convertir tokens LNBG bloqueados en tokens $LNBG a una relación de 1:1."
            : lang === "ru"
              ? "На TGE вы можете конвертировать заблокированные токены LNBG в токены $LNBG в соотношении 1:1."
              : "Lors du TGE, vous pouvez convertir les jetons LNBG bloqués en jetons $LNBG à un ratio de 1:1."}
      </div>
    </div>
  );
}
