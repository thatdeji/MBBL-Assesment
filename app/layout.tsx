import type { Metadata } from "next";
import "./globals.css";
import Header from "$/components/Header/Header";
import Footer from "$/components/Footer/Footer";
import Link from "next/link";
import { Montserrat_Alternates } from "next/font/google";
import { ChevronUp } from "$/vectors/chevron-up";

export const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "TEAM FORCE",
  description: "The next generation payment ways.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserratAlternates.className}>
        <Header />
        {children}
        <Footer />
        <Link
          className="bg-[#6865FF] fixed bottom-1 md:bottom-7 right-2 md:right-8 w-8 h-8 md:w-10 md:h-10 rounded-md z-[10000] flex items-center justify-center"
          href={"#home"}
        >
          <ChevronUp />
        </Link>
      </body>
    </html>
  );
}
