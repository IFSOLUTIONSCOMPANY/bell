import React, { useState } from 'react';

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
  onBooking
}: BookTableServicePopupProps) {
  const [selectedDate, setSelectedDate] = useState('7'); // 7 janvier sélectionné par défaut
  const [selectedTime, setSelectedTime] = useState('12:30'); // Heure sélectionnée dans le design
  const [guests, setGuests] = useState(1);

  if (!isOpen) return null;

  const handleConfirm = () => {
    const bookingData: BookingData = {
      date: `${selectedDate.padStart(2, '0')}/01/2025`, // Date formatée avec selectedDate
      time: selectedTime,
      guests: guests,
    };
    onBooking(bookingData);
  };

  const increaseGuests = () => setGuests(prev => Math.min(prev + 1, 10));
  const decreaseGuests = () => setGuests(prev => Math.max(prev - 1, 1));

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
          <h2 className="text-[#65413D] font-semibold text-xl mb-3">
            Reserver une table
          </h2>
          
          <p className="text-[rgba(101,65,61,0.7)] text-sm mb-6">
            Merci de bien vouloir préciser l&apos;heure de votre réservation et le nombre de convives à votre table.
          </p>

          {/* Calendrier */}
          <div className="mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              {/* En-tête du calendrier */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <button className="w-6 h-6 bg-white border border-[#F6F6F6] rounded-lg flex items-center justify-center shadow-sm">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M4 2L2 4L4 6" stroke="#D4D4D4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <span className="text-[#65413D] font-medium text-sm">January 2025</span>
                  <button className="w-6 h-6 bg-white border border-[#F6F6F6] rounded-lg flex items-center justify-center shadow-sm">
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                      <path d="M8 6L10 4L8 2" stroke="#B3B3B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Jours de la semaine */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
                  <div key={day} className="text-center text-xs text-[rgba(101,65,61,0.4)] py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Grille du calendrier */}
              <div className="grid grid-cols-7 gap-1">
                {/* Dates précédentes (grises) */}
                {['29', '30', '31'].map((date) => (
                  <button key={date} className="w-8 h-8 text-xs text-[rgba(101,65,61,0.2)] bg-[#D9D9D9] rounded-sm">
                    {date}
                  </button>
                ))}
                
                {/* Dates du mois courant */}
                {Array.from({ length: 31 }, (_, i) => {
                  const date = i + 1;
                  const isSelected = date === 7; // 7 janvier sélectionné
                  
                  return (
                    <button
                      key={date}
                      onClick={() => setSelectedDate(date.toString())}
                      className={`w-8 h-8 text-xs rounded-sm ${
                        isSelected
                          ? 'bg-[#F2930D] text-white border border-[#F2930D]'
                          : 'bg-[#D9D9D9] text-[#65413D] hover:bg-gray-200'
                      }`}
                    >
                      {date}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Sélection d'horaire */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-2">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot.time;
                
                return (
                  <button
                    key={slot.id}
                    onClick={() => setSelectedTime(slot.time)}
                    disabled={!slot.available}
                    className={`p-3 border rounded-xl text-sm transition-colors ${
                      isSelected
                        ? 'bg-[#65413D] text-white border-[#65413D]'
                        : slot.available
                        ? 'border-[rgba(101,65,61,0.3)] text-[#65413D] hover:border-[#65413D]'
                        : 'border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed'
                    }`}
                  >
                    {slot.time}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Séparateur */}
          <div className="border-t border-[rgba(101,65,61,0.3)] mb-6"></div>

          {/* Nombre de personnes */}
          <div className="mb-8">
            <h3 className="text-[#65413D] font-semibold text-base mb-4">
              Nombre de personnes
            </h3>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center bg-white rounded-xl px-4 py-2 shadow-sm border border-gray-100">
                <button
                  onClick={decreaseGuests}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <svg width="10" height="2" viewBox="0 0 10 2" fill="none">
                    <path d="M1 1H9" stroke="#F2930D" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
                <span className="mx-6 text-[#65413D] font-semibold text-lg">{guests}</span>
                <button
                  onClick={increaseGuests}
                  className="w-8 h-8 flex items-center justify-center"
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1V9M1 5H9" stroke="#F2930D" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="sticky bottom-0 bg-[#FAF9F5] p-5 border-t border-gray-200/30">
          <button
            onClick={handleConfirm}
            className="w-full bg-[#F2930D] text-white py-4 rounded-full font-semibold text-center"
          >
            Finaliser la réservation
          </button>
        </div>
      </div>
    </div>
  );
} 