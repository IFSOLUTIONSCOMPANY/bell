import React from 'react';
import { ServiceCard } from './service-card';

interface OrderItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

interface SuggestedItem {
  id: string;
  title: string;
  price: string;
  image?: string;
}

interface OrderConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onBack?: () => void;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  total: number;
  suggestedItems?: SuggestedItem[];
  onAddSuggested?: (itemId: string) => void;
  onConfirm?: () => void;
}

const OrderConfirmationPopup = React.forwardRef<HTMLDivElement, OrderConfirmationPopupProps>(
  ({ 
    isOpen, 
    onClose, 
    onBack,
    items, 
    subtotal, 
    deliveryFee, 
    serviceFee, 
    total,
    suggestedItems = [],
    onAddSuggested,
    onConfirm
  }, ref) => {
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
          <div className="h-[calc(100%-110px)] overflow-y-auto">
            {/* Titre */}
            <div className="px-5 pt-20 pb-4">
              <h2 className="text-[20px] font-semibold text-bell-primary leading-[1.2]">
                Votre commande
              </h2>
            </div>

            {/* Note allergies */}
            <div className="px-5 pb-4">
              <p className="text-[13px] font-light text-[rgba(101,65,61,0.7)] leading-[1.23]">
                Pour toute allergie alimentaire, veuillez contacter le restaurant &gt;
              </p>
            </div>

            {/* Articles commandés */}
            <div className="px-5 pb-6">
              <div className="space-y-4">
                {items.map((item, index) => (
                  <div key={item.id}>
                    <div className="flex justify-between items-start">
                      <div className="flex gap-3">
                        <span className="text-[16px] font-normal text-bell-primary">
                          {item.quantity}x
                        </span>
                        <span className="text-[16px] font-normal text-bell-primary">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[16px] font-normal text-[rgba(101,65,61,0.7)]">
                          {(item.price * item.quantity).toFixed(2)} €
                        </span>
                        <span className="text-[16px] font-semibold text-[rgba(101,65,61,0.7)]">
                          &gt;
                        </span>
                      </div>
                    </div>
                    {index < items.length - 1 && (
                      <div className="h-[0.5px] bg-[rgba(101,65,61,0.3)] mt-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            {suggestedItems.length > 0 && (
              <div className="px-5 pb-6">
                <p className="text-[13px] font-light text-[rgba(101,65,61,0.7)] mb-4">
                  D&apos;autres clients ont aussi ajouté
                </p>
                <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                  {suggestedItems.map((item) => (
                    <div key={item.id} className="flex-shrink-0">
                      <ServiceCard
                        title={item.title}
                        price={item.price}
                        image={item.image}
                        variant="popular"
                        onQuantityChange={(quantity) => {
                          if (quantity > 0) onAddSuggested?.(item.id);
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

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
          </div>

          {/* Footer avec bouton */}
          <div className="absolute bottom-0 left-0 right-0 h-[110px] bg-[rgba(250,249,245,0.1)] backdrop-blur-[20px] shadow-[0px_0px_10px_0px_rgba(217,208,195,0.5),inset_0px_1px_0px_0px_rgba(250,249,245,0.8)]">
            <div className="px-5 py-5">
              <button
                onClick={onConfirm}
                className="w-full h-[50px] bg-[#F2930D] text-[#FAF9F5] rounded-[25px] font-normal text-[16px] leading-[1.5] tracking-[-1.5625%] flex items-center justify-between px-6 hover:bg-[#E08A0C] transition-colors"
              >
                <span>Finaliser la commande</span>
                <span className="font-semibold">{total.toFixed(2)} €</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

OrderConfirmationPopup.displayName = 'OrderConfirmationPopup';

export { OrderConfirmationPopup }; 