import BridgeCard from "./_components/BridgeCard";
import BridgeInfo from "./_components/BridgeInfo";

export default function BridgePage({ params }) {
  const { lang } = params;
  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <h1 className="mb-5 text-5xl font-semibold text-white">
          {lang === "en"
            ? "Bridge"
            : lang === "es"
              ? "Puente"
              : lang === "ru"
                ? "Мост"
                : "Pont"}
        </h1>
        <div className="grid grid-cols-3 gap-6">
          <BridgeCard lang={lang} />
          <BridgeInfo lang={lang} />
        </div>
      </div>
    </div>
  );
}
