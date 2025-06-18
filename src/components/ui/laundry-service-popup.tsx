import React, { useState } from "react";

interface LaundryItem {
  id: string;
  name: string;
  price: number;
  category: "hauts" | "bas" | "robes-ensembles" | "sous-vetements-accessoires";
  quantity: number;
}

interface LaundryServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSelection: (items: LaundryItem[]) => void;
}

export function LaundryServicePopup({
  isOpen,
  onClose,
  onSelection,
}: LaundryServicePopupProps) {
  const [selectedItems, setSelectedItems] = useState<
    Record<string, string | null>
  >({
    hauts: null,
    bas: null,
    "robes-ensembles": null,
    "sous-vetements-accessoires": null,
  });

  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleSelectItem = (categoryKey: string, itemId: string) => {
    setSelectedItems((prev) => ({ ...prev, [categoryKey]: itemId }));
    setQuantities((prev) => ({
      ...prev,
      [itemId]: prev[itemId] || 1,
    }));
  };

  const laundryItems = {
    hauts: [
      { id: "chemise-cintre", name: "Chemise sur cintre", price: 18 },
      { id: "chemise-pliee", name: "Chemise pliée", price: 18 },
      { id: "chemisier-coton", name: "Chemisier en coton", price: 18 },
    ],
    bas: [
      { id: "pantalon-jeans", name: "Pantalon / Jeans", price: 20 },
      { id: "pantalon-costume", name: "Pantalon de costume", price: 20 },
    ],
    "robes-ensembles": [
      { id: "robe", name: "Robe", price: 25 },
      { id: "smoking", name: "Smoking", price: 50 },
    ],
    "sous-vetements-accessoires": [
      { id: "chaussettes", name: "Chaussettes", price: 8 },
      { id: "cravate", name: "Cravate", price: 14 },
    ],
  };

  const categoryTitles = {
    hauts: "Hauts",
    bas: "Bas",
    "robes-ensembles": "Robes & Ensembles",
    "sous-vetements-accessoires": "Sous-vêtements & Accessoires",
  };

  const handleQuantityChange = (itemId: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change),
    }));
  };

  const handleConfirm = () => {
    const selectedItemsArray: LaundryItem[] = [];

    Object.entries(selectedItems).forEach(([category, itemId]) => {
      if (itemId) {
        const allItems = laundryItems[category as LaundryItem["category"]];
        const item = allItems.find((i) => i.id === itemId);
        if (item) {
          selectedItemsArray.push({
            id: item.id,
            name: item.name,
            price: item.price,
            category: category as LaundryItem["category"],
            quantity: quantities[item.id] || 1,
          });
        }
      }
    });

    if (selectedItemsArray.length > 0) {
      onSelection(selectedItemsArray);
    }
  };

  const getTotalAmount = () => {
    let total = 0;
    Object.entries(quantities).forEach(([itemId, qty]) => {
      const item = Object.values(laundryItems)
        .flat()
        .find((i) => i.id === itemId);
      if (item) total += item.price * qty;
    });
    return total;
  };

  const getTotalItems = () => {
    return Object.values(quantities).reduce((sum, qty) => sum + qty, 0);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-[390px] bg-[#FAF9F5] rounded-t-[50px] max-h-[80vh] overflow-y-auto shadow-lg">
        {/* Header */}
        <div className="sticky top-0 bg-[#FAF9F5] p-5 mb-32 border-b border-gray-200/30">
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
            <div className="absolute right-0.5 top-0 w-full rounded-t-3xl overflow-hidden -z-10">
              <img
                src="/images/laundry/towel.png"
                alt="Service de blanchisserie"
                className="w-full h-full object-cover"
              />
            </div>
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
          <h2 className="text-[#65413D] font-semibold text-xl mb-3">
            Service de Blanchisserie
          </h2>

          <p className="text-[rgba(101,65,61,0.7)] text-sm mb-6">
            Merci de préciser votre demande de vêtements à traiter.
          </p>

          {/* Categories */}
          {Object.entries(laundryItems).map(([categoryKey, items]) => (
            <div key={categoryKey} className="mb-6">
              <h3 className="text-[#65413D] font-semibold text-base mb-4">
                {categoryTitles[categoryKey as keyof typeof categoryTitles]}
              </h3>

              {items.map((item, index) => {
                const isSelected = selectedItems[categoryKey] === item.id;

                return (
                  <div key={item.id}>
                    <div
                      className="flex items-center justify-between py-3 cursor-pointer"
                      onClick={() => handleSelectItem(categoryKey, item.id)}
                    >
                      <span className="text-[#65413D] text-base flex-1">
                        {item.name}
                      </span>

                      <div className="flex items-center space-x-4">
                        {isSelected ? (
                          <div className="flex items-center bg-white rounded-xl px-3 py-1 shadow-sm border border-gray-100">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleQuantityChange(item.id, -1);
                              }}
                              className="w-6 h-6 flex items-center justify-center"
                            >
                              <svg
                                width="10"
                                height="2"
                                viewBox="0 0 10 2"
                                fill="none"
                              >
                                <path
                                  d="M1 1H9"
                                  stroke="#F2930D"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </button>
                            <span className="mx-3 text-[#65413D] font-semibold text-sm">
                              {quantities[item.id] || 1}
                            </span>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                handleQuantityChange(item.id, 1);
                              }}
                              className="w-6 h-6 flex items-center justify-center"
                            >
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                              >
                                <path
                                  d="M5 1V9M1 5H9"
                                  stroke="#F2930D"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                />
                              </svg>
                            </button>
                          </div>
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-[#65413D]"></span>
                        )}
                      </div>
                    </div>

                    {index < items.length - 1 && (
                      <div className="border-t border-[rgba(101,65,61,0.3)]"></div>
                    )}
                  </div>
                );
              })}

              {/* Line between categories */}
              {categoryKey !== "sous-vetements-accessoires" && (
                <div className="border-t border-[rgba(101,65,61,0.3)] mt-4"></div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Button */}
        {getTotalItems() > 0 && (
          <div className="sticky bottom-0 bg-white/10 backdrop-blur-md p-5 border-t border-gray-200/30">
            <button
              onClick={handleConfirm}
              className="w-full bg-[#F2930D] text-white py-4 rounded-full font-semibold text-center flex items-center justify-between px-6"
            >
              <span>Voir la commande</span>
              <span>{getTotalAmount().toFixed(2)} €</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
