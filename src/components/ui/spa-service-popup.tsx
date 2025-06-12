import React, { useState } from 'react';

interface SpaServiceSection {
  title: string;
  required?: boolean;
  options: Array<{
    id: string;
    name: string;
    price?: number;
  }>;
}

interface SpaServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  basePrice: string;
  image: string;
  sections?: SpaServiceSection[];
  onAdd: () => void;
}

export function SpaServicePopup({
  isOpen,
  onClose,
  title,
  description,
  basePrice,
  image,
  sections = [],
  onAdd
}: SpaServicePopupProps) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({});
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  if (!isOpen) return null;

  const handleOptionSelect = (sectionTitle: string, optionId: string) => {
    setSelectedOptions(prev => ({
      ...prev,
      [sectionTitle]: optionId
    }));
  };

  const timeSlots = [
    '10:00', '10:30', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30'
  ];

  const dates = [
    { id: 'today', label: 'Jeudi 22 mai' },
    { id: 'tomorrow', label: 'Vendredi 30 mai' }
  ];

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
            
            <button className="w-10 h-10 bg-white/70 rounded-full flex items-center justify-center shadow-sm">
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                <path d="M8 2L2 8L8 14" stroke="#65413D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="px-5">
          <div className="w-full h-48 bg-gray-100 rounded-2xl mb-5 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-8">
          <h2 className="text-bell-primary font-semibold text-xl mb-3">
            {title}
          </h2>
          
          {description && (
            <p className="text-bell-gray-700/70 text-sm mb-4">
              {description}
            </p>
          )}

          {/* Sections dynamiques */}
          {sections.map((section, index) => (
            <div key={index} className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-bell-primary font-semibold text-base">
                  {section.title}
                </h3>
                {section.required && (
                  <span className="text-bell-gray-700/30 text-xs">
                    Obligatoire
                  </span>
                )}
              </div>
              
              <div className="space-y-2">
                {section.options.map((option) => (
                  <div
                    key={option.id}
                    className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedOptions[section.title] === option.id
                        ? 'border-bell-primary bg-bell-primary/5'
                        : 'border-gray-200'
                    }`}
                    onClick={() => handleOptionSelect(section.title, option.id)}
                  >
                    <span className="text-bell-gray-700 text-sm">
                      {option.name}
                    </span>
                    <div className={`w-4 h-4 rounded-full border-2 ${
                      selectedOptions[section.title] === option.id
                        ? 'border-bell-primary bg-bell-primary'
                        : 'border-gray-300'
                    }`} />
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Sélection de l'horaire */}
          <div className="mb-6">
            <h3 className="text-bell-primary font-semibold text-base mb-3">
              Sélectionnez l&apos;horaire :
            </h3>
            <span className="text-bell-gray-700/30 text-xs mb-3 block">
              Obligatoire
            </span>
            
            {/* Dates */}
            <div className="mb-4">
              {dates.map((date) => (
                <div key={date.id} className="mb-2">
                  <button
                    onClick={() => setSelectedDate(date.id)}
                    className={`text-bell-primary font-semibold text-sm ${
                      selectedDate === date.id ? 'underline' : ''
                    }`}
                  >
                    {date.label}
                  </button>
                </div>
              ))}
            </div>

            {/* Horaires */}
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 border rounded-lg text-sm transition-colors ${
                    selectedTime === time
                      ? 'bg-bell-primary text-white border-bell-primary'
                      : 'border-gray-200 text-bell-gray-700'
                  }`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="sticky bottom-0 bg-[#FAF9F5] p-5 border-t border-gray-200/30">
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm">
              <button className="w-6 h-6 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1V13M1 7H13" stroke="#F2930D" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <span className="mx-4 text-bell-primary font-semibold">1</span>
              <button className="w-6 h-6 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 7H13" stroke="#F2930D" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
            </div>
            
            <button
              onClick={onAdd}
              className="flex-1 bg-bell-orange text-white py-4 rounded-full font-semibold text-center"
            >
              Ajouter pour {basePrice}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 