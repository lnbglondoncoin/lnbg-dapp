import Button from "@/components/buttons/Button";
import CoinCard from "./CoinCard";
import { useRouter } from "next/navigation";
import { Store } from "@/context/Store";
import { useContext, useEffect } from "react";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

export default function VaultSection({ lang }) {
  const router = useRouter();
  const { address, isConnected } = useWeb3ModalAccount();
  const { totalStakeAmount,getStakingContractData }=useContext(Store);
  
  console.log(totalStakeAmount,"totalStakeAmounttotalStakeAmounttotalStakeAmount");


  useEffect(() => {
    if (address && isConnected) {
      getStakingContractData();
      console.log("getStakingContractDataCalled");
    }
  }, [address]);

  return (
    <div className="flex flex-col items-center w-full col-span-3 gap-2 relative">
      <h1 className="text-white uppercase text-3xl sm:text-4xl font-bold leading-6">
        Find your ideal
      </h1>
      <h1 className="text-primary uppercase text-3xl sm:text-4xl font-bold leading-7">
        Investment Vault
      </h1>
      <span className="text-center">
        Discover three investment options tailored to your needs, from automated
        solutions to customizable strategies
      </span>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-5 w-full">
        <CoinCard
          lang={lang}
          imgUrl="/static/coins/usdt.svg"
          symbol="usdt"
          name="USDT"
          apy={6.01}
          tvl={totalStakeAmount}
          provider="$LNBG"
          trustScore={8.1}
          indicator="81"
        />
        <CoinCard
          lang={lang}
          imgUrl="/static/logo.png"
          symbol="lnbg"
          name="$LNBG"
          apy={5.4}
          tvl={totalStakeAmount}
          provider="$LNBG"
          trustScore={8.3}
          indicator="83"
        />
        <CoinCard
          lang={lang}
          imgUrl="/static/coins/usdc.svg"
          symbol="usdc"
          name="USDC"
          apy={6.14}
          tvl={totalStakeAmount}
          provider="$LNBG"
          trustScore={9.1}
          indicator="91"
        />
      </div>
      <div className="pb-10 flex items-center justify-center">
        <Button
          title="Explore All Vaults"
          className="font-bold uppercase"
          onClick={() => router.push(`/${lang}/staking/vaults`)}
        />
      </div>
    </div>
  );
}
