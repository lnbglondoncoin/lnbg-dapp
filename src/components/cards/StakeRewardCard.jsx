import Button from "@/components/buttons/Button";

export default function StakeRewardCard() {
  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-ash p-5">
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray2">Total Holdings</span>
        <div className="flex items-baseline gap-1">
          <span className="text-primary2 text-2xl font-bold">0</span>
          <span className="text-white">/ $0</span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <div className="flex w-full flex-col">
          <span className="text-xl font-bold text-gray2">Staked</span>
          <span className="text-2xl font-bold">0</span>
        </div>
        <div className="flex w-full flex-col">
          <span className="text-xl font-bold text-gray2">Reward</span>
          <span className="text-2xl font-bold">0</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Button title="STAKE LNBG" className="py-1.5" />
        <Button
          title="BUY LNBG"
          className="text-nowrap border border-primary bg-transparent py-1.5 text-white hover:bg-primary hover:text-black"
        />
      </div>
    </div>
  );
}
