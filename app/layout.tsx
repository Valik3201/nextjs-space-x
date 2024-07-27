import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

const oswald = Oswald({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Space X",
  description:
    "SpaceX designs, manufactures and launches advanced rockets and spacecraft. The company was founded in 2002 to revolutionize space technology, with the ultimate goal of enabling people to live on other planets.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex min-h-screen flex-col justify-between px-6 py-6 md:px-24 md:py-12 font-extralight uppercase bg-gradient-to-b from-background from-30% via-primary via-80% to-foreground ${oswald.className}`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
