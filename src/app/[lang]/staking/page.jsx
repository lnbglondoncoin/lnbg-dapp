"use client";
import StakingCard from "./_components/StakingCard";
import ScoresCard from "./_components/ScoresCard";
import StakingInfo from "./_components/StakingInfo";
import { useContext, useEffect } from "react";
import { Store } from "@/context/Store";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

export default function StakingPage({ params }) {
  const { lang } = params;
  const { getStakingContractData } = useContext(Store);
  const { address, isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    getStakingContractData();
  }, [address]);

  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <h1 className="mb-5 text-5xl font-semibold text-white">
          {lang === "en"
            ? "Staking"
            : lang === "es"
              ? "Apuesta"
              : lang === "ru"
                ? "Ставка"
                : "Paris"}
        </h1>
        <div className="grid grid-cols-3 gap-6">
          <StakingCard lang={lang} />
          <ScoresCard lang={lang} />
          <StakingInfo lang={lang} />
        </div>
      </div>
    </div>
  );
}
