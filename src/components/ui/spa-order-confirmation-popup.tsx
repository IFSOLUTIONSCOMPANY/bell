import React from 'react';

interface SpaOrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  appointmentInfo?: {
    date: string;
    time: string;
  };
}

interface SpaOrderConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBack: () => void;
  items: SpaOrderItem[];
  subtotal: number;
  serviceFee: number;
  total: number;
  onConfirm: () => void;
}

export function SpaOrderConfirmationPopup({
  isOpen,
  onClose,
  onBack,
  items,
  subtotal,
  serviceFee,
  total,
  onConfirm
}: SpaOrderConfirmationPopupProps) {
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
            Votre réservation
          </h2>

          {/* Items */}
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div key={item.id} className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-bell-primary font-medium text-sm">
                      {item.quantity}x
                    </span>
                    <span className="text-bell-primary font-medium text-base">
                      {item.name}
                    </span>
                  </div>
                  
                  {item.appointmentInfo && (
                    <p className="text-bell-gray-700/70 text-sm ml-6">
                      {item.appointmentInfo.date} à {item.appointmentInfo.time}
                    </p>
                  )}
                </div>
                
                <span className="text-bell-primary font-medium text-base">
                  {(item.price * item.quantity).toFixed(2)} €
                </span>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200/50 my-6" />

          {/* Summary */}
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

          {/* Service Location Info */}
          <div className="bg-white/80 rounded-2xl p-4 mb-6">
            <h3 className="text-bell-primary font-semibold text-base mb-2">
              Votre soin est prévu à
            </h3>
            <div className="text-bell-primary text-sm space-y-1">
              <p>SPA de l&apos;Hôtel Oceania Paris</p>
              <p>Contact</p>
              <p>+33 7 60 09 56 17</p>
              <p>spa@oceania-paris.fr</p>
            </div>
          </div>

          {/* Allergie Notice */}
          <div className="mb-6">
            <p className="text-bell-gray-700/70 text-sm">
              Pour toute allergie ou condition médicale particulière, veuillez contacter le spa directement &gt;
            </p>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="sticky bottom-0 bg-[#FAF9F5] p-5 border-t border-gray-200/30">
          <button
            onClick={onConfirm}
            className="w-full bg-bell-orange text-white py-4 rounded-full font-semibold text-center flex items-center justify-between px-6"
          >
            <span>Finaliser la réservation</span>
            <span>{total.toFixed(2)} €</span>
          </button>
        </div>
      </div>
    </div>
  );
} 