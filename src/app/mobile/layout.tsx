import type { Metadata } from "next";

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
    <>
      {children}
    </>
  );
} 