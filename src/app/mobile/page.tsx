"use client";
import { useState } from "react";

import {
  Header,
  WelcomeView,
  ConversationView,
  ChatInput,
  ServiceTags,
  StatusInfoBar
} from "@/components/mobile";

export default function MobilePage() {
  const [showConversation, setShowConversation] = useState(false);

  const handleChatInputFocus = () => {
    if (!showConversation) {
      setShowConversation(true);
    }
  };

  return (
    <main className="mobile-only-container relative min-h-screen overflow-hidden bg-[#F2F1EA]">
      {/* Background avec effet de gradient et flou léger */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/mesh-gradient.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-[rgba(239,237,228,0.9)] backdrop-blur-[270px]"></div>
      </div>

      {/* Avertissement sur desktop */}
      <div className="desktop-only-container fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F2F1EA] text-[#65413D] p-6">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-[&apos;Jubilat&apos;] mb-4">Vue Mobile Uniquement</h2>
          <p className="mb-6">Cette page est conçue pour être affichée uniquement sur les appareils mobiles. Veuillez réduire la taille de votre navigateur ou accéder à cette page depuis un appareil mobile.</p>
          <div className="border-2 border-[#65413D] rounded-md p-4">
            <p className="text-sm">Largeur d&apos;écran recommandée : moins de 768px</p>
          </div>
        </div>
      </div>

      {/* Éléments d'interface */}
      <Header className="pt-2" />
      <StatusInfoBar />
      
      {/* Contenu conditionnel basé sur l'état de la conversation */}
      {!showConversation ? (
        <div className="flex flex-col h-full">
          <WelcomeView />
          {/* ServiceTags positionnés avec un espacement adéquat */}
          <ServiceTags className="mt-8 mb-[120px]" />
        </div>
      ) : (
        <ConversationView />
      )}

      {/* ChatInput (toujours visible) */}
      <ChatInput onFocus={handleChatInputFocus} />
    </main>
  );
}
