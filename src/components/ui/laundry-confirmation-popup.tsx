import React, { useState } from "react";

interface LaundryItem {
  id: string;
  name: string;
  price: number;
  category: "hauts" | "bas" | "robes-ensembles" | "sous-vetements-accessoires";
  quantity: number;
}

interface LaundryConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: LaundryItem[];
  subtotal: number;
  onConfirm: (withIroningItems: string[]) => void;
}

export function LaundryConfirmationPopup({
  isOpen,
  onClose,
  selectedItems,
  subtotal,
  onConfirm,
}: LaundryConfirmationPopupProps) {
  const [ironingItems, setIroningItems] = useState<Record<string, boolean>>({});
  const [notes, setNotes] = useState("");

  const toggleIroning = (id: string) => {
    setIroningItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const ironingFee = 10;
  const ironingTotal = Object.entries(ironingItems).reduce(
    (sum, [id, selected]) => (selected ? sum + ironingFee : sum),
    0
  );
  const total = subtotal + ironingTotal;

  const handleConfirm = () => {
    const ids = Object.keys(ironingItems).filter((id) => ironingItems[id]);
    onConfirm(ids);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-[390px] bg-[#FAF9F5] rounded-t-[50px] max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF9F5] z-10 p-5 border-b border-gray-200/30">
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
          <h2 className="text-[#65413D] font-bold text-xl mt-2 mb-1">
            Votre commande
          </h2>
          <p className="text-sm text-[rgba(101,65,61,0.7)] mb-4 leading-snug">
            Merci de bien vouloir indiquer si vous souhaitez repasser vos
            différents vêtements.
          </p>

          {/* Table Header (align repassage right) */}
          <div className="flex justify-end pr-[6px] text-sm text-[rgba(101,65,61,0.7)] mb-2">
            Service de repassage
          </div>

          {/* Items */}
          <div className="space-y-3 mb-6">
            {selectedItems.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-[rgba(101,65,61,0.2)] pb-2"
              >
                <div className="flex items-center space-x-2">
                  <span className="text-[#65413D] font-medium">
                    {item.quantity}x
                  </span>
                  <span className="text-[#65413D] font-semibold">
                    {item.name}
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-[#65413D] text-base">
                    {item.price} €
                  </span>
                  <button
                    onClick={() => toggleIroning(item.id)}
                    className={`w-4 h-4 rounded-full border-2 ${
                      ironingItems[item.id]
                        ? "bg-[#65413D] border-[#65413D]"
                        : "border-[rgba(101,65,61,0.3)] bg-white"
                    }`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 mb-6">
            <h3 className="text-[rgba(101,65,61,0.7)] text-sm mb-2">
              Informations complémentaires
            </h3>
            <textarea
              className="w-full bg-transparent text-sm text-[#65413D] placeholder:text-[rgba(101,65,61,0.4)] resize-none focus:outline-none"
              rows={3}
              placeholder="Ajouter des instructions spéciales..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          {/* Résumé */}
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm text-[rgba(101,65,61,0.7)]">
              <span>Sous-total du panier</span>
              <span>{subtotal.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between text-sm text-[rgba(101,65,61,0.7)]">
              <span>Frais de repassage</span>
              <span>{ironingTotal.toFixed(2)} €</span>
            </div>
            <div className="border-t border-[rgba(101,65,61,0.3)] pt-3 flex justify-between font-bold text-[#65413D]">
              <span>Total</span>
              <span>{total.toFixed(2)} €</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white/10 backdrop-blur-md p-5 border-t border-gray-200/30">
          <button
            onClick={handleConfirm}
            className="w-full bg-[#F2930D] text-white py-4 rounded-full font-semibold flex items-center justify-between px-6"
          >
            <span>Finaliser la commande</span>
            <span>{total.toFixed(2)} €</span>
          </button>
        </div>
      </div>
    </div>
  );
}
