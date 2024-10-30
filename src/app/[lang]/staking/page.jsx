"use client";

import { useContext, useEffect } from "react";
import { Store } from "@/context/Store";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import VaultSection from "./_components/VaultSection";

export default function StakingPage({ params }) {
  const { lang } = params;
  const { getStakingContractData } = useContext(Store);
  const { address, isConnected } = useWeb3ModalAccount();

  useEffect(() => {
    if (address && isConnected) {
      getStakingContractData();
    }
  }, [address]);

  return (
    <div className="flex w-full flex-col justify-center py-10 px-5">
      <VaultSection lang={lang} />
    </div>
  );
}
