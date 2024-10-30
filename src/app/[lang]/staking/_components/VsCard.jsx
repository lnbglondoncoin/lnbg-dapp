import { Info } from "lucide-react";
import Image from "next/image";

export default function VsCard() {
  return (
    <div
      className="flex bg-contain rounded-2xl"
      style={{
        backgroundImage: "url(/static/bg.png)",
        backgroundPosition: "start",
      }}
    >
      <div className="bg-black/70 rounded-2xl w-full p-5 grid lg:grid-cols-[9fr_1fr_9fr] gap-5">
        <div className="flex flex-col gap-2 items-center">
          <div className="text-2xl leading-6 font-bold text-center flex flex-col">
            <span className="text-primary">ONE-CLICK</span>
            <span>SOLUTIONS</span>
          </div>
          <p className="text-sm text-gray2 text-center max-w-sm">
            Experience the power of LNBG's automated investment management.{" "}
            <span className="text-white">
              One click solutions offer effortless optimization,
            </span>{" "}
            leveraging advanced algorithms to maximize your returns while you
            focus on what matters most to you.
          </p>
          <CardOne />
        </div>
        <div className="flex items-center justify-center">
          <div
            className="text-2xl font-bold text-primary2"
            style={{
              textShadow:
                "0 0 10px #ffba00, 0 0 20px #ffba00, 0 0 30px #FFFc54, 0 0 40px #FFFc54, 0 0 50px #FFFc54, 0 0 60px #FFFc54",
            }}
          >
            VS
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <div className="text-2xl leading-6 font-bold text-center flex flex-col">
            <span className="text-primary">CRYPTO</span>
            <span>STRATEGIES</span>
          </div>

          <p className="text-sm text-gray2 text-center max-w-sm">
            Explore our wide array of investment vaults, each offering unique
            strategies and management styles. From actively managed portfolio to
            passive index-tracking options,{" "}
            <span className="text-white">
              find the perfect match for your investment goals and risk
              tolerance
            </span>
          </p>
          <CardTwo />
        </div>
      </div>
    </div>
  );
}

