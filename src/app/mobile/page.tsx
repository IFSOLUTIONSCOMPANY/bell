"use client";
import { useState } from "react";

import {
  Header,
  WelcomeView,
  ConversationView,
  ChatInput,
  ServiceTags,
  StatusInfoBar
} from "@/components/mobile";
import { ServiceCard } from '@/components/ui/service-card';
import { ItemPopup } from '@/components/ui/item-popup';
import { OrderConfirmationPopup } from '@/components/ui/order-confirmation-popup';
import { OrderPaymentPopup } from '@/components/ui/order-payment-popup';

// Type pour les items du menu
interface MenuItem {
  id: string;
  title: string;
  description?: string;
  price: string;
  priceValue: number;
  image: string;
  variant: 'promo' | 'popular' | 'standard';
  sections?: Array<{
    title: string;
    required?: boolean;
    options: Array<{
      id: string;
      name: string;
    }>;
  }>;
}

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

// Données de simulation pour le menu
const menuItems: MenuItem[] = [
  {
    id: 'brunch',
    title: 'Formule Brunch',
    description: 'Une viennoiserie, un jus, une boisson chaude et une corbeille de fruits.',
    price: '36,50 €',
    priceValue: 36.50,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
    variant: 'promo' as const,
    sections: [
      {
        title: "Sélectionnez votre viennoiserie :",
        required: true,
        options: [
          { id: "croissant", name: "Croissant" },
          { id: "pain-chocolat", name: "Pain au chocolat" },
          { id: "chausson", name: "Chausson aux pommes" }
        ]
      },
      {
        title: "Sélectionnez votre jus :",
        required: true,
        options: [
          { id: "orange", name: "Jus d'Orange" },
          { id: "pomme", name: "Jus de Pomme" }
        ]
      },
      {
        title: "Sélectionnez votre boisson chaude :",
        required: true,
        options: [
          { id: "cafe", name: "Café" },
          { id: "the", name: "Thé" }
        ]
      }
    ]
  },
  {
    id: 'cesar',
    title: 'Salade César du Patio',
    price: '18,90 €',
    priceValue: 18.90,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fit=crop',
    variant: 'popular' as const
  },
  {
    id: 'oeufs',
    title: 'Œufs mayonnaise',
    price: '5,00 €',
    priceValue: 5.00,
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?fit=crop',
    variant: 'popular' as const
  },
  {
    id: 'ravioles',
    title: 'Ravioles au choix',
    description: 'Bœuf braisé | Ricotta - Epinard | Bleu - noix | Saumon - Encre de seiche',
    price: '18,90 €',
    priceValue: 18.90,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?fit=crop',
    variant: 'standard' as const
  }
];

