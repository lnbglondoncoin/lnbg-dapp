import { Dot } from "lucide-react";

export default function BridgeInfo() {
  return (
    <div className="col-span-3 flex w-full flex-col h-fit items-center gap-3 rounded-3xl bg-ash p-5 lg:col-span-1">
      <h1 className="w-full text-center text-2xl font-medium">Bridge Info</h1>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        Yield comes from ETH staking and RWA protocols.
      </div>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        The yield from these decentralized protocols is passed back to LNBG
        users automatically.
      </div>
      <div className="flex w-full items-baseline gap-3 text-lg">
        <div className="w-[12px]">
          <Dot size={12} />
        </div>
        The default interest rate on other L2s is 0%.
      </div>
    </div>
  );
}
