import Button from "@/components/buttons/Button";

export default function ParticipateCard() {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-2xl bg-ash p-5">
      <span className="text-">
        You have not participated in any IDO projects
      </span>
      <div className="flex flex-col sm:flex-row py-5 sm:py-1 items-center gap-5">
        <Button title="Participate" className="py-1.5" />
        <Button
          title="How to participate?"
          className="text-nowrap border border-primary bg-transparent py-1.5 text-white hover:bg-primary hover:text-black"
        />
      </div>
    </div>
  );
}
