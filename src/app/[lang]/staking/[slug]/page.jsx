"use client";
import { useEffect, useState } from "react";
import ScoresCard from "../_components/ScoresCard";
import StakingCard from "../_components/StakingCard";
import StakingInfo from "../_components/StakingInfo";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

export default function StakingSubPage({ params }) {
  const { lang, slug } = params;
  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------
  const { isConnected } = useWeb3ModalAccount();

  return (
    <div className="flex w-full flex-col justify-center py-10 px-5">
      <h1 className="mb-5 text-5xl font-semibold text-white">
        {lang === "en"
          ? "Staking"
          : lang === "es"
            ? "Apuesta"
            : lang === "ru"
              ? "Ставка"
              : "Paris"}
      </h1>
      {isClient && (
        <div className="grid grid-cols-6 gap-6">
          <StakingCard lang={lang} slug={slug} />
          <ScoresCard lang={lang} />
          <StakingInfo lang={lang} />
        </div>
      )}
    </div>
  );
}
