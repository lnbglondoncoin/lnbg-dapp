import { Activity, Dot } from "lucide-react";

export default function LeaderboardsCard() {
  return (
    <div className="col-span-3 sm:col-span-2">
      <div className="flex w-full flex-col gap-4 rounded-2xl bg-ash p-5">
        <div className="flex flex-col gap-5 rounded-xl bg-gray2/10 px-6 py-2">
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray2">
              Leaderboard Rank
            </span>
            <span className="text-3xl font-bold text-white">4,052</span>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-gray2">
              Total Booster Points
            </span>
            <span className="text-primary2 border-primary2 bg-primary2/5 flex w-fit items-center gap-2 rounded-md border px-5 text-3xl font-bold">
              <Activity size={20} />
              4,052
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-lg font-bold">
            You get Booster Points from:
          </span>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-primary2" />
            <span className="text-sm">Your Referrals</span>
          </div>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-blue-400" />
            <span className="text-sm">IDO Formings</span>
          </div>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-red-500" />
            <span className="text-sm">Staking</span>
          </div>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-green-400" />
            <span className="text-sm">Airdrops</span>
          </div>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-white" />
            <span className="text-sm">LNBG boxes</span>
          </div>
          <div className="flex items-center gap-1">
            <Dot size={24} className="text-pink-500" />
            <span className="text-sm">Incentives</span>
          </div>
        </div>
      </div>
    </div>
  );
}