export default function MobilePage() {
  const [showMenu, setShowMenu] = useState(false);
  const [showConversation, setShowConversation] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [showItemPopup, setShowItemPopup] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [showOrderPayment, setShowOrderPayment] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Calculer les totaux
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 10.00;
  const serviceFee = subtotal * 0.01; // 1% de frais de service
  const total = subtotal + deliveryFee + serviceFee;

  // Gérer la sélection du service
  const handleServiceSelect = (service: string) => {
    if (service === 'room-service') {
      setShowMenu(true);
    } else {
      // Pour les autres services, on pourrait afficher d'autres vues
      alert(`Service "${service}" sélectionné - À implémenter`);
    }
  };

  // Gérer le focus sur le chat
  const handleChatFocus = () => {
    setShowConversation(true);
  };

  // Gérer le retour à l'accueil
  const handleBackToHome = () => {
    setShowMenu(false);
    setShowConversation(false);
  };

  // Gérer l'ajout au panier
  const handleQuantityChange = (itemId: string, itemTitle: string, itemPrice: number, quantity: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === itemId);
      
      if (quantity === 0) {
        // Retirer l'article du panier
        return prevCart.filter(item => item.id !== itemId);
      } else if (existingItem) {
        // Mettre à jour la quantité
        return prevCart.map(item => 
          item.id === itemId ? { ...item, quantity } : item
        );
      } else {
        // Ajouter au panier
        return [...prevCart, { id: itemId, name: itemTitle, quantity, price: itemPrice }];
      }
    });
  };

  // Gérer la sélection d'un article avec options
  const handleItemClick = (item: MenuItem) => {
    if (item.sections) {
      setSelectedItem(item);
      setShowItemPopup(true);
    }
  };

  // Gérer l'ajout d'un article avec options
  const handleItemWithOptionsAdd = () => {
    if (selectedItem) {
      handleQuantityChange(selectedItem.id, selectedItem.title, selectedItem.priceValue, 1);
      setShowItemPopup(false);
      setSelectedItem(null);
    }
  };

  // Gérer la confirmation de commande
  const handleCheckout = () => {
    if (cart.length > 0) {
      setShowOrderConfirmation(true);
    }
  };

  // Gérer le paiement
  const handleConfirmOrder = () => {
    setShowOrderConfirmation(false);
    setShowOrderPayment(true);
  };

  // Gérer la finalisation du paiement
  const handlePayment = () => {
    // Simuler le paiement réussi
    alert('Commande confirmée ! Votre repas sera livré dans 30-45 minutes.');
    
    // Réinitialiser l'état
    setShowOrderPayment(false);
    setCart([]);
    setShowMenu(false);
  };

  return (
    <main className="mobile-only-container relative min-h-screen overflow-hidden bg-[#F2F1EA]">
      {/* Background avec effet de gradient et flou léger */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/mesh-gradient.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-[rgba(239,237,228,0.9)] backdrop-blur-[270px]"></div>
      </div>

      {/* Avertissement sur desktop */}
      <div className="desktop-only-container fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F2F1EA] text-[#65413D] p-6">
        <div className="max-w-md text-center">
          <h2 className="text-2xl font-[&apos;Jubilat&apos;] mb-4">Vue Mobile Uniquement</h2>
          <p className="mb-6">Cette page est conçue pour être affichée uniquement sur les appareils mobiles. Veuillez réduire la taille de votre navigateur ou accéder à cette page depuis un appareil mobile.</p>
          <div className="border-2 border-[#65413D] rounded-md p-4">
            <p className="text-sm">Largeur d&apos;écran recommandée : moins de 768px</p>
          </div>
        </div>
      </div>

      {/* Contenu principal avec z-index approprié */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Header toujours visible */}
        <Header className="pt-2" />
        <StatusInfoBar />

        {/* Zone de contenu scrollable */}
        <div className="flex-1 overflow-y-auto pb-[100px]">
          {/* Vue d'accueil par défaut */}
          {!showMenu && !showConversation && (
            <div className="px-4 py-4">
              <WelcomeView />
              <ServiceTags className="mt-8" onServiceSelect={handleServiceSelect} />
            </div>
          )}

          {/* Menu du Room Service */}
          {showMenu && !showConversation && (
            <div className="px-4 py-4">
              {/* Bouton retour */}
              <button
                onClick={handleBackToHome}
                className="mb-4 flex items-center text-bell-primary"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-2">
                  <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Retour
              </button>

              {/* Menu du Room Service */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-bell-primary mb-2">
                  Menu Room Service
                </h2>
                <p className="text-sm text-gray-600">
                  Commandez directement depuis votre chambre
                </p>
              </div>

              {/* Articles du menu */}
              <div className="space-y-4">
                {menuItems.map((item) => (
                  <div key={item.id} onClick={() => handleItemClick(item)}>
                    <ServiceCard
                      title={item.title}
                      description={item.description}
                      price={item.price}
                      image={item.image}
                      variant={item.variant}
                      onQuantityChange={(quantity) => 
                        !item.sections && handleQuantityChange(item.id, item.title, item.priceValue, quantity)
                      }
                    />
                  </div>
                ))}
              </div>

              {/* Bouton de validation du panier */}
              {cart.length > 0 && (
                <div className="fixed bottom-[100px] left-4 right-4 z-30">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-bell-primary text-white py-4 rounded-2xl font-semibold shadow-lg flex items-center justify-between px-6"
                  >
                    <span>Voir le panier ({cart.reduce((sum, item) => sum + item.quantity, 0)} articles)</span>
                    <span>{subtotal.toFixed(2)} €</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Vue conversation */}
          {showConversation && (
            <div className="relative">
              {/* Bouton pour fermer la conversation */}
              <div className="sticky top-0 z-10 bg-[#F2F1EA] px-4 py-2 border-b border-gray-200">
                <button
                  onClick={() => setShowConversation(false)}
                  className="flex items-center text-bell-primary"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-2">
                    <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Retour aux services
                </button>
              </div>
              <ConversationView />
            </div>
          )}
        </div>

        {/* ChatInput toujours visible en bas */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <ChatInput onFocus={handleChatFocus} />
        </div>
      </div>

      {/* Popups */}
      {selectedItem && (
        <ItemPopup
          isOpen={showItemPopup}
          onClose={() => {
            setShowItemPopup(false);
            setSelectedItem(null);
          }}
          title={selectedItem.title}
          description={selectedItem.description}
          price={selectedItem.price}
          image={selectedItem.image}
          sections={selectedItem.sections}
          onAdd={handleItemWithOptionsAdd}
        />
      )}

      <OrderConfirmationPopup
        isOpen={showOrderConfirmation}
        onClose={() => setShowOrderConfirmation(false)}
        onBack={() => setShowOrderConfirmation(false)}
        items={cart}
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        serviceFee={serviceFee}
        total={total}
        suggestedItems={[
          { id: "suggest1", title: "Dessert du jour", price: "8,90 €", image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?fit=crop" },
          { id: "suggest2", title: "Café gourmand", price: "12,50 €", image: "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?fit=crop" }
        ]}
        onConfirm={handleConfirmOrder}
      />

      <OrderPaymentPopup
        isOpen={showOrderPayment}
        onClose={() => setShowOrderPayment(false)}
        onBack={() => {
          setShowOrderPayment(false);
          setShowOrderConfirmation(true);
        }}
        subtotal={subtotal}
        deliveryFee={deliveryFee}
        serviceFee={serviceFee}
        total={total}
        deliveryInfo={{
          room: "Room #1023",
          hotel: "Hôtel Oceania Paris",
          guestName: "Mr. Maël Mountassir",
          phone: "+33 7 60 09 56 17"
        }}
        onPay={handlePayment}
      />
    </main>
  );
}
