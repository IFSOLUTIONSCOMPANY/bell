import React, { useState } from 'react';

interface DeliveryInfo {
  room: string;
  hotel: string;
  guestName: string;
  phone: string;
}

interface OrderPaymentPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  total: number;
  deliveryInfo: DeliveryInfo;
  onEditDelivery?: () => void;
  onEditPayment?: () => void;
  onPay?: () => void;
}

const OrderPaymentPopup = React.forwardRef<HTMLDivElement, OrderPaymentPopupProps>(
  ({ 
    isOpen, 
    onClose, 
    onBack,
    subtotal, 
    deliveryFee, 
    serviceFee, 
    total,
    deliveryInfo,
    onEditDelivery,
    onEditPayment,
    onPay
  }, ref) => {
    const [acceptMarketing, setAcceptMarketing] = useState(false);

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-50 flex items-end justify-center">
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={onClose}
        />

        {/* Popup */}
        <div 
          ref={ref}
          className="relative w-full max-w-[370px] h-[710px] bg-[#FAF9F5] rounded-t-[50px] overflow-hidden animate-slide-up"
        >
          {/* Boutons de navigation */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 bg-white/70 rounded-full flex items-center justify-center shadow-[0px_5px_10px_0px_rgba(217,208,195,0.5),inset_0px_1px_0px_0px_rgba(250,249,245,0.8)] backdrop-blur-[20px] z-10"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M1 13L13 1" stroke="#65413D" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          {onBack && (
            <button
              onClick={onBack}
              className="absolute top-5 left-5 w-10 h-10 bg-white/70 rounded-full flex items-center justify-center shadow-[0px_5px_10px_0px_rgba(217,208,195,0.5),inset_0px_1px_0px_0px_rgba(250,249,245,0.8)] backdrop-blur-[20px] z-10"
            >
              <svg width="15" height="1" viewBox="0 0 15 1" fill="none">
                <path d="M15 0.5H0" stroke="#65413D" strokeWidth="2"/>
              </svg>
            </button>
          )}

          {/* Contenu scrollable */}
          <div className="h-[calc(100%-149px)] overflow-y-auto">
            {/* Titre */}
            <div className="px-5 pt-20 pb-6">
              <h2 className="text-[20px] font-semibold text-bell-primary leading-[1.2]">
                Comment souhaitez-vous payer ?
              </h2>
            </div>

            {/* Récapitulatif des frais */}
            <div className="px-5 pb-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-[16px] font-light text-[rgba(101,65,61,0.7)]">
                    Sous-total du panier
                  </span>
                  <span className="text-[16px] font-normal text-[rgba(101,65,61,0.7)]">
                    {subtotal.toFixed(2)} €
                  </span>
                </div>
                <div className="h-[0.5px] bg-[rgba(101,65,61,0.3)]" />
                
                <div className="flex justify-between">
                  <span className="text-[16px] font-light text-[rgba(101,65,61,0.7)]">
                    Frais de livraison
                  </span>
                  <span className="text-[16px] font-normal text-[rgba(101,65,61,0.7)]">
                    {deliveryFee.toFixed(2)} €
                  </span>
                </div>
                <div className="h-[0.5px] bg-[rgba(101,65,61,0.3)]" />
                
                <div className="flex justify-between">
                  <span className="text-[16px] font-light text-[rgba(101,65,61,0.7)]">
                    Frais de service
                  </span>
                  <span className="text-[16px] font-normal text-[rgba(101,65,61,0.7)]">
                    {serviceFee.toFixed(2)} €
                  </span>
                </div>
                <div className="h-[0.5px] bg-[rgba(101,65,61,0.3)]" />
                
                <div className="flex justify-between">
                  <span className="text-[16px] font-semibold text-bell-primary">
                    Total
                  </span>
                  <span className="text-[16px] font-semibold text-bell-primary">
                    {total.toFixed(2)} €
                  </span>
                </div>
              </div>
            </div>

            {/* Option de paiement */}
            <div className="px-5 pb-6">
              <div className="bg-white/80 border border-[rgba(101,65,61,0.3)] rounded-lg p-4 flex items-center justify-between">
                <span className="text-[16px] font-normal text-bell-primary">
                  Apple Pay
                </span>
                {onEditPayment && (
                  <button
                    onClick={onEditPayment}
                    className="text-[14px] font-light text-[#F2930D]"
                  >
                    Modifier
                  </button>
                )}
              </div>
            </div>

            {/* Checkbox marketing */}
            <div className="px-5 pb-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <div className="mt-1">
                  <input
                    type="checkbox"
                    checked={acceptMarketing}
                    onChange={(e) => setAcceptMarketing(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-5 h-5 rounded-[3px] border-2 flex items-center justify-center transition-colors ${
                    acceptMarketing 
                      ? 'bg-[#F2930D] border-[#F2930D]' 
                      : 'border-[rgba(101,65,61,0.7)]'
                  }`}>
                    {acceptMarketing && (
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path d="M1 4L4.5 7.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-[14px] font-light text-[rgba(101,65,61,0.7)] leading-[1.07]">
                  Cochez cette case pour recevoir par e-mail des promotions Bell et des offres exclusives et des informations sur les nouveautés. Vous pouvez vous désinscrire à tout moment. Politique de confidentialité
                </span>
              </label>
            </div>

            {/* Informations de livraison */}
            <div className="px-5 pb-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-[16px] font-semibold text-bell-primary">
                  Livrer à
                </h3>
                {onEditDelivery && (
                  <button
                    onClick={onEditDelivery}
                    className="text-[12px] font-light text-[#F2930D]"
                  >
                    Modifier
                  </button>
                )}
              </div>
              <div className="text-[14px] font-semibold text-bell-primary leading-[1.14]">
                <p>{deliveryInfo.room}</p>
                <p>{deliveryInfo.hotel}</p>
                <p>{deliveryInfo.guestName}</p>
                <p>{deliveryInfo.phone}</p>
              </div>
            </div>

            {/* Ligne de séparation */}
            <div className="px-5 pb-6">
              <div className="h-[0.5px] bg-[rgba(101,65,61,0.3)]" />
            </div>
          </div>

          {/* Footer avec bouton et informations */}
          <div className="absolute bottom-0 left-0 right-0 h-[149px] bg-[rgba(250,249,245,0.1)] backdrop-blur-[20px] shadow-[0px_0px_10px_0px_rgba(217,208,195,0.5),inset_0px_1px_0px_0px_rgba(250,249,245,0.8)]">
            <div className="px-5 pt-5">
              <div className="flex justify-between items-center mb-3">
                <span className="text-[14px] font-light text-[rgba(0,0,0,0.7)]">
                  Total
                </span>
                <span className="text-[14px] font-semibold text-black">
                  {total.toFixed(2)} €
                </span>
              </div>
              
              <button
                onClick={onPay}
                className="w-full h-[30px] bg-black text-white rounded-[3px] font-medium text-[14px] leading-[1.71] tracking-[-1.7857142857142856%] flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                Apple Pay
              </button>
              
              <p className="text-[11px] font-light text-[rgba(0,0,0,0.7)] text-center mt-3 leading-[1.18]">
                La vente de certains produits (comme l&apos;alcool et le tabac) est interdite aux mineurs. Vous devrez peut-être fournir une pièce d&apos;identité valide lors de la livraison.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

OrderPaymentPopup.displayName = 'OrderPaymentPopup';

export { OrderPaymentPopup }; 