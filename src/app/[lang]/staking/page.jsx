"use client";
import StakingCard from "./_components/StakingCard";
import ScoresCard from "./_components/ScoresCard";
import StakingInfo from "./_components/StakingInfo";
import { useContext, useEffect } from "react";
import { Store } from "@/context/Store";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

export default function StakingPage() {
  const { getStakingContractData }=useContext(Store);
  const { address, isConnected } = useWeb3ModalAccount();

  useEffect(()=>{
    getStakingContractData();
  },[address])

  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <h1 className="mb-5 text-5xl font-semibold text-white">Staking</h1>
        <div className="grid grid-cols-3 gap-6">
          <StakingCard />
          <ScoresCard />
          <StakingInfo />
        </div>
      </div>
    </div>
  );
}
