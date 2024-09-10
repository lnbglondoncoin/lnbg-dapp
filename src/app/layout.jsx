import Sidebar from "@/components/Sidebar";
import { Web3Modal } from "@/context/Web3Modal";
import { cn } from "@/lib/utils";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "@/context/Store";
import { ToastContainer } from "react-toastify";

const font = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "LNBG DAPP - Secure & Innovative Cryptocurrency",
  description:
    "LNBG London Coin is a secure and innovative cryptocurrency inspired by London's financial heritage. Explore decentralized digital finance with our trusted and efficient platform.",
  image: "/logo.png",
  author: "LNBG London Coin Team",
  keywords: [
    "LNBG",
    "London Coin",
    "Cryptocurrency",
    "Blockchain",
    "Digital Currency",
    "London Crypto",
    "Decentralized Finance",
    "Secure Coin",
  ],
};

export default function layout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col text-white bg-[url('/bgs/body-bg.png')] lg:p-3 bg-coal lg:flex-row",
          font.className
        )}
      >
        <ToastContainer />
        <StoreProvider>
        <Web3Modal>
          <Sidebar />
          {children}
        </Web3Modal>
        </StoreProvider>
      </body>
    </html>
  );
}
