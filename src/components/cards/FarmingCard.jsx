import Button from "@/components/buttons/Button";

export default function FarmingCard() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-ash p-5">
      <div className="flex flex-col gap-2">
        <span className="text-xl font-bold text-gray2">
          Stake your ETH, WETH, USDB and get Extra Rewards
        </span>
        <span className="">
          Native yield 2.93% for ETH/WETH and 6.00% for USDB.
        </span>
        <span className="">
          The special ability to buy launchpad project tokens without
          registration.
        </span>
        <span className="">
          Stake and earn Booster points every day.
        </span>
      </div>
      <div className="flex flex-col gap-3">
        <Button title="OPEN IDO FARMING" className="py-1.5" />
      </div>
    </div>
  );
}
