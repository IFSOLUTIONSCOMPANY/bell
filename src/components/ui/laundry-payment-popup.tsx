import React, { useState } from "react";

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
  onConfirm,
}: LaundryPaymentPopupProps) {
  const [emailConsent, setEmailConsent] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-[390px] bg-[#FAF9F5] rounded-t-[50px] max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF9F5] p-5 border-b border-gray-200/30">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="w-10 h-10 bg-white/70 rounded-full flex items-center justify-center shadow-sm"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M13 1L1 13M1 1L13 13"
                  stroke="#65413D"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white/70 rounded-full flex items-center justify-center shadow-sm">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path
                  d="M8 2L2 8L8 14"
                  stroke="#65413D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-8">
          <h2 className="text-[#65413D] font-semibold text-xl mb-6">
            Comment souhaitez-vous payer ?
          </h2>

          {/* Summary */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-base text-[rgba(101,65,61,0.7)]">
              <span>Sous-total du panier</span>
              <span>{subtotal.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between text-base text-[rgba(101,65,61,0.7)]">
              <span>Frais de service</span>
              <span>{serviceFee.toFixed(2)} €</span>
            </div>
            <div className="border-t border-[rgba(101,65,61,0.3)] pt-3 flex justify-between font-semibold text-[#65413D]">
              <span>Total</span>
              <span>{total.toFixed(2)} €</span>
            </div>
          </div>

          {/* Apple Pay option */}
          <div className="mb-4">
            <div className="flex justify-between items-center bg-white px-4 py-3 rounded-xl border border-[rgba(101,65,61,0.3)]">
              <span className="text-[#65413D] text-sm font-medium">
                Apple Pay
              </span>
              <button
                onClick={onClose}
                className="text-[#F2930D] text-sm font-medium"
              >
                Modifier
              </button>
            </div>
          </div>

          {/* Email consent */}
          <div className="mb-6">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={emailConsent}
                onChange={() => setEmailConsent(!emailConsent)}
                className="mt-1 shrink-0 w-[14px] h-[14px] accent-[#65413D] border border-[rgba(101,65,61,0.7)] rounded-sm"
              />
              <span className="text-[rgba(101,65,61,0.7)] text-sm leading-snug">
                Cochez cette case pour recevoir par e-mail des promotions Bell
                et des offres exclusives et des informations sur les nouveautés.
                Vous pouvez vous désinscrire à tout moment.{" "}
                <span className="text-[#F2930D] underline">
                  Politique de confidentialité
                </span>
              </span>
            </label>
          </div>

          {/* Legal disclaimer */}
          <div className="mb-8">
            <p className="text-[rgba(0,0,0,0.7)] text-xs text-center leading-relaxed">
              La vente de certains produits (comme l&apos;alcool et le tabac)
              est interdite aux mineurs. Vous devrez peut-être fournir une pièce
              d&apos;identité valide lors de la livraison.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="sticky bottom-0 bg-white/10 backdrop-blur-md p-5 border-t border-gray-200/30">
          <div className="space-y-3">
            <div className="flex justify-between items-center text-sm text-[rgba(0,0,0,0.7)]">
              <span>Total</span>
              <span className="font-semibold">{total.toFixed(2)} €</span>
            </div>
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
