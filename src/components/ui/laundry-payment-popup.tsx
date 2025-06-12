import React, { useState } from 'react';

interface LaundryPaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  subtotal: number;
  serviceFee: number;
  total: number;
  onConfirm: () => void;
}

export function LaundryPaymentPopup({
  isOpen,
  onClose,
  subtotal,
  serviceFee,
  total,
  onConfirm
}: LaundryPaymentPopupProps) {
  const [emailConsent, setEmailConsent] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-[390px] bg-[#FAF9F5] rounded-t-[50px] max-h-[80vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF9F5] p-5 border-b border-gray-200/30">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/70 rounded-full flex items-center justify-center shadow-sm"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 1L1 13M1 1L13 13" stroke="#65413D" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <button className="w-10 h-10 bg-white/70 rounded-full flex items-center justify-center shadow-sm">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M8 2L2 8L8 14" stroke="#65413D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-8">
          <h2 className="text-[#65413D] font-semibold text-xl mb-6">
            Comment souhaitez-vous payer ?
          </h2>

          {/* Récapitulatif des prix */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-[rgba(101,65,61,0.7)] text-base">
                Sous-total du panier
              </span>
              <span className="text-[rgba(101,65,61,0.7)] text-base">
                {subtotal.toFixed(2)} €
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-[rgba(101,65,61,0.7)] text-base">
                Frais de service
              </span>
              <span className="text-[rgba(101,65,61,0.7)] text-base">
                {serviceFee.toFixed(2)} €
              </span>
            </div>
            
            <div className="border-t border-[rgba(101,65,61,0.3)] pt-3">
              <div className="flex justify-between items-center">
                <span className="text-[#65413D] text-base font-semibold">
                  Total
                </span>
                <span className="text-[#65413D] text-base font-semibold">
                  {total.toFixed(2)} €
                </span>
              </div>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-[rgba(101,65,61,0.3)] mb-6"></div>

          {/* Options de paiement */}
          <div className="mb-6">
            {/* Apple Pay option */}
            <div className="bg-white/80 border border-[rgba(101,65,61,0.3)] rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-[#65413D] font-medium text-sm">
                  Apple Pay
                </span>
                <button 
                  onClick={onClose}
                  className="text-[#F2930D] text-sm underline"
                >
                  Modifier
                </button>
              </div>
            </div>

            {/* Autres options de paiement (grisées) */}
            <div className="bg-white/80 border border-[rgba(101,65,61,0.3)] rounded-lg p-4 opacity-50">
              <span className="text-[#65413D] text-sm">
                Autres méthodes de paiement
              </span>
            </div>
          </div>

          {/* Consentement email */}
          <div className="mb-6">
            <div className="flex items-start space-x-3">
              <button
                onClick={() => setEmailConsent(!emailConsent)}
                className={`w-5 h-5 mt-0.5 border rounded ${
                  emailConsent 
                    ? 'bg-[#65413D] border-[#65413D]' 
                    : 'border-[rgba(101,65,61,0.7)] bg-white'
                }`}
              >
                {emailConsent && (
                  <svg width="12" height="9" viewBox="0 0 12 9" fill="none" className="mx-auto mt-0.5">
                    <path d="M1 4.5L4 7.5L11 0.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <p className="text-[rgba(101,65,61,0.7)] text-sm leading-relaxed">
                Cochez cette case pour recevoir par e-mail des promotions Bell et des offres exclusives et des informations sur les nouveautés. Vous pouvez vous désinscrire à tout moment. Politique de confidentialité
              </p>
            </div>
          </div>

          {/* Disclaimer légal */}
          <div className="mb-8">
            <p className="text-[rgba(0,0,0,0.7)] text-xs text-center leading-relaxed">
              La vente de certains produits (comme l&apos;alcool et le tabac) est interdite aux mineurs. Vous devrez peut-être fournir une pièce d&apos;identité valide lors de la livraison.
            </p>
          </div>
        </div>

        {/* Bottom Action - Apple Pay */}
        <div className="sticky bottom-0 bg-white/10 backdrop-blur-md p-5 border-t border-gray-200/30">
          <div className="space-y-3">
            {/* Total recap */}
            <div className="flex justify-between items-center text-[rgba(0,0,0,0.7)]">
              <span className="text-sm">Total</span>
              <span className="font-semibold">{total.toFixed(2)} €</span>
            </div>
            
            {/* Apple Pay button */}
            <button
              onClick={onConfirm}
              className="w-full bg-black text-white py-3 rounded-lg flex items-center justify-center"
            >
              <span className="font-medium">Apple Pay</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 