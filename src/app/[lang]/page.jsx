"use client";

import ConnectWalletButton from "@/components/buttons/ConnectWalletButton";
import FarmingCard from "@/components/cards/FarmingCard";
import LeaderboardsCard from "@/components/cards/LeaderboardsCard";
import ParticipateCard from "@/components/cards/ParticipateCard";
import StakeRewardCard from "@/components/cards/StakeRewardCard";
import TotalReferralCard from "@/components/cards/TotalReferralCard";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { useEffect, useState } from "react";

export default function DashboardPage({ params }) {
  const lang = params.lang;
  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------

  const { isConnected } = useWeb3ModalAccount();
  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <h1 className="mb-5 text-5xl font-semibold text-white">
          {lang === "en"
            ? "Dashboard"
            : lang === "fr"
              ? "Tableau de bord"
              : lang === "es"
                ? "Panel"
                : "Панель управления"}
        </h1>
        {isClient &&
          (isConnected ? (
            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-3 flex flex-col gap-6 lg:col-span-2">
                <ParticipateCard lang={lang} />
                <div className="grid grid-cols-3 gap-6">
                  <LeaderboardsCard lang={lang} />
                  <TotalReferralCard lang={lang} />
                </div>
              </div>
              <div className="col-span-3 lg:col-span-1 flex flex-col gap-6">
                <StakeRewardCard lang={lang} />
                <FarmingCard lang={lang} />
              </div>
            </div>
          ) : (
            <div className="flex h-[320px] w-full flex-col items-center justify-end gap-5 rounded-xl bg-ash bg-[url(/static/bgs/bg-2.png)] bg-cover bg-center bg-no-repeat px-10 py-16">
              <span className="w-full text-4xl font-semibold">
                {lang === "en"
                  ? "Connect your wallet to get started"
                  : lang === "fr"
                    ? "Connectez votre portefeuille pour commencer"
                    : lang === "es"
                      ? "Conecta tu billetera para comenzar"
                      : "Подключите свой кошелек, чтобы начать"}
              </span>
              <ConnectWalletButton lang={lang} />
            </div>
          ))}
      </div>
    </div>
  );
}
