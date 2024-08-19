import BridgeCard from "./_components/BridgeCard";
import BridgeInfo from "./_components/BridgeInfo";

export default function BridgePage() {
  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <h1 className="mb-5 text-5xl font-semibold text-white">Bridge</h1>
        <div className="grid grid-cols-3 gap-6">
          <BridgeCard />
          <BridgeInfo />
        </div>
      </div>
    </div>
  );
}
