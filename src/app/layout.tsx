import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Sidebar, MobileNav } from "@/components/layout";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bell | Hotel Dashboard",
  description: "Hotel management dashboard for Bell",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/xdo0zdl.css" />
      </head>
      <body className={`${inter.className} bg-[#EFEDE4]`}>
        <Sidebar />
        {/* <MobileNav /> */}
        <div className="md:pl-0">{children}</div>
      </body>
    </html>
  );
}
