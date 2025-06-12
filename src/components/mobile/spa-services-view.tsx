import React from 'react';
import { ServiceCard } from '../ui/service-card';

export function SpaServicesView() {
  // Services spa standards d'après le design Figma
  const spaServices = [
    {
      id: 'modelage-60',
      title: 'Modelage 60\'',
      price: '85,00 €',
      description: 'Massage relaxant du corps entier pour une détente complète',
      variant: 'standard' as const
    },
    {
      id: 'modelage-90',
      title: 'Modelage 90\'',
      price: '120,00 €',
      description: 'Massage prolongé pour une relaxation profonde',
      variant: 'standard' as const
    },
    {
      id: 'modelage-120',
      title: 'Modelage 120\'',
      price: '155,00 €',
      description: 'Soin complet pour une détente absolue',
      variant: 'standard' as const
    },
    {
      id: 'soin-visage',
      title: 'Soin du visage',
      price: '75,00 €',
      description: 'Nettoyage et hydratation en profondeur',
      variant: 'standard' as const
    },
    {
      id: 'beaute-mains',
      title: 'Beauté des mains',
      price: '45,00 €',
      description: 'Manucure complète avec soin',
      variant: 'standard' as const
    }
  ];

  // Services populaires d'après le design Figma
  const popularServices = [
    {
      id: 'maquillage',
      title: 'Maquillage',
      price: '65,00 €',
      image: '/images/spa/maquillage.jpg',
      variant: 'popular' as const
    },
    {
      id: 'brushing-long',
      title: 'Brushing Long',
      price: '55,00 €',
      image: '/images/spa/brushing.jpg',
      variant: 'popular' as const
    }
  ];

  // Service promo d'après le design Figma
  const promoService = {
    id: 'massage-deux',
    title: 'Massage à deux',
    price: '180,00 €',
    description: 'Moment de détente partagé dans notre suite spa privée',
    image: '/images/spa/massage-couple.jpg',
    variant: 'promo' as const
  };

  return (
    <div className="w-full max-w-[390px] mx-auto bg-[#F2F1EA] min-h-screen">
      {/* Section principale des services spa */}
      <div className="px-5 py-6">
        <h2 className="text-[20px] font-semibold text-bell-primary mb-6">
          Spa & Massage
        </h2>
        
        {/* Services standards */}
        <div className="space-y-4 mb-8">
          {spaServices.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              price={service.price}
              description={service.description}
              variant={service.variant}
              onQuantityChange={(quantity) => {
                if (quantity > 0) {
                  console.log(`Ajouté: ${service.title}`);
                }
              }}
            />
          ))}
        </div>

        {/* Service promo */}
        <div className="mb-8">
          <ServiceCard
            title={promoService.title}
            price={promoService.price}
            description={promoService.description}
            image={promoService.image}
            variant={promoService.variant}
            onQuantityChange={(quantity) => {
              if (quantity > 0) {
                console.log(`Ajouté: ${promoService.title}`);
              }
            }}
          />
        </div>

        {/* Services populaires */}
        <div className="mb-6">
          <h3 className="text-[16px] font-semibold text-bell-primary mb-4">
            Populaires
          </h3>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {popularServices.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                price={service.price}
                image={service.image}
                variant={service.variant}
                onQuantityChange={(quantity) => {
                  if (quantity > 0) {
                    console.log(`Ajouté: ${service.title}`);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 