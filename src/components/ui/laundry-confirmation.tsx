import React from 'react';

interface LaundryConfirmationProps {
  isOpen: boolean;
}

export function LaundryConfirmation({
  isOpen
}: LaundryConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#EFEDE4] w-full max-w-[390px] mx-auto">
      {/* Header */}
      <div className="pt-12 px-5">
        <div className="flex items-center justify-between mb-8">
          <div className="w-8 h-8"></div> {/* Spacer */}
          <div className="w-9 h-4 bg-[#65413D] rounded-sm"></div> {/* Logo placeholder */}
          <div className="w-8 h-8"></div> {/* Spacer */}
        </div>

        {/* Room info */}
        <div className="bg-white/40 backdrop-blur-md rounded-xl px-4 py-2 mb-8 shadow-sm">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#65413D] font-medium">Room #1023</span>
            <span className="text-[#65413D] font-light">Oceania Porte de Versailles</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="px-6 py-8">
        {/* Bell loading animation */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-[#F2930D] rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-[#F2930D] rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
            <div className="w-2 h-2 bg-[#F2930D] rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
          </div>
        </div>

        {/* Bell message */}
        <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-6 mb-6">
          <p className="text-[#65413D] font-['Jubilat'] text-[17px] leading-relaxed">
            Merci beaucoup pour toutes les informations fournies.
          </p>
          
          <p className="text-[#65413D] font-['Jubilat'] text-[17px] leading-relaxed mt-4">
            Votre demande de blanchisserie a bien été transmise au service de blanchisserie. Merci de bien vouloir remplir le sac prévu à cet effet dans votre chambre, notre équipe viendra le récupérer et s&apos;occupera de votre linge selon vos instructions. Nous vous tiendrons informé(e) dès que vos articles seront prêts.
          </p>
          
          <p className="text-[#65413D] font-['Jubilat'] text-[17px] leading-relaxed mt-4">
            N&apos;hésitez pas à me contacter si vous avez d&apos;autres besoins ou questions. Nous restons à votre entière disposition pour rendre votre séjour le plus agréable possible.
          </p>
        </div>

        {/* Bell disclaimer */}
        <div className="text-right">
          <p className="text-[rgba(101,65,61,0.33)] text-xs font-normal">
            Bell can make mistakes.
          </p>
          <p className="text-[rgba(101,65,61,0.33)] text-xs font-normal">
            Please double-check responses.
          </p>
        </div>
      </div>

      {/* Top blur overlay */}
      <div className="fixed top-0 left-0 right-0 h-48 bg-gradient-to-b from-[#EFEDE4] via-[#EFEDE4]/75 to-transparent pointer-events-none"></div>
      
      {/* Bottom blur overlay */}
      <div className="fixed bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#EFEDE4] via-[#EFEDE4]/50 to-transparent pointer-events-none"></div>

      {/* Chat Input */}
      <div className="fixed bottom-4 left-4 right-4 max-w-[390px] mx-auto">
        <div className="bg-white/40 backdrop-blur-md rounded-full px-6 py-4 shadow-lg border border-white/70">
          <div className="flex items-center space-x-4">
            <div className="flex space-x-1">
              <div className="w-4 h-4 bg-[#65413D] rounded-sm"></div>
              <div className="w-0 h-4 border-l border-[#65413D]"></div>
            </div>
            <span className="text-[#65413D] text-[17px] flex-1">Chat with Bell…</span>
            <div className="flex space-x-1">
              <div className="w-0 h-4 border-l-2 border-[#65413D]"></div>
              <div className="w-0 h-3 border-l-2 border-[#65413D]"></div>
              <div className="w-0 h-2 border-l-2 border-[#65413D]"></div>
              <div className="w-0 h-1 border-l-2 border-[#65413D]"></div>
              <div className="w-0 h-2 border-l-2 border-[#65413D]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 