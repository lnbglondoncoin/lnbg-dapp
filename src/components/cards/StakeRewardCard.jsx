import Button from "@/components/buttons/Button";
import { Store } from "@/context/Store";
import Link from "next/link";
import { useContext } from "react";

export default function StakeRewardCard({ lang }) {
  const { masterContractData } = useContext(Store);

  console.log(masterContractData);
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-ash p-5">
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray2">
          {lang === "en"
            ? "Total Holdings"
            : lang === "fr"
              ? "Total des avoirs"
              : lang === "es"
                ? "Total de participaciones"
                : "Общий объем"}
        </span>{" "}
        {/*TODO::Change here holder apis */}
        <div className="flex items-baseline gap-1">
          <span className="text-primary2 text-2xl font-bold">
            {masterContractData?.totalStakeAmount}
          </span>
          <span className="text-white">
            / ${+masterContractData?.totalStakeAmount / 10}
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex w-full flex-col">
          <span className="text-xl font-bold text-gray2">
            {lang === "en"
              ? "Total Staked"
              : lang === "fr"
                ? "Total mis en jeu"
                : lang === "es"
                  ? "Total apostado"
                  : "Bcero поставлено"}
          </span>
          <span className="text-2xl font-bold">
            {masterContractData?.totalStakeAmount}
          </span>
        </div>
        <div className="flex w-full flex-col">
          <span className="text-xl font-bold text-gray2">
            {lang === "en"
              ? "Total Rewarded"
              : lang === "fr"
                ? "Total récompensé"
                : lang === "es"
                  ? "Total recompensado"
                  : "Bcero вознаграждено"}
          </span>
          <span className="text-2xl font-bold">
            {masterContractData?.totalRewards}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link href="/staking">
          {" "}
          <Button
            title={
              lang === "en"
                ? "STAKE LNBG"
                : lang === "fr"
                  ? "MISE EN JEU LNBG"
                  : lang === "es"
                    ? "APUESTA LNBG"
                    : "ПОСТАВЬТЕ LNBG"
            }
            className="py-1.5"
          />{" "}
        </Link>
        <Link href="https://lngb-frontend.vercel.app/">
          {" "}
          <Button
            title={
              lang === "en"
                ? "BUY LNBG"
                : lang === "fr"
                  ? "ACHETER LNBG"
                  : lang === "es"
                    ? "COMPRAR LNBG"
                    : "КУПИТЬ LNBG"
            }
            className="text-nowrap border border-primary bg-transparent py-1.5 text-white hover:bg-primary hover:text-black"
          />{" "}
        </Link>
      </div>
    </div>
  );
}
