import type { Metadata } from "next";
import localFont from "next/font/local";
import "../../styles/mobile.css";

const JubilatFont = localFont({
  src: "../../../public/fonts/Jubilat-Light.otf",
  variable: "--font-jubilat",
});

const AcuminFont = localFont({
  src: "../../../public/fonts/Acumin-RPro.otf",
  variable: "--font-acumin",
});

export const metadata: Metadata = {
  title: "Bell - Vue Mobile",
  description: "Mockup de l'interface mobile Bell",
};

export default function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`mobile-container ${JubilatFont.variable} ${AcuminFont.variable}`}>
      {children}
    </div>
  );
} 