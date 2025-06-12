"use client";
import { useState } from "react";
import {
  Header,
  ChatInput,
  ServiceTags,
  StatusInfoBar
} from "@/components/mobile";
import { 
  SpaServiceCard, 
  SpaServicePopup, 
  SpaOrderConfirmationPopup, 
  SpaPaymentPopup 
} from '@/components/ui';

// Types pour les services spa
interface SpaService {
  id: string;
  title: string;
  description: string;
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

interface SpaCartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
  appointmentInfo?: {
    date: string;
    time: string;
  };
}

// Données de simulation pour les services spa
const spaServices: SpaService[] = [
  {
    id: 'massage-duo',
    title: 'Massage à deux',
    description: 'Massage relaxant de 60, 90 ou 120 minutes à deux.',
    price: 'à partir de 300 €',
    priceValue: 300,
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?fit=crop&w=400&h=300',
    variant: 'promo' as const,
    sections: [
      {
        title: "Sélectionnez la durée :",
        required: true,
        options: [
          { id: "60min", name: "60 minutes" },
          { id: "90min", name: "90 minutes" },
          { id: "120min", name: "120 minutes" }
        ]
      }
    ]
  },
  {
    id: 'brushing-long',
    title: 'Brushing Long',
    description: '',
    price: '100 €',
    priceValue: 100,
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?fit=crop&w=400&h=300',
    variant: 'popular' as const
  },
  {
    id: 'maquillage',
    title: 'Maquillage',
    description: '',
    price: '180 €',
    priceValue: 180,
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?fit=crop&w=400&h=300',
    variant: 'popular' as const
  },
  {
    id: 'modelage-60',
    title: 'Modelage 60\'',
    description: 'Massage complet du corps pendant soixante minutes.',
    price: '150 €',
    priceValue: 150,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?fit=crop&w=400&h=300',
    variant: 'standard' as const
  },
  {
    id: 'modelage-90',
    title: 'Modelage 90\'',
    description: 'Massage complet du corps pendant quatre-vingt dix minutes.',
    price: '210 €',
    priceValue: 210,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?fit=crop&w=400&h=300',
    variant: 'standard' as const
  },
  {
    id: 'modelage-120',
    title: 'Modelage 120\'',
    description: 'Massage complet du corps pendant cent-vingt minutes.',
    price: '280 €',
    priceValue: 280,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?fit=crop&w=400&h=300',
    variant: 'standard' as const
  },
  {
    id: 'soin-visage',
    title: 'Soin du visage',
    description: '',
    price: '210 €',
    priceValue: 210,
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?fit=crop&w=400&h=300',
    variant: 'standard' as const
  },
  {
    id: 'beaute-mains',
    title: 'Beauté des mains - Vernis classique',
    description: '',
    price: '120 €',
    priceValue: 120,
    image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?fit=crop&w=400&h=300',
    variant: 'standard' as const
  },
  {
    id: 'faux-ongles',
    title: 'Pose de faux ongles',
    description: '',
    price: '240 €',
    priceValue: 240,
    image: 'https://images.unsplash.com/photo-1607779097040-26e80aa78e66?fit=crop&w=400&h=300',
    variant: 'standard' as const
  },
  {
    id: 'brushing-cheveux-longs',
    title: 'Brushing Cheveux Longs',
    description: '',
    price: '110 €',
    priceValue: 110,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?fit=crop&w=400&h=300',
    variant: 'standard' as const
  }
];

