import Button from "@/components/buttons/Button";

export default function TotalReferralCard() {
  return (
    <div className="col-span-3 flex flex-col items-center justify-between gap-5 rounded-2xl bg-ash p-5 sm:col-span-1">
      <div className="flex flex-col gap-1 text-center">
        <span className="text-lg font-semibold">Your Referrals</span>
        <span className="text-5xl font-bold">0</span>
      </div>
      <Button
        title="Referral Link"
        className="text-nowrap border border-primary bg-transparent py-1.5 text-white hover:bg-primary hover:text-black"
      />
    </div>
  );
}
