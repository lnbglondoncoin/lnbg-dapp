import { Activity, Dot } from "lucide-react";

export default function LeaderboardsCard({ lang }) {
  return (
    <div className="col-span-3 sm:col-span-2">
      <div className="flex w-full flex-col gap-4 rounded-2xl bg-ash p-5">
        <div className="flex flex-col gap-5 rounded-xl bg-gray2/10 px-6 py-2">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray2">
              {lang === "en"
                ? "Leaderboard Rank"
                : lang === "fr"
                  ? "Classement"
                  : lang === "es"
                    ? "Clasificación"
                    : "Рейтинг"}
            </span>
            <span className="text-3xl font-bold text-white">4,052</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray2">
              {lang === "en"
                ? "Total Booster Points"
                : lang === "fr"
                  ? "Total des points de booster"
                  : lang === "es"
                    ? "Puntos de refuerzo totales"
                    : "Общее количество бустерных очков"}
            </span>
            <span className="text-primary2 border-primary2 bg-primary2/5 flex w-fit items-center gap-2 rounded-md border px-5 text-3xl font-bold">
              <Activity size={20} />
              4,052
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">
            {lang === "en"
              ? "You get Booster Points from:"
              : lang === "fr"
                ? "Vous obtenez des points de booster de:"
                : lang === "es"
                  ? "Obtienes puntos de refuerzo de:"
                  : "Вы получаете бустерные очки от:"}
          </span>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-primary2" />
            <span className="text-sm">
              {lang === "en"
                ? "Your Referrals"
                : lang === "fr"
                  ? "Vos recommandations"
                  : lang === "es"
                    ? "Tus referidos"
                    : "Ваши рефералы"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-blue-400" />
            <span className="text-sm">
              {lang === "en"
                ? "IDO Formings"
                : lang === "fr"
                  ? "Formations IDO"
                  : lang === "es"
                    ? "Formaciones IDO"
                    : "Формирование IDO"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-red-500" />
            <span className="text-sm">
              {lang === "en"
                ? "Staking"
                : lang === "fr"
                  ? "Mise en jeu"
                  : lang === "es"
                    ? "Apuesta"
                    : "Ставка"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-green-400" />
            <span className="text-sm">
              {lang === "en"
                ? "Airdrops"
                : lang === "fr"
                  ? "Airdrops"
                  : lang === "es"
                    ? "Airdrops"
                    : "Аирдропы"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-white" />
            <span className="text-sm">
              {lang === "en"
                ? "LNBG boxes"
                : lang === "fr"
                  ? "Boîtes LNBG"
                  : lang === "es"
                    ? "Cajas LNBG"
                    : "Коробки LNBG"}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-pink-500" />
            <span className="text-sm">
              {lang === "en"
                ? "Incentives"
                : lang === "fr"
                  ? "Incitations"
                  : lang === "es"
                    ? "Incentivos"
                    : "Поощрения"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