export default function SpaPage() {
  const [showSpaMenu, setShowSpaMenu] = useState(false);
  const [selectedService, setSelectedService] = useState<SpaService | null>(null);
  const [showServicePopup, setShowServicePopup] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [cart, setCart] = useState<SpaCartItem[]>([]);

  // Calculer les totaux
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const serviceFee = subtotal * 0.01; // 1% de frais de service
  const total = subtotal + serviceFee;

  // Gérer la sélection du service
  const handleServiceSelect = (service: string) => {
    if (service === 'spa-massage') {
      setShowSpaMenu(true);
    } else {
      alert(`Service "${service}" sélectionné - À implémenter`);
    }
  };

  // Gérer le retour à l'accueil
  const handleBackToHome = () => {
    setShowSpaMenu(false);
  };

  // Gérer la sélection d'un service
  const handleServiceClick = (service: SpaService) => {
    setSelectedService(service);
    setShowServicePopup(true);
  };

  // Gérer l'ajout au panier
  const handleAddToCart = () => {
    if (selectedService) {
      const cartItem: SpaCartItem = {
        id: selectedService.id,
        name: selectedService.title,
        quantity: 1,
        price: selectedService.priceValue,
        appointmentInfo: {
          date: 'Jeudi 22 Mai',
          time: '12:30'
        }
      };

      setCart(prevCart => {
        const existingItem = prevCart.find(item => item.id === selectedService.id);
        if (existingItem) {
          return prevCart.map(item => 
            item.id === selectedService.id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
        return [...prevCart, cartItem];
      });

      setShowServicePopup(false);
      setSelectedService(null);
    }
  };

  // Gérer la confirmation de commande
  const handleCheckout = () => {
    if (cart.length > 0) {
      setShowOrderConfirmation(true);
    }
  };

  // Gérer la validation de la commande
  const handleConfirmOrder = () => {
    setShowOrderConfirmation(false);
    setShowPayment(true);
  };

  // Gérer le paiement
  const handlePayment = () => {
    alert('Réservation confirmée ! Votre rendez-vous spa a été pris en compte.');
    setShowPayment(false);
    setCart([]);
    setShowSpaMenu(false);
  };

  return (
    <main className="w-full max-w-[390px] mx-auto bg-[#F2F1EA] min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('/images/mesh-gradient.png')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-[rgba(239,237,228,0.9)] backdrop-blur-[270px]"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Header toujours visible */}
        <Header className="pt-2" />
        <StatusInfoBar />

        {/* Zone de contenu scrollable */}
        <div className="flex-1 overflow-y-auto pb-[100px]">
          {/* Vue d'accueil par défaut */}
          {!showSpaMenu && (
            <div className="px-4 py-4">
              <div className="mb-8">
                <div className="text-center mb-8">
                  <div className="w-14 h-12 mx-auto mb-4 flex items-center justify-center">
                    <svg width="54" height="47" viewBox="0 0 54 47" fill="none">
                      <path d="M27 0L54 46.5H0L27 0Z" fill="#F2930D" fillOpacity="0.9"/>
                    </svg>
                  </div>
                  <h1 className="text-[#65413D] text-2xl font-['Jubilat'] leading-8 text-center">
                    Quel soin voulez-vous réserver aujourd&apos;hui ?
                  </h1>
                </div>
              </div>
              <ServiceTags className="mt-8" onServiceSelect={handleServiceSelect} />
            </div>
          )}

          {/* Menu des services spa */}
          {showSpaMenu && (
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

              {/* Header */}
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-bell-primary mb-2">
                  Services Spa & Bien-être
                </h2>
                <p className="text-sm text-gray-600">
                  Réservez votre moment de détente
                </p>
              </div>

              {/* Services populaires */}
              <div className="mb-8">
                <h3 className="text-xl font-[&apos;Jubilat&apos;] text-bell-primary mb-4">
                  Populaires
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {spaServices.filter(s => s.variant === 'popular').map((service) => (
                    <div key={service.id} onClick={() => handleServiceClick(service)}>
                      <SpaServiceCard
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        image={service.image}
                        variant={service.variant}
                        onAdd={() => handleServiceClick(service)}
                      />
                    </div>
                  ))}
                </div>

                {/* Service promo */}
                <div className="mb-6">
                  {spaServices.filter(s => s.variant === 'promo').map((service) => (
                    <div key={service.id} onClick={() => handleServiceClick(service)}>
                      <SpaServiceCard
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        image={service.image}
                        variant={service.variant}
                        onAdd={() => handleServiceClick(service)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Massages */}
              <div className="mb-8">
                <h3 className="text-xl font-[&apos;Jubilat&apos;] text-bell-primary mb-4">
                  Massages
                </h3>
                <div className="space-y-4">
                  {spaServices.filter(s => s.id.includes('modelage')).map((service) => (
                    <div key={service.id} onClick={() => handleServiceClick(service)}>
                      <SpaServiceCard
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        image={service.image}
                        variant={service.variant}
                        onAdd={() => handleServiceClick(service)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Soins */}
              <div className="mb-8">
                <h3 className="text-xl font-[&apos;Jubilat&apos;] text-bell-primary mb-4">
                  Soins
                </h3>
                <div className="space-y-4">
                  {spaServices.filter(s => ['soin-visage', 'beaute-mains', 'faux-ongles'].includes(s.id)).map((service) => (
                    <div key={service.id} onClick={() => handleServiceClick(service)}>
                      <SpaServiceCard
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        image={service.image}
                        variant={service.variant}
                        onAdd={() => handleServiceClick(service)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Coiffure */}
              <div className="mb-8">
                <h3 className="text-xl font-[&apos;Jubilat&apos;] text-bell-primary mb-4">
                  Coiffure
                </h3>
                <div className="space-y-4">
                  {spaServices.filter(s => s.id.includes('brushing')).map((service) => (
                    <div key={service.id} onClick={() => handleServiceClick(service)}>
                      <SpaServiceCard
                        title={service.title}
                        description={service.description}
                        price={service.price}
                        image={service.image}
                        variant={service.variant}
                        onAdd={() => handleServiceClick(service)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Bouton de validation du panier */}
              {cart.length > 0 && (
                <div className="fixed bottom-[100px] left-4 right-4 z-30">
                  <button
                    onClick={handleCheckout}
                    className="w-full bg-bell-primary text-white py-4 rounded-2xl font-semibold shadow-lg flex items-center justify-between px-6"
                  >
                    <span>Voir la réservation ({cart.reduce((sum, item) => sum + item.quantity, 0)} services)</span>
                    <span>{subtotal.toFixed(2)} €</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* ChatInput toujours visible en bas */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <ChatInput />
        </div>
      </div>

      {/* Popups */}
      {selectedService && (
        <SpaServicePopup
          isOpen={showServicePopup}
          onClose={() => {
            setShowServicePopup(false);
            setSelectedService(null);
          }}
          title={selectedService.title}
          description={selectedService.description}
          basePrice={selectedService.price}
          image={selectedService.image}
          sections={selectedService.sections}
          onAdd={handleAddToCart}
        />
      )}

      <SpaOrderConfirmationPopup
        isOpen={showOrderConfirmation}
        onClose={() => setShowOrderConfirmation(false)}
        onBack={() => setShowOrderConfirmation(false)}
        items={cart}
        subtotal={subtotal}
        serviceFee={serviceFee}
        total={total}
        onConfirm={handleConfirmOrder}
      />

      <SpaPaymentPopup
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        onBack={() => {
          setShowPayment(false);
          setShowOrderConfirmation(true);
        }}
        subtotal={subtotal}
        serviceFee={serviceFee}
        total={total}
        appointmentInfo={{
          location: "SPA de l'Hôtel Oceania Paris",
          date: "Jeudi 22 Mai",
          time: "12:30",
          contact: "+33 7 60 09 56 17",
          email: "spa@oceania-paris.fr"
        }}
        onPay={handlePayment}
      />
    </main>
  );
} 