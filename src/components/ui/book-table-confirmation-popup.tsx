import React from 'react';

interface BookingData {
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

interface BookTableConfirmationPopupProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: BookingData;
  onConfirm: () => void;
}

export function BookTableConfirmationPopup({
  isOpen,
  onClose,
  bookingData,
  onConfirm
}: BookTableConfirmationPopupProps) {
  if (!isOpen) return null;

  // Formatage de la date pour l'affichage
  const formatDate = (dateStr: string) => {
    const day = dateStr.split('/')[0];
    return `Mercredi ${day} Janvier à ${bookingData.time}`;
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

        {/* Image */}
        <div className="px-5">
          <div className="w-full h-48 bg-gray-100 rounded-2xl mb-5 overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?fit=crop&w=400&h=300"
              alt="Restaurant"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-8">
          <h2 className="text-[#65413D] font-semibold text-xl mb-6">
            Votre reservation
          </h2>

          {/* Détails de la réservation */}
          <div className="mb-6">
            <p className="text-[rgba(101,65,61,0.7)] text-sm mb-4">
              {formatDate(bookingData.date)}
            </p>
            <p className="text-[#65413D] text-base">
              Table pour {bookingData.guests} personne{bookingData.guests > 1 ? 's' : ''}
            </p>
          </div>

          {/* Séparateur */}
          <div className="border-t border-[rgba(101,65,61,0.3)] mb-6"></div>

          {/* Informations restaurant */}
          <div className="mb-6">
            <h3 className="text-[#65413D] font-semibold text-sm mb-2">
              Restaurant de l&apos;Hôtel Oceania Paris
            </h3>
            <p className="text-[#65413D] font-semibold text-sm mb-1">
              21:30 le 07/01/2025
            </p>
            <div className="text-[#65413D] font-semibold text-sm">
              <p>Contact</p>
              <p>+33 7 60 09 56 17</p>
              <p>restaurant@oceania-paris.fr</p>
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-[rgba(101,65,61,0.3)] mb-6"></div>

          {/* Informations client */}
          <div className="mb-6">
            <h3 className="text-[#65413D] font-semibold text-sm mb-2">
              M. Maël Mountassir
            </h3>
            <p className="text-[#65413D] font-semibold text-sm">
              +33 7 60 09 56 17
            </p>
            <p className="text-[#65413D] font-semibold text-sm">
              mael.mountassir@gmail.com
            </p>
          </div>

          {/* Demandes spéciales */}
          <div className="mb-8">
            <div className="bg-white/75 rounded-2xl p-4 border border-gray-100">
              <h3 className="text-[rgba(101,65,61,0.7)] text-sm mb-2">
                Pour toute requête spéciale ou allergie alimentaire:
              </h3>
              <textarea
                className="w-full bg-transparent text-[#65413D] text-sm resize-none focus:outline-none"
                rows={3}
                placeholder="Ajouter des informations..."
              />
            </div>
          </div>

          {/* Bouton modifier */}
          <div className="text-right mb-4">
            <button 
              onClick={onClose}
              className="text-[#F2930D] text-sm underline"
            >
              Modifier
            </button>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="sticky bottom-0 bg-[#FAF9F5] p-5 border-t border-gray-200/30">
          <button
            onClick={onConfirm}
            className="w-full bg-[#F2930D] text-white py-4 rounded-full font-semibold text-center"
          >
            Confirmer la réservation
          </button>
        </div>
      </div>
    </div>
  );
} 