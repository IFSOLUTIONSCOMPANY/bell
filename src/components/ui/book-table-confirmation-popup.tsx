import React, { useState } from "react";

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
  onConfirm,
}: BookTableConfirmationPopupProps) {
  const [notes, setNotes] = useState("");

  if (!isOpen) return null;

  const formatDate = (dateStr: string) => {
    const day = dateStr.split("/")[0];
    return `Mercredi ${day} Janvier à ${bookingData.time}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-full max-w-[390px] bg-[#FAF9F5] rounded-t-[50px] max-h-[90vh] overflow-y-auto shadow-lg">
        {/* Image + Header Buttons */}
        <div className="relative w-full h-[170px] overflow-hidden rounded-t-[50px]">
          <img
            src="/images/book-table/book-table.png"
            alt="restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-between px-5 -top-20">
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
          </div>
        </div>

        {/* Content */}
        <div className="px-5 pb-8">
          {/* Titre */}
          <h2 className="text-[#65413D] font-semibold text-xl mt-6 mb-4">
            Votre reservation
          </h2>

          <div className="border-t border-[rgba(101,65,61,0.3)] mb-4"></div>

          <p className="text-[#65413D] text-base mb-2">
            Table pour {bookingData.guests} personne
            {bookingData.guests > 1 ? "s" : ""}
          </p>
          {/* Date + Nb de personnes */}
          <p className="text-[rgba(101,65,61,0.7)] text-sm mb-4">
            {formatDate(bookingData.date)}
          </p>

          {/* Divider */}
          <div className="border-t border-[rgba(101,65,61,0.3)] mb-6"></div>

          {/* Infos client avec bouton Modifier */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-[#65413D] text-sm font-semibold">
                M. Maël Mountassir
              </p>
              <p className="text-[#65413D] text-sm font-semibold">
                +33 7 60 09 56 17
              </p>
              <p className="text-[#65413D] text-sm font-semibold">
                mael.mountassir@gmail.com
              </p>
            </div>
            <button className="text-[#F2930D] text-sm font-medium mt-1">
              Modifier
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-[rgba(101,65,61,0.3)] mb-6"></div>

          {/* Infos restaurant */}
          <div className="mb-6">
            <p className="text-[#65413D] text-sm font-semibold mb-1">
              Restaurant de l&apos;Hôtel Oceania Paris
            </p>
            <p className="text-[#65413D] text-sm font-semibold mb-1">
              {bookingData.time} le {bookingData.date}
            </p>
            <p className="text-[#65413D] text-sm font-light">Contact</p>
            <p className="text-[#65413D] text-sm font-light">
              +33 7 60 09 56 17
            </p>
            <p className="text-[#65413D] text-sm font-light">
              restaurant@oceania-paris.fr
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-[rgba(101,65,61,0.3)] mb-6"></div>

          {/* Zone texte demande spéciale */}
          <div className="bg-white/75 rounded-2xl p-4 border border-gray-100 mb-10">
            <h3 className="text-[rgba(101,65,61,0.7)] text-sm mb-2">
              Pour toute requête spéciale ou allergie alimentaire:
            </h3>
            <textarea
              className="w-full bg-transparent text-[#65413D] text-sm resize-none focus:outline-none"
              rows={3}
              placeholder="Ajouter des informations..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        </div>

        {/* Footer */}
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
