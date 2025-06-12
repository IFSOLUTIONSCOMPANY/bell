"use client";
import { useState } from "react";
import {
  Header,
  ChatInput,
  StatusInfoBar
} from "@/components/mobile";
import { 
  LaundryServicePopup, 
  LaundryConfirmationPopup, 
  LaundryPaymentPopup,
  LaundryConfirmation 
} from '@/components/ui';

interface LaundryItem {
  id: string;
  name: string;
  price: number;
  category: 'hauts' | 'bas' | 'robes-ensembles' | 'sous-vetements-accessoires';
  quantity: number;
}

export default function LaundryPage() {
  const [showServicePopup, setShowServicePopup] = useState(true);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
  const [showPaymentPopup, setShowPaymentPopup] = useState(false);
  const [showFinalConfirmation, setShowFinalConfirmation] = useState(false);
  const [selectedItems, setSelectedItems] = useState<LaundryItem[]>([]);
  const [ironingService, setIroningService] = useState(false);

  const handleServiceSelection = (items: LaundryItem[]) => {
    setSelectedItems(items);
    setShowServicePopup(false);
    setShowConfirmationPopup(true);
  };

  const handleConfirmOrder = (withIroning: boolean) => {
    setIroningService(withIroning);
    setShowConfirmationPopup(false);
    setShowPaymentPopup(true);
  };

  const handlePaymentConfirm = () => {
    setShowPaymentPopup(false);
    setShowFinalConfirmation(true);
  };

  const handleBackToHome = () => {
    window.history.back();
  };

  // Calculs des prix
  const subtotal = selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const ironingFee = ironingService ? 10.00 : 0;
  const serviceFee = 1.00; // Frais de service fixes
  const total = subtotal + ironingFee + serviceFee;

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
              Service de Blanchisserie
            </h1>
            <p className="text-bell-gray-700/70 text-sm">
              Confiez-nous vos vêtements pour un service de qualité
            </p>
          </div>
        </div>
      </div>

      {/* Service Selection Popup */}
      {showServicePopup && (
        <LaundryServicePopup
          isOpen={showServicePopup}
          onClose={handleBackToHome}
          onSelection={handleServiceSelection}
        />
      )}

      {/* Confirmation Popup */}
      {showConfirmationPopup && (
        <LaundryConfirmationPopup
          isOpen={showConfirmationPopup}
          onClose={() => {
            setShowConfirmationPopup(false);
            setShowServicePopup(true);
          }}
          selectedItems={selectedItems}
          subtotal={subtotal}
          onConfirm={handleConfirmOrder}
        />
      )}

      {/* Payment Popup */}
      {showPaymentPopup && (
        <LaundryPaymentPopup
          isOpen={showPaymentPopup}
          onClose={() => {
            setShowPaymentPopup(false);
            setShowConfirmationPopup(true);
          }}
          subtotal={subtotal + ironingFee}
          serviceFee={serviceFee}
          total={total}
          onConfirm={handlePaymentConfirm}
        />
      )}

      {/* Final Confirmation */}
      {showFinalConfirmation && (
        <LaundryConfirmation
          isOpen={showFinalConfirmation}
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