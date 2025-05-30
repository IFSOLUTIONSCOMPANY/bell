import React, { useState } from 'react';
import { AddButton } from './add-button';
import Image from 'next/image';
interface ItemOption {
  id: string;
  name: string;
  required?: boolean;
}

interface ItemSection {
  title: string;
  required?: boolean;
  options: ItemOption[];
}

interface ItemPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  price: string;
  image?: string;
  sections?: ItemSection[];
  onAdd?: (selections: Record<string, string>) => void;
}

const ItemPopup = React.forwardRef<HTMLDivElement, ItemPopupProps>(
  ({ isOpen, onClose, title, description, price, image, sections = [], onAdd }, ref) => {
    const [selections, setSelections] = useState<Record<string, string>>({});
    const [quantity, setQuantity] = useState(1);

    if (!isOpen) return null;

    const handleSelection = (sectionTitle: string, optionId: string) => {
      setSelections(prev => ({
        ...prev,
        [sectionTitle]: optionId
      }));
    };

    const handleAdd = () => {
      onAdd?.(selections);
      onClose();
    };

    const isValid = sections
      .filter(section => section.required)
      .every(section => selections[section.title]);

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
          className="relative w-full max-w-[370px] h-[780px] bg-[#FAF9F5] rounded-t-[50px] overflow-hidden animate-slide-up"
        >
          {/* Image */}
          {image && (
            <div className="relative w-full h-[185px] overflow-hidden">
              <Image src={image} alt={title} className="w-full h-full object-cover" width={100} height={100} />
            </div>
          )}

          {/* Boutons de navigation */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-10 h-10 bg-white/70 rounded-full flex items-center justify-center shadow-[0px_5px_10px_0px_rgba(217,208,195,0.5),inset_0px_1px_0px_0px_rgba(250,249,245,0.8)] backdrop-blur-[20px]"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 1L13 13M1 13L13 1" stroke="#65413D" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <button
            onClick={onClose}
            className="absolute top-5 left-5 w-10 h-10 bg-white/70 rounded-full flex items-center justify-center shadow-[0px_5px_10px_0px_rgba(217,208,195,0.5),inset_0px_1px_0px_0px_rgba(250,249,245,0.8)] backdrop-blur-[20px]"
          >
            <svg width="15" height="1" viewBox="0 0 15 1" fill="none">
              <path d="M15 0.5H0" stroke="#65413D" strokeWidth="2"/>
            </svg>
          </button>

          {/* Contenu scrollable */}
          <div className="h-[calc(100%-185px-150px)] overflow-y-auto px-5">
            {/* Titre et description */}
            <div className="mt-5">
              <h2 className="text-[20px] font-semibold text-bell-primary leading-[1.2] mb-2">
                {title}
              </h2>
              {description && (
                <p className="text-[13px] font-light text-[rgba(101,65,61,0.7)] leading-[1.23]">
                  {description}
                </p>
              )}
            </div>

            {/* Sections d'options */}
            {sections.map((section, index) => (
              <div key={index} className="mt-8">
                <div className="flex justify-between items-baseline mb-4">
                  <h3 className="text-[16px] font-semibold text-bell-primary leading-[1.5]">
                    {section.title}
                  </h3>
                  {section.required && (
                    <span className="text-[12px] font-light text-[rgba(101,65,61,0.3)]">
                      Obligatoire
                    </span>
                  )}
                </div>

                <div className="space-y-3">
                  {section.options.map((option) => (
                    <div key={option.id}>
                      <label className="flex items-center justify-between py-3 cursor-pointer">
                        <span className="text-[16px] font-light text-[rgba(101,65,61,0.7)]">
                          {option.name}
                        </span>
                        <div className="relative">
                          <input
                            type="radio"
                            name={section.title}
                            value={option.id}
                            checked={selections[section.title] === option.id}
                            onChange={() => handleSelection(section.title, option.id)}
                            className="sr-only"
                          />
                          <div className={`w-[14px] h-[14px] rounded-full border ${
                            selections[section.title] === option.id
                              ? 'border-bell-primary bg-bell-primary'
                              : 'border-[rgba(101,65,61,0.3)]'
                          }`} />
                        </div>
                      </label>
                      {index < section.options.length - 1 && (
                        <div className="h-[0.5px] bg-[rgba(101,65,61,0.3)]" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Footer avec boutons */}
          <div className="absolute bottom-0 left-0 right-0 h-[150px] bg-[rgba(250,249,245,0.1)] backdrop-blur-[20px] shadow-[0px_0px_10px_0px_rgba(217,208,195,0.5),inset_0px_1px_0px_0px_rgba(250,249,245,0.8)]">
            <div className="flex items-center justify-between p-3">
              <div className="flex-1 flex justify-center">
                <AddButton 
                  initialQuantity={quantity}
                  onQuantityChange={setQuantity}
                />
              </div>
            </div>
            <div className="px-5 pb-5">
              <button
                onClick={handleAdd}
                disabled={!isValid}
                className={`w-full h-[50px] rounded-[25px] font-semibold text-[16px] leading-[1.5] tracking-[-1.5625%] transition-all ${
                  isValid
                    ? 'bg-[#F2930D] text-[#FAF9F5] hover:bg-[#E08A0C]'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Ajouter pour {price}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

ItemPopup.displayName = 'ItemPopup';

export { ItemPopup }; 