import React, { useState } from 'react';

interface LaundryItem {
  id: string;
  name: string;
  price: number;
  category: 'hauts' | 'bas' | 'robes-ensembles' | 'sous-vetements-accessoires';
  quantity: number;
}

interface LaundryConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: LaundryItem[];
  subtotal: number;
  onConfirm: (withIroning: boolean) => void;
}

export function LaundryConfirmationPopup({
  isOpen,
  onClose,
  selectedItems,
  subtotal,
  onConfirm
}: LaundryConfirmationPopupProps) {
  const [ironingSelected, setIroningSelected] = useState([false, false, false]); // 3 éléments comme dans le design

  if (!isOpen) return null;

  const ironingFee = 10.00;
  const hasIroning = ironingSelected.some(selected => selected);
  const total = subtotal + (hasIroning ? ironingFee : 0);

  const handleIroningToggle = (index: number) => {
    const newSelection = [...ironingSelected];
    newSelection[index] = !newSelection[index];
    setIroningSelected(newSelection);
  };

  const handleConfirm = () => {
    onConfirm(hasIroning);
  };

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
            Votre commande
          </h2>
          
          <p className="text-[rgba(101,65,61,0.7)] text-sm mb-6">
            Merci de bien vouloir indiquer si vous souhaitez repasser vos différents vêtements.
          </p>

          {/* Liste des articles sélectionnés */}
          <div className="mb-6">
            {selectedItems.map((item, index) => (
              <div key={item.id}>
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-[#65413D] text-base font-normal">
                      {item.quantity}x
                    </span>
                    <span className="text-[#65413D] text-base font-normal">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-[#65413D] text-base font-normal">
                    {item.price} €
                  </span>
                </div>
                
                {/* Ligne de séparation */}
                {index < selectedItems.length - 1 && (
                  <div className="border-t border-[rgba(101,65,61,0.3)]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Service de repassage */}
          <div className="mb-6">
            <div className="text-right mb-4">
              <span className="text-[rgba(101,65,61,0.7)] text-sm">
                Service de repassage
              </span>
            </div>
            
            <div className="flex justify-end space-x-4">
              {ironingSelected.map((selected, index) => (
                <button
                  key={index}
                  onClick={() => handleIroningToggle(index)}
                  className={`w-4 h-4 rounded-full border-2 ${
                    selected 
                      ? 'bg-[#65413D] border-[#65413D]' 
                      : 'border-[rgba(101,65,61,0.3)] bg-white'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Séparateur principal */}
          <div className="border-t border-[rgba(101,65,61,0.3)] mb-6"></div>

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
                Frais de repassage
              </span>
              <span className="text-[rgba(101,65,61,0.7)] text-base">
                {hasIroning ? ironingFee.toFixed(2) : '0,00'} €
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

          {/* Informations complémentaires */}
          <div className="mb-8">
            <div className="bg-white/75 rounded-2xl p-4 border border-gray-100">
              <h3 className="text-[rgba(101,65,61,0.7)] text-base mb-2">
                Informations complémentaires
              </h3>
              <textarea
                className="w-full bg-transparent text-[#65413D] text-sm resize-none focus:outline-none"
                rows={3}
                placeholder="Ajouter des instructions spéciales..."
              />
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="sticky bottom-0 bg-white/10 backdrop-blur-md p-5 border-t border-gray-200/30">
          <button
            onClick={handleConfirm}
            className="w-full bg-[#F2930D] text-white py-4 rounded-full font-semibold text-center flex items-center justify-between px-6"
          >
            <span>Finaliser la commande</span>
            <span>{total.toFixed(2)} €</span>
          </button>
        </div>
      </div>
    </div>
  );
} 