import React from "react";

interface LaundryConfirmationProps {
  isOpen: boolean;
}

export function LaundryConfirmation({ isOpen }: LaundryConfirmationProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#EFEDE4] w-full max-w-[390px] mx-auto">
      {/* Header */}
      <div className="pt-12 px-5">
        <div className="flex items-center justify-between mb-6">
          <button className="w-8 h-8" aria-label="Menu" />
          <span className="text-[#65413D] font-bold text-lg tracking-wide">
            Bēll
          </span>
          <button className="w-8 h-8" aria-label="Search" />
        </div>

        {/* Room info */}
        <div className="bg-white shadow-sm rounded-xl px-4 py-2 mb-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-[#65413D] font-semibold">Room #1023</span>
            <span className="text-[#65413D] font-light text-xs">
              Oceania Porte de Versailles
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 pb-28">
        <div className="text-[#65413D] font-['Jubilat'] text-[17px] leading-[28px] space-y-6">
          <p>Merci beaucoup pour toutes les informations fournies.</p>
          <p>
            Votre demande de blanchisserie a bien été transmise au service de
            blanchisserie. Merci de bien vouloir remplir le sac prévu à cet
            effet dans votre chambre, notre équipe viendra le récupérer et
            s’occupera de votre linge selon vos instructions. Nous vous
            tiendrons informé(e) dès que vos articles seront prêts.
          </p>
          <p>
            N’hésitez pas à me contacter si vous avez d’autres besoins ou
            questions. Nous restons à votre entière disposition pour rendre
            votre séjour le plus agréable possible.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="flex items-start mt-6 space-x-2">
          <div className="w-2 h-2 bg-[#F2930D] rounded-full mt-1" />
          <div className="text-[rgba(101,65,61,0.33)] text-xs font-normal leading-snug">
            <p>Bell can make mistakes.</p>
            <p>Please double-check responses.</p>
          </div>
        </div>
      </div>

      {/* Chat Input */}
      <div className="fixed bottom-4 left-4 right-4 max-w-[390px] mx-auto">
        <div className="bg-white/40 backdrop-blur-md rounded-full px-6 py-4 shadow-lg border border-white/70">
          <div className="flex items-center justify-between">
            <span className="text-[#65413D] text-[17px] font-medium">
              Chat with Bell...
            </span>
            <div className="flex items-end space-x-[2px]">
              <div className="w-[1px] h-4 bg-[#65413D]" />
              <div className="w-[1px] h-3 bg-[#65413D]" />
              <div className="w-[1px] h-2 bg-[#65413D]" />
              <div className="w-[1px] h-1 bg-[#65413D]" />
              <div className="w-[1px] h-2 bg-[#65413D]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
