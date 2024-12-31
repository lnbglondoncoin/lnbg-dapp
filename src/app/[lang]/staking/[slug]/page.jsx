import ScoresCard from "../_components/ScoresCard";
import StakingCard from "../_components/StakingCard";
import StakingInfo from "../_components/StakingInfo";

export default function StakingSubPage({ params }) {
  const { lang, slug } = params;
  return (
    <div className="flex w-full flex-col justify-center py-10 px-5">
      <h1 className="mb-5 text-5xl font-semibold text-white">
        {lang === "en"
          ? "Staking"
          : lang === "es"
            ? "Apuesta"
            : lang === "ru"
              ? "Ставка"
              : "Paris"}
      </h1>
      <div className="grid grid-cols-3 gap-6">
        <StakingCard lang={lang} slug={slug} />
        <ScoresCard lang={lang} />
        <StakingInfo lang={lang} />
      </div>
    </div>
  );
}
