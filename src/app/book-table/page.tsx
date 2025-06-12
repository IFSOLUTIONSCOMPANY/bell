"use client";
import { useState } from "react";
import {
  Header,
  ChatInput,
  StatusInfoBar
} from "@/components/mobile";
import { 
  BookTableServicePopup, 
  BookTableConfirmationPopup, 
  BookTableConfirmation 
} from '@/components/ui';

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

export default function BookTablePage() {
  const [showServicePopup, setShowServicePopup] = useState(true);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showFinalConfirmation, setShowFinalConfirmation] = useState(false);
  const [bookingData, setBookingData] = useState<BookingData | null>(null);

  const timeSlots: TimeSlot[] = [
    { id: '10:00', time: '10:00', available: true },
    { id: '10:30', time: '10:30', available: true },
    { id: '11:30', time: '11:30', available: true },
    { id: '12:00', time: '12:00', available: true },
    { id: '12:30', time: '12:30', available: false }, // Sélectionné dans le design
    { id: '13:00', time: '13:00', available: true },
  ];

  const handleServiceSelection = (data: BookingData) => {
    setBookingData(data);
    setShowServicePopup(false);
    setShowConfirmationPopup(true);
  };

  const handleConfirmBooking = () => {
    setShowConfirmationPopup(false);
    setShowFinalConfirmation(true);
  };

  const handleBackToHome = () => {
    window.history.back();
  };

  return (
    <div className="w-full max-w-[390px] mx-auto bg-[#EFEDE4] min-h-screen relative">
      {/* Header */}
      <Header className="pt-2" />
      <StatusInfoBar roomNumber="1023" hotelName="Oceania Porte de Versailles" />

      {/* Main Content */}
      <div className="flex-1 pt-20">
        {/* Background content */}
        <div className="px-5 py-6 space-y-6">
          <div className="text-center">
            <h1 className="text-2xl font-['Jubilat'] text-bell-primary mb-2">
              Réservation de table
            </h1>
            <p className="text-bell-gray-700/70 text-sm">
              Réservez une table dans notre restaurant gastronomique
            </p>
          </div>
        </div>
      </div>

      {/* Service Selection Popup */}
      {showServicePopup && (
        <BookTableServicePopup
          isOpen={showServicePopup}
          onClose={handleBackToHome}
          timeSlots={timeSlots}
          onBooking={handleServiceSelection}
        />
      )}

      {/* Confirmation Popup */}
      {showConfirmationPopup && bookingData && (
        <BookTableConfirmationPopup
          isOpen={showConfirmationPopup}
          onClose={() => {
            setShowConfirmationPopup(false);
            setShowServicePopup(true);
          }}
          bookingData={bookingData}
          onConfirm={handleConfirmBooking}
        />
      )}

      {/* Final Confirmation */}
      {showFinalConfirmation && bookingData && (
        <BookTableConfirmation
          isOpen={showFinalConfirmation}
          bookingData={bookingData}
        />
      )}

      {/* Chat Input */}
      <ChatInput 
        className="absolute bottom-4 left-4 right-4"
        onFocus={() => {}}
      />
    </div>
  );
} 