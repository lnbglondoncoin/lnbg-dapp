import CoinCard from "./CoinCard";

export default function VaultSection({ lang }) {
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
          tvl="49.7K"
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
          tvl="59.7K"
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
          tvl="119.7K"
          provider="$LNBG"
          trustScore={9.1}
          indicator="91"
        />
      </div>
    </div>
  );
}
