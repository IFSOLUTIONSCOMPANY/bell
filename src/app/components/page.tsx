"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ServiceCard } from '@/components/ui/service-card';
import { ItemPopup } from '@/components/ui/item-popup';
import { OrderConfirmationPopup } from '@/components/ui/order-confirmation-popup';
import { OrderPaymentPopup } from '@/components/ui/order-payment-popup';
import {
  Header,
  ServiceTags,
  WelcomeView,
  ChatInput,
  StatusInfoBar,
  SpaServicesView
} from '@/components/mobile';

export default function ComponentsPage() {
  const [activeSection, setActiveSection] = useState('desktop');
  const [showItemPopup, setShowItemPopup] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [showOrderPayment, setShowOrderPayment] = useState(false);
  const [mobileView, setMobileView] = useState('main'); // 'main' ou 'spa'

  return (
    <div className="min-h-screen bg-bell-background">
      <div className="container mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-bell-primary mb-4">
            Documentation des Composants Bell
          </h1>
          <p className="text-bell-gray-600 text-lg">
            Découvrez tous les composants UI disponibles dans l&apos;application Bell
          </p>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mb-8">
          <Button
            variant={activeSection === 'desktop' ? 'primary' : 'outline'}
            onClick={() => setActiveSection('desktop')}
          >
            Composants Desktop
          </Button>
          <Button
            variant={activeSection === 'mobile' ? 'primary' : 'outline'}
            onClick={() => setActiveSection('mobile')}
          >
            Composants Mobile
          </Button>
          <Button
            variant={activeSection === 'popups' ? 'primary' : 'outline'}
            onClick={() => setActiveSection('popups')}
          >
            Popups
          </Button>
        </div>

        {/* Section Desktop */}
        {activeSection === 'desktop' && (
          <div className="space-y-12">
            {/* Boutons */}
            <section>
              <h2 className="text-2xl font-semibold text-bell-primary mb-6">Boutons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Variantes</h3>
                  <div className="space-y-3">
                    <Button variant="primary">Bouton Primary</Button>
                    <Button variant="secondary">Bouton Secondary</Button>
                    <Button variant="outline">Bouton Outline</Button>
                    <Button variant="ghost">Bouton Ghost</Button>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Tailles</h3>
                  <div className="space-y-3">
                    <Button size="sm">Petit</Button>
                    <Button size="md">Moyen</Button>
                    <Button size="lg">Grand</Button>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">États</h3>
                  <div className="space-y-3">
                    <Button disabled>Désactivé</Button>
                    <Button isLoading>Chargement</Button>
                  </div>
                </Card>
              </div>
            </section>

            {/* Badges */}
            <section>
              <h2 className="text-2xl font-semibold text-bell-primary mb-6">Badges</h2>
              <Card className="p-6">
                <div className="flex flex-wrap gap-3">
                  <Badge variant="default">Par défaut</Badge>
                  <Badge variant="outline">Outline</Badge>
                  <Badge variant="room">Chambre</Badge>
                  <Badge variant="service">Service</Badge>
                  <Badge variant="high">Priorité haute</Badge>
                  <Badge variant="medium">Priorité moyenne</Badge>
                  <Badge variant="low">Priorité basse</Badge>
                  <Badge variant="done">Terminé</Badge>
                </div>
              </Card>
            </section>

            {/* Cartes de Service */}
            <section>
              <h2 className="text-2xl font-semibold text-bell-primary mb-6">Cartes de Service</h2>
              <div className="space-y-6">
                {/* Carte Promo */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Carte Promo</h3>
                  <ServiceCard
                    title="Formule Brunch"
                    description="Une viennoiserie, un jus, une boisson chaude et une corbeille de fruits."
                    price="18,90 €"
                    variant="promo"
                    image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop"
                  />
                </div>

                {/* Cartes Populaires */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Cartes Populaires</h3>
                  <div className="flex gap-4 overflow-x-auto pb-4">
                    <ServiceCard
                      title="Salade César du Patio"
                      price="18,90 €"
                      variant="popular"
                      image="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fit=crop"
                    />
                    <ServiceCard
                      title="Œufs mayonnaise"
                      price="5 €"
                      variant="popular"
                      image="https://images.unsplash.com/photo-1482049016688-2d3e1b311543?fit=crop"
                    />
                  </div>
                </div>

                {/* Cartes Standard */}
                <div>
                  <h3 className="text-lg font-medium mb-4">Cartes Standard</h3>
                  <div className="space-y-4">
                    <ServiceCard
                      title="Ravioles au choix"
                      description="Bœuf braisé | Ricotta - Epinard | Bleu - noix | Saumon - Encre de seiche"
                      price="18,90 €"
                      variant="standard"
                      image="https://images.unsplash.com/photo-1551183053-bf91a1d81141?fit=crop"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Boutons d'ajout */}
            <section>
              <h2 className="text-2xl font-semibold text-bell-primary mb-6">Boutons d&apos;ajout</h2>
              <Card className="p-6">
                <h3 className="text-lg font-medium mb-4">Composant à implémenter</h3>
                <p className="text-bell-gray-600 text-sm">
                  Le composant AddButton sera implémenté prochainement pour gérer les quantités dans les cartes de service.
                </p>
              </Card>
            </section>
          </div>
        )}

        {/* Section Mobile */}
        {activeSection === 'mobile' && (
          <div className="space-y-8">
            {/* Navigation mobile */}
            <div className="flex gap-4 justify-center">
              <Button
                variant={mobileView === 'main' ? 'primary' : 'outline'}
                onClick={() => setMobileView('main')}
                size="sm"
              >
                Vue Principale
              </Button>
              <Button
                variant={mobileView === 'spa' ? 'primary' : 'outline'}
                onClick={() => setMobileView('spa')}
                size="sm"
              >
                Services Spa
              </Button>
            </div>

            <div className="max-w-[390px] mx-auto">
              {/* Aperçu Mobile - Vue Principale */}
              {mobileView === 'main' && (
                <Card className="overflow-hidden">
                  <div className="bg-[#F2F1EA] min-h-[844px] relative">
                    {/* Header */}
                    <div className="sticky top-0 z-20">
                      <Header />
                    </div>

                    {/* Status Info Bar */}
                    <div className="px-4 py-2">
                      <StatusInfoBar />
                    </div>

                    {/* Service Tags (juste sous StatusInfoBar) */}
                    <div className="px-4 py-4">
                      <ServiceTags />
                    </div>

                    {/* Welcome View */}
                    <div className="px-4 py-4">
                      <WelcomeView />
                    </div>

                    {/* Chat Input */}
                    <div className="absolute bottom-0 left-0 right-0">
                      <ChatInput />
                    </div>
                  </div>
                </Card>
              )}

              {/* Aperçu Mobile - Services Spa */}
              {mobileView === 'spa' && (
                <Card className="overflow-hidden">
                  <div className="bg-[#F2F1EA] min-h-[844px] relative">
                    {/* Header */}
                    <div className="sticky top-0 z-20">
                      <Header />
                    </div>

                    {/* Vue Services Spa */}
                    <SpaServicesView />
                  </div>
                </Card>
              )}
            </div>
          </div>
        )}

        {/* Section Popups */}
        {activeSection === 'popups' && (
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-bell-primary mb-6">Popups de commande</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Item Popup */}
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Popup Article</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Permet de sélectionner les options d&apos;un article avec plusieurs choix
                  </p>
                  <Button onClick={() => setShowItemPopup(true)}>
                    Voir la démo
                  </Button>
                </Card>

                {/* Order Confirmation */}
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Confirmation de commande</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Affiche le récapitulatif de la commande avec suggestions
                  </p>
                  <Button onClick={() => setShowOrderConfirmation(true)}>
                    Voir la démo
                  </Button>
                </Card>

                {/* Order Payment */}
                <Card className="p-6">
                  <h3 className="text-lg font-medium mb-4">Paiement de commande</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Gère le paiement avec les informations de livraison
                  </p>
                  <Button onClick={() => setShowOrderPayment(true)}>
                    Voir la démo
                  </Button>
                </Card>
              </div>
            </section>
          </div>
        )}

        {/* Section Composants Spa */}
        <section id="composants-spa" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-6 bg-green-500 rounded-md flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L5 5H1L4 8L3 12L7 10L11 12L10 8L13 5H9L7 1Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-bell-primary">Composants Spa</h2>
          </div>
          
          <div className="space-y-8">
            {/* Cartes de Services Spa */}
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200/30">
              <h3 className="text-lg font-semibold text-bell-primary mb-4">Cartes de Services Spa</h3>
              <div className="max-w-sm mx-auto space-y-4">
                <ServiceCard
                  title="Massage à deux"
                  description="Massage relaxant de 60, 90 ou 120 minutes à deux."
                  price="à partir de 300 €"
                  image="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?fit=crop&w=400&h=300"
                  variant="promo"
                  onQuantityChange={() => console.log('Service spa ajouté')}
                />
                
                <ServiceCard
                  title="Soin du visage"
                  description=""
                  price="210 €"
                  image="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?fit=crop&w=400&h=300"
                  variant="popular"
                  onQuantityChange={() => console.log('Service spa ajouté')}
                />
                
                <ServiceCard
                  title="Modelage 60'"
                  description="Massage complet du corps pendant soixante minutes."
                  price="150 €"
                  image="https://images.unsplash.com/photo-1540555700478-4be289fbecef?fit=crop&w=400&h=300"
                  variant="standard"
                  onQuantityChange={() => console.log('Service spa ajouté')}
                />
              </div>
              <p className="text-sm text-bell-gray-700 mt-4 text-center">
                Ces composants sont utilisés pour afficher les services de spa et bien-être dans l&apos;application mobile.
              </p>
            </div>
          </div>
        </section>

        {/* Section Palette de Couleurs */}
        <section id="palette-couleurs" className="mb-12">
          {/* Palette de couleurs */}
        </section>
      </div>

      {/* Popups */}
      <ItemPopup
        isOpen={showItemPopup}
        onClose={() => setShowItemPopup(false)}
        title="Formule Brunch"
        description="Une viennoiserie, un jus, une boisson chaude et une corbeille de fruits."
        price="36,50 €"
        image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop"
        sections={[
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
        ]}
      />

      <OrderConfirmationPopup
        isOpen={showOrderConfirmation}
        onClose={() => setShowOrderConfirmation(false)}
        onBack={() => setShowOrderConfirmation(false)}
        items={[
          { id: "1", name: "Brunch", quantity: 3, price: 36.50 },
          { id: "2", name: "Jus", quantity: 2, price: 5.00 },
          { id: "3", name: "Frite", quantity: 1, price: 5.50 }
        ]}
        subtotal={125.00}
        deliveryFee={10.00}
        serviceFee={1.25}
        total={136.25}
        suggestedItems={[
          { id: "4", title: "Formule Brunch", price: "18,90 €", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?fit=crop" },
          { id: "5", title: "Salade César", price: "18,90 €", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?fit=crop" }
        ]}
        onConfirm={() => {
          setShowOrderConfirmation(false);
          setShowOrderPayment(true);
        }}
      />

      <OrderPaymentPopup
        isOpen={showOrderPayment}
        onClose={() => setShowOrderPayment(false)}
        onBack={() => {
          setShowOrderPayment(false);
          setShowOrderConfirmation(true);
        }}
        subtotal={125.00}
        deliveryFee={10.00}
        serviceFee={1.25}
        total={136.25}
        deliveryInfo={{
          room: "Room #1023",
          hotel: "Hôtel Oceania Paris",
          guestName: "Mr. Maël Mountassir",
          phone: "+33 7 60 09 56 17"
        }}
        onPay={() => {
          alert("Paiement effectué !");
          setShowOrderPayment(false);
        }}
      />
    </div>
  );
}