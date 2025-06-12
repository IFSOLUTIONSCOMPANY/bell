import React, { useState } from 'react';

interface SpaPaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  subtotal: number;
  serviceFee: number;
  total: number;
  appointmentInfo: {
    location: string;
    date: string;
    time: string;
    contact: string;
    email: string;
  };
  onPay: () => void;
}

export function SpaPaymentPopup({
  isOpen,
  onClose,
  onBack,
  subtotal,
  serviceFee,
  total,
  appointmentInfo,
  onPay
}: SpaPaymentPopupProps) {
  const [paymentMethod, setPaymentMethod] = useState<'apple-pay' | 'card'>('apple-pay');
  const [acceptMarketing, setAcceptMarketing] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md bg-[#FAF9F5] rounded-t-[50px] max-h-[80vh] overflow-y-auto shadow-lg">
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
            
            <button 
              onClick={onBack}
              className="w-10 h-10 bg-white/70 rounded-full flex items-center justify-center shadow-sm"
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M8 2L2 8L8 14" stroke="#65413D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-5 py-6">
          <h2 className="text-bell-primary font-semibold text-xl mb-6">
            Comment souhaitez-vous payer ?
          </h2>

          {/* Payment Summary */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between">
              <span className="text-bell-gray-700/70 text-base">
                Sous-total du panier
              </span>
              <span className="text-bell-gray-700/70 text-base">
                {subtotal.toFixed(2)} €
              </span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-bell-gray-700/70 text-base">
                Frais de service
              </span>
              <span className="text-bell-gray-700/70 text-base">
                {serviceFee.toFixed(2)} €
              </span>
            </div>
            
            <div className="border-t border-gray-200/50 pt-3">
              <div className="flex justify-between">
                <span className="text-bell-primary font-semibold text-base">
                  Total
                </span>
                <span className="text-bell-primary font-semibold text-base">
                  {total.toFixed(2)} €
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200/50 mb-6" />

          {/* Appointment Info */}
          <div className="mb-6">
            <h3 className="text-bell-primary font-semibold text-base mb-2">
              Votre soin est prévu à
            </h3>
            <div className="text-bell-primary text-sm space-y-1">
              <p>{appointmentInfo.location}</p>
              <p>{appointmentInfo.date} à {appointmentInfo.time}</p>
              <p>Contact</p>
              <p>{appointmentInfo.contact}</p>
              <p>{appointmentInfo.email}</p>
            </div>
            <button className="text-bell-orange text-sm font-medium mt-2">
              Modifier
            </button>
          </div>

          <div className="border-t border-gray-200/50 mb-6" />

          {/* Payment Methods */}
          <div className="space-y-3 mb-6">
            <div 
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                paymentMethod === 'apple-pay' 
                  ? 'border-bell-primary bg-bell-primary/5' 
                  : 'border-gray-200'
              }`}
              onClick={() => setPaymentMethod('apple-pay')}
            >
              <div className="flex items-center justify-between">
                <span className="text-bell-primary font-medium">Apple Pay</span>
                <div className={`w-4 h-4 rounded-full border-2 ${
                  paymentMethod === 'apple-pay'
                    ? 'border-bell-primary bg-bell-primary'
                    : 'border-gray-300'
                }`} />
              </div>
            </div>

            <div 
              className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                paymentMethod === 'card' 
                  ? 'border-bell-primary bg-bell-primary/5' 
                  : 'border-gray-200'
              }`}
              onClick={() => setPaymentMethod('card')}
            >
              <div className="flex items-center justify-between">
                <span className="text-bell-primary font-medium">Carte bancaire</span>
                <div className={`w-4 h-4 rounded-full border-2 ${
                  paymentMethod === 'card'
                    ? 'border-bell-primary bg-bell-primary'
                    : 'border-gray-300'
                }`} />
              </div>
            </div>
          </div>

          {/* Marketing Consent */}
          <div className="mb-6">
            <div className="flex items-start gap-3">
              <button
                onClick={() => setAcceptMarketing(!acceptMarketing)}
                className={`w-5 h-5 border-2 rounded flex items-center justify-center mt-0.5 ${
                  acceptMarketing
                    ? 'border-bell-primary bg-bell-primary'
                    : 'border-gray-300'
                }`}
              >
                {acceptMarketing && (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              
              <p className="text-bell-gray-700/70 text-sm leading-relaxed">
                Cochez cette case pour recevoir par e-mail des promotions Bell et des offres exclusives et des informations sur les nouveautés. Vous pouvez vous désinscrire à tout moment. Politique de confidentialité
              </p>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mb-6">
            <p className="text-bell-gray-700/70 text-xs leading-relaxed">
              La vente de certains produits (comme l&apos;alcool et le tabac) est interdite aux mineurs. Vous devrez peut-être fournir une pièce d&apos;identité valide lors de la livraison.
            </p>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="sticky bottom-0 bg-[#FAF9F5] p-5 border-t border-gray-200/30">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-bell-gray-700/70 text-sm">Total</p>
              <p className="text-bell-primary font-semibold text-lg">{total.toFixed(2)} €</p>
            </div>
          </div>
          
          <button
            onClick={onPay}
            className="w-full bg-black text-white py-4 rounded-lg font-medium text-center"
          >
            {paymentMethod === 'apple-pay' ? 'Apple Pay' : 'Payer par carte'}
          </button>
        </div>
      </div>
    </div>
  );
} 