import React, { useState } from "react";

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface BookingData {
  date: string;
  time: string;
  guests: number;
  specialRequests?: string;
}

interface BookTableServicePopupProps {
  isOpen: boolean;
  onClose: () => void;
  timeSlots: TimeSlot[];
  onBooking: (data: BookingData) => void;
}

export function BookTableServicePopup({
  isOpen,
  onClose,
  timeSlots,
  onBooking,
}: BookTableServicePopupProps) {
  const [selectedDate, setSelectedDate] = useState("7");
  const [selectedTime, setSelectedTime] = useState("12:30");
  const [guests, setGuests] = useState(1);

  const handleConfirm = () => {
    onBooking({
      date: `${selectedDate.padStart(2, "0")}/01/2025`,
      time: selectedTime,
      guests,
    });
  };

  if (!isOpen) return null;

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
          <div className="absolute inset-0 flex items-center justify-between px-5 pt-5">
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
          <h2 className="text-[#65413D] font-semibold text-xl mt-6 mb-2">
            Reserver une table
          </h2>
          <p className="text-sm text-[rgba(101,65,61,0.7)] mb-6 leading-snug">
            Merci de bien vouloir préciser l&apos;heure de votre réservation et
            le nombre de convives à votre table.
          </p>

          {/* Nombre de personnes */}
          <div className="mb-6">
            <h3 className="text-[#65413D] font-semibold text-base mb-4">
              Nombre de personnes
            </h3>
            <div className="flex justify-center">
              <div className="flex items-center bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                <button
                  onClick={() => setGuests(Math.max(1, guests - 1))}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                    <path
                      d="M1 1H9"
                      stroke="#F2930D"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <span className="mx-6 text-[#65413D] font-semibold text-lg">
                  {guests}
                </span>
                <button
                  onClick={() => setGuests(Math.min(10, guests + 1))}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path
                      d="M5 1V9M1 5H9"
                      stroke="#F2930D"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Calendrier */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[#65413D] text-sm font-medium">
                January 2025
              </span>
              <div className="flex gap-2">
                <button
                  disabled
                  className="w-6 h-6 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M4 2L2 4L4 6"
                      stroke="#D4D4D4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <button
                  disabled
                  className="w-6 h-6 bg-white rounded-lg border border-gray-200 flex items-center justify-center"
                >
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path
                      d="M8 6L10 4L8 2"
                      stroke="#B3B3B3"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((d) => (
                <div
                  key={d}
                  className="text-center text-xs text-[rgba(101,65,61,0.4)]"
                >
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {["29", "30", "31"].map((d) => (
                <div
                  key={d}
                  className="w-8 h-8 rounded-sm text-xs bg-[#D9D9D9] text-[rgba(101,65,61,0.2)] flex items-center justify-center"
                >
                  {d}
                </div>
              ))}
              {Array.from({ length: 31 }, (_, i) => {
                const day = (i + 1).toString();
                const isSelected = selectedDate === day;
                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(day)}
                    className={`w-8 h-8 text-xs rounded-sm flex items-center justify-center ${
                      isSelected
                        ? "bg-[#F2930D] text-white border border-[#F2930D]"
                        : "bg-[#D9D9D9] text-[#65413D]"
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Heures disponibles */}
          <div className="mb-6">
            <div className="grid grid-cols-3 gap-2">
              {timeSlots.map((slot) => {
                const isSelected = slot.time === selectedTime;
                return (
                  <button
                    key={slot.id}
                    disabled={!slot.available}
                    onClick={() => setSelectedTime(slot.time)}
                    className={`text-sm py-2 px-3 rounded-xl border text-center ${
                      isSelected
                        ? "bg-[#65413D] text-white border-[#65413D]"
                        : slot.available
                        ? "text-[#65413D] border-[rgba(101,65,61,0.3)]"
                        : "text-gray-400 border-gray-200 bg-gray-50 cursor-not-allowed"
                    }`}
                  >
                    {slot.time}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-[#FAF9F5] p-5 border-t border-gray-200/30">
          <button
            onClick={handleConfirm}
            className="w-full bg-[#F2930D] text-white py-4 rounded-full font-semibold"
          >
            Finaliser la réservation
          </button>
        </div>
      </div>
    </div>
  );
}
