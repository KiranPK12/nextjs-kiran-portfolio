import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./component/Header";
import ActiveSelectionContextProvider from "@/context/active-section-context";
import Footer from "./component/Footer";
import ThemeSwitch from "./component/theme-switch";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiran | Personal Portfolio",
  description: "Kiran",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="overflow-x-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] !scroll-smooth"
    >
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative overflow-x-hidden pt-28 sm:pt-32 dark:bg-gray-900 dark:text-gray-50 dark:text opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] right-[-3rem] h-[31.25rem] w-[31.25rem] -z-10 blur-[10rem] rounded-full sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] left-[-28rem] h-[31.25rem] w-[50rem] -z-10 rounded-full blur-[10rem]  sm:w-[68.75rem] md:left-[-35rem] dark:bg-[#676394]"></div>
        <ActiveSelectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ActiveSelectionContextProvider>
        <ThemeSwitch/>
      </body>
    </html>
  );
}
