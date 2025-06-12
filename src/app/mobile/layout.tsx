import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
  title: "Bell - Hôtel Oceania Paris",
  description: "Services hôteliers - Spa, Room Service, Conciergerie, Housekeeping",
  applicationName: "Bell",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Bell",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#2F2F2F",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function MobileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className={`mobile-container ${JubilatFont.variable} ${AcuminFont.variable}`}>
        {children}
      </div>
      
      {/* Service Worker Registration */}
      <Script id="sw-registration" strategy="afterInteractive">
        {`
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                  console.log('SW enregistré avec succès: ', registration.scope);
                }, function(err) {
                  console.log('Échec enregistrement SW: ', err);
                });
            });
          }
        `}
      </Script>
    </>
  );
} 