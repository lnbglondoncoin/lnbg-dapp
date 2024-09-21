import Button from "@/components/buttons/Button";

export default function TotalReferralCard({ lang }) {
  return (
    <div className="col-span-3 flex flex-col items-center justify-between gap-5 rounded-2xl bg-ash p-5 sm:col-span-1">
      <div className="flex flex-col gap-1 text-center">
        <span className="text-lg font-semibold">
          {lang === "en"
            ? "Your Referrals"
            : lang === "fr"
              ? "Vos recommandations"
              : lang === "es"
                ? "Tus referidos"
                : "Ваши рефералы"}
        </span>
        <span className="text-5xl font-bold">0</span>
      </div>
      <Button
        title={
          lang === "en"
            ? "Referral Link"
            : lang === "fr"
              ? "Lien de parrainage"
              : lang === "es"
                ? "Enlace de referido"
                : "Реферальная ссылка"
        }
        className="text-nowrap border border-primary bg-transparent py-1.5 text-white hover:bg-primary hover:text-black"
      />
    </div>
  );
}