const CardOne = () => {
  return (
    <div className="relative flex items-center justify-center pt-10 mt-10">
      <div className="text-gray2/75 absolute top-10 -left-28 p-2 rounded-md z-10 border-ash border text-lg leading-5 w-fit font-bold bg-[#1C1C1B] text-center">
        LNBG Powered <br /> management
      </div>
      <div className="text-gray2/75 absolute top-0 right-0 p-2 rounded-md z-10 border-ash border text-lg leading-5 w-fit font-bold bg-[#1C1C1B] text-center">
        Automatic <br /> rebalancing
      </div>
      <div className="text-gray2/75 absolute bottom-0 -left-10 p-2 rounded-md z-10 border-ash border text-lg leading-5 w-fit font-bold bg-[#1C1C1B] text-center">
        Optimized <br /> yields
      </div>
      <div className="text-gray2/75 absolute top-32 -right-12 p-2 rounded-md z-10 border-ash border text-lg leading-5 w-fit font-bold bg-[#1C1C1B] text-center">
        Hands-off <br /> approach
      </div>
      <div className="max-w-[250px] w-[65vw] rounded-lg bg-ash p-3 -rotate-12 flex items-center justify-center flex-col gap-1">
        <Image
          src="/static/coins/usdt.svg"
          alt="coin"
          width={30}
          height={30}
          quality={100}
        />
        <span className="text-sm font-semibold text-white/20">USDT</span>
        <span className="text-center max-w-[60%] leading-5 text-xl font-bold">
          ASO FINANCE USDT LENDING
        </span>
        <div
          className="rounded-full px-2 py-1 bg-primary/50 text-primary2 text-xs text-medium my-3"
          style={{
            boxShadow:
              "0 0 5px #ffba00, 0 0 10px #ffba00, 0 0 15px #FFFc54, 0 0 20px #FFFc54",
          }}
        >
          LNBG CONTROL
        </div>
        <div className="p-2 rounded-xl border w-full border-white/20 flex flex-col items-center gap-2">
          <div className="flex w-full items-baseline gap-1">
            <span className="text-gray2 text-sm">APY</span>
            <Info className="w-4 h-4 text-gray2 self-end mb-1" />
            <div className="w-full border-b border-dashed border-gray2/50"></div>
            <span className="text- font-bold text-primary">20%</span>
          </div>
          <div className="flex w-full items-baseline gap-1">
            <span className="text-gray2 text-sm">TVL</span>
            <div className="w-full border-b border-dashed border-gray2/50"></div>
            <span className="">$593</span>
          </div>
          <div className="flex w-full items-baseline gap-1">
            <span className="text-gray2 text-sm">Provider</span>
            <div className="w-full border-b border-dashed border-gray2/50"></div>
            <span className="">USD</span>
          </div>
        </div>
        <div className="relative p-1 w-full">
          <span className="absolute top-0 right-0 rotate-90">{cornerSvg}</span>
          <span className="absolute top-0 left-0">{cornerSvg}</span>
          <div className="w-full bg-[repeating-linear-gradient(135deg,#131418,#131418_10px,#1F2129_0,#1F2129_20px)] flex items-center gap-3 p-3">
            <div className="rounded-full bg-[#04E000] min-w-8 w-8 h-8 flex items-center justify-center">
              <Image
                src="/static/shieldtick.svg"
                width={18}
                height={18}
                alt="shield tick"
              />
            </div>
            <div className="flex flex-col h-full w-full justify-between">
              <div className="flex items-baseline justify-between">
                <span className="font-medium">Trust Score</span>
                <span className="font-semibold text-primary">90</span>
              </div>
              <div className="relative pt-0.5">
                <div className={`absolute -top-1 left-[80%]`}>
                  {indicatorSvg}
                </div>
                <div className="grid grid-cols-[3fr_5fr_2fr] gap-0.5 h-full w-full">
                  <div className="w-full h-2 rounded-full bg-[repeating-linear-gradient(135deg,rgba(255,61,108,.15),rgba(255,61,108,.15)_3px,#ff3d6c_0,#ff3d6c_5px)]"></div>
                  <div className="w-full h-2 rounded-full bg-[repeating-linear-gradient(135deg,rgba(249,231,39,.15),rgba(249,231,39,.15)_3px,#f9e727_0,#f9e727_5px)]"></div>
                  <div className="w-full h-2 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute bottom-0 left-0 -rotate-90">
            {cornerSvg}
          </span>
          <span className="absolute right-0 bottom-0 rotate-180">
            {cornerSvg}
          </span>
        </div>
      </div>
    </div>
  );
};
const CardTwo = () => {
  return (
    <div className="relative flex items-center justify-center pt-10 mt-10">
      <div className="text-gray2/75 absolute top-10 -right-28 p-2 rounded-md z-10 border-ash border text-lg leading-5 w-fit font-bold bg-[#1C1C1B] text-center">
        Diverse <br /> strategies
      </div>
      <div className="text-gray2/75 absolute top-0 -left-6 p-2 rounded-md z-10 border-ash border text-lg leading-5 w-fit font-bold bg-[#1C1C1B] text-center">
        Various <br /> management
      </div>
      <div className="text-gray2/75 absolute bottom-0 -right-10 p-2 rounded-md z-10 border-ash border text-lg leading-5 w-fit font-bold bg-[#1C1C1B] text-center">
        Active and <br /> passive options
      </div>
      <div className="text-gray2/75 absolute top-32 -left-24 p-2 rounded-md z-10 border-ash border text-lg leading-5 w-fit font-bold bg-[#1C1C1B] text-center">
        Customizable <br /> choices
      </div>
      <div className="max-w-[250px] w-[65vw] rounded-lg bg-ash p-3 rotate-12 flex items-center justify-center flex-col gap-1">
        <Image
          src="/static/coins/usdt.svg"
          alt="coin"
          width={30}
          height={30}
          quality={100}
        />
        <span className="text-sm font-semibold text-white/20">USDT</span>
        <span className="text-center max-w-[60%] leading-5 text-xl font-bold">
          ASO FINANCE USDT LENDING
        </span>
        <div
          className="rounded-full px-2 py-1 bg-primary/50 text-primary2 text-xs text-medium my-3"
          style={{
            boxShadow:
              "0 0 5px #ffba00, 0 0 10px #ffba00, 0 0 15px #FFFc54, 0 0 20px #FFFc54",
          }}
        >
          LNBG CONTROL
        </div>
        <div className="p-2 rounded-xl border w-full border-white/20 flex flex-col items-center gap-2">
          <div className="flex w-full items-baseline gap-1">
            <span className="text-gray2 text-sm">APY</span>
            <Info className="w-4 h-4 text-gray2 self-end mb-1" />
            <div className="w-full border-b border-dashed border-gray2/50"></div>
            <span className="text- font-bold text-primary">20%</span>
          </div>
          <div className="flex w-full items-baseline gap-1">
            <span className="text-gray2 text-sm">TVL</span>
            <div className="w-full border-b border-dashed border-gray2/50"></div>
            <span className="">$593</span>
          </div>
          <div className="flex w-full items-baseline gap-1">
            <span className="text-gray2 text-sm">Provider</span>
            <div className="w-full border-b border-dashed border-gray2/50"></div>
            <span className="">USD</span>
          </div>
        </div>
        <div className="relative p-1 w-full">
          <span className="absolute top-0 right-0 rotate-90">{cornerSvg}</span>
          <span className="absolute top-0 left-0">{cornerSvg}</span>
          <div className="w-full bg-[repeating-linear-gradient(135deg,#131418,#131418_10px,#1F2129_0,#1F2129_20px)] flex items-center gap-3 p-3">
            <div className="rounded-full bg-[#04E000] min-w-8 w-8 h-8 flex items-center justify-center">
              <Image
                src="/static/shieldtick.svg"
                width={18}
                height={18}
                alt="shield tick"
              />
            </div>
            <div className="flex flex-col h-full w-full justify-between">
              <div className="flex items-baseline justify-between">
                <span className="font-medium">Trust Score</span>
                <span className="font-semibold text-primary">90</span>
              </div>
              <div className="relative pt-0.5">
                <div className={`absolute -top-1 left-[80%]`}>
                  {indicatorSvg}
                </div>
                <div className="grid grid-cols-[3fr_5fr_2fr] gap-0.5 h-full w-full">
                  <div className="w-full h-2 rounded-full bg-[repeating-linear-gradient(135deg,rgba(255,61,108,.15),rgba(255,61,108,.15)_3px,#ff3d6c_0,#ff3d6c_5px)]"></div>
                  <div className="w-full h-2 rounded-full bg-[repeating-linear-gradient(135deg,rgba(249,231,39,.15),rgba(249,231,39,.15)_3px,#f9e727_0,#f9e727_5px)]"></div>
                  <div className="w-full h-2 rounded-full bg-primary"></div>
                </div>
              </div>
            </div>
          </div>
          <span className="absolute bottom-0 left-0 -rotate-90">
            {cornerSvg}
          </span>
          <span className="absolute right-0 bottom-0 rotate-180">
            {cornerSvg}
          </span>
        </div>
      </div>
    </div>
  );
};

const cornerSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="6"
    viewBox="0 0 6 6"
    fill="none"
  >
    <path
      id="Vector 804"
      d="M0.570312 5.98531V5.70031C0.570312 2.86709 2.86709 0.570312 5.70031 0.570312H5.98531"
      stroke="white"
    />
  </svg>
);

const indicatorSvg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12" fill="#ffba00">
    <path
      stroke="#11121A"
      strokeWidth="3"
      d="m2.646 5.768 3.086 3.086a2.5 2.5 0 0 0 3.536 0l3.086-3.086c1.575-1.575.46-4.268-1.768-4.268H4.414c-2.227 0-3.342 2.693-1.768 4.268Z"
    ></path>
  </svg>
);
