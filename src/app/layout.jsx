import Sidebar from "@/components/Sidebar";
import { Web3Modal } from "@/context/Web3Modal";
import { cn } from "@/lib/utils";
import { Rajdhani } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { StoreProvider } from "@/context/Store";

const font = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function layout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "flex flex-col text-white bg-[url('/bgs/body-bg.png')] lg:p-3 bg-coal lg:flex-row",
          font.className
        )}
      >
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
