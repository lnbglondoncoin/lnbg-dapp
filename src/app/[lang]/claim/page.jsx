"use client";

import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { useEffect, useState } from "react";
import Timer from "./_components/Timer";
import ConnectWalletButton from "@/components/buttons/ConnectWalletButton";

export default function ClaimPage({ params }) {
  const { lang } = params;
  // --------------For hydration error-------------------
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  // ----------------------------------------------------

  const { isConnected } = useWeb3ModalAccount();
  return (
    <div className="flex w-full justify-center p-10">
      <div className="flex w-full flex-col gap-5">
        <h1 className="mb-5 text-5xl font-semibold text-white">
          {lang === "en"
            ? "Claim"
            : lang === "es"
              ? "Reclamar"
              : lang === "ru"
                ? "Претензия"
                : "Réclamation"}
        </h1>
        {isClient &&
          (isConnected ? (
            <div className="flex w-full rounded-3xl bg-ash p-3">
              <div className="flex w-full rounded-xl bg-[url(/static/claim.jpeg)] bg-cover bg-center">
                <div className="flex w-full bg-black/30 flex-col items-center justify-center gap-5 rounded-xl py-20 text-center">
                  <span className="text-3xl px-2 sm:text-5xl font-semibold uppercase lg:text-6xl">
                    {lang === "en"
                      ? "Prepare for the LNBG Token"
                      : lang === "es"
                        ? "Prepárate para el Token LNBG"
                        : lang === "ru"
                          ? "Подготовьтесь к токену LNBG"
                          : "Préparez-vous pour le jeton LNBG"}
                    <br />{" "}
                    {lang === "en"
                      ? "Distribution Event"
                      : lang === "es"
                        ? "Evento de distribución de tokens"
                        : lang === "ru"
                          ? "Событие распределения токенов"
                          : "Événement de distribution de jetons"}
                  </span>
                  <Timer />
                  <span className="px-5 text-xl font-semibold max-w-2xl uppercase">
                    {lang === "en"
                      ? "We're approaching a monumental moment in our journey, and we can't wait to share this with our incredible community! The LNBG Token Distribution Event is right around the corner, marking a significant milestone for our project."
                      : lang === "es"
                        ? "¡Nos acercamos a un momento monumental en nuestro viaje, y no podemos esperar para compartir esto con nuestra increíble comunidad! El Evento de Distribución de Tokens LNBG está a la vuelta de la esquina, marcando un hito significativo para nuestro proyecto."
                        : lang === "ru"
                          ? "Мы приближаемся к важному моменту в нашем путешествии, и не можем дождаться, чтобы поделиться этим с нашим невероятным сообществом! Событие распределения токенов LNBG уже совсем близко, отмечая значительный веху для нашего проекта."
                          : "Nous approchons d'un moment monumental de notre voyage, et nous avons hâte de partager cela avec notre incroyable communauté! L'événement de distribution de jetons LNBG est imminent, marquant une étape importante pour notre projet."}
                  </span>
                  <span className="px-5 text-lg font-medium max-w-2xl text-white/80">
                    {lang === "en"
                      ? "Get ready to claim and trade your $LLC tokens! Once the presale ends, the referral and airdrop token distribution will begin, opening up exciting opportunities for everyone involved. Keep a close eye on the countdown—this is your chance to be part of the future of finance!"
                      : lang === "es"
                        ? "¡Prepárate para reclamar e intercambiar tus tokens $LLC! Una vez que termine la preventa, comenzará la distribución de tokens de referencia y airdrop, abriendo emocionantes oportunidades para todos los involucrados. ¡Mantén un ojo en la cuenta regresiva, esta es tu oportunidad de ser parte del futuro de las finanzas!"
                        : lang === "ru"
                          ? "Приготовьтесь к тому, чтобы претензии и торговать своими токенами $LLC! После завершения предварительной продажи начнется распределение токенов реферрала и воздушного капельницы, открывая увлекательные возможности для всех участников. Следите за обратным отсчетом - это ваш шанс стать частью будущего финансов!"
                          : "Préparez-vous à réclamer et à échanger vos jetons $LLC! Une fois la prévente terminée, la distribution de jetons de parrainage et de largage aérien commencera, ouvrant des opportunités passionnantes pour tous les participants. Gardez un œil sur le compte à rebours - c'est votre chance de faire partie de l'avenir de la finance!"}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex h-[320px] w-full flex-col items-center justify-end gap-5 rounded-xl bg-ash bg-[url(/static/bgs/bg-2.png)] bg-cover bg-center bg-no-repeat px-10 py-16">
              <span className="w-full text-4xl font-semibold">
                {lang === "en"
                  ? "Connect wallet to access claim"
                  : lang === "es"
                    ? "Conecta la billetera para acceder a la reclamación"
                    : lang === "ru"
                      ? "Подключите кошелек, чтобы получить доступ к претензии"
                      : "Connectez votre portefeuille pour accéder à la réclamation"}
              </span>
              <ConnectWalletButton />
            </div>
          ))}
      </div>
    </div>
  );
}
