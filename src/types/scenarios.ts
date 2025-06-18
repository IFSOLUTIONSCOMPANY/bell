export interface ChatScenario {
  id: string;
  serviceType: 'spa' | 'room-service' | 'housekeeping' | 'concierge' | 'general';
  title: string;
  initialMessage?: string;
  botResponses: BotResponse[];
  context: ScenarioContext;
}

export interface BotResponse {
  id: string;
  content: string;
  triggers?: string[]; // Mots-clés qui déclenchent cette réponse
  followUpQuestions?: string[];
  quickActions?: QuickAction[];
}

export interface QuickAction {
  id: string;
  label: string;
  action: 'open-menu' | 'book-service' | 'call-staff' | 'view-info';
  payload?: Record<string, unknown>;
}

export interface ScenarioContext {
  preferredLanguage: 'fr' | 'en';
  roomNumber?: string;
  guestName?: string;
  previousOrders?: Record<string, unknown>[];
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
}

// Scénarios prédéfinis pour le spa
export const SPA_SCENARIOS: ChatScenario[] = [
  {
    id: 'spa-welcome',
    serviceType: 'spa',
    title: 'Accueil Spa',
    botResponses: [
      {
        id: 'spa-welcome-response',
        content: `Bonjour ! 🧘

Bienvenue au Spa de l'Hôtel Oceania Paris. Je suis Bell, votre assistante virtuelle.

Comment puis-je vous aider aujourd'hui ? Souhaitez-vous :
• Réserver un massage ou un soin
• Consulter nos services disponibles
• Connaître nos créneaux libres`,
        quickActions: [
          {
            id: 'view-spa-menu',
            label: 'Voir nos services',
            action: 'open-menu',
            payload: { type: 'spa-services' }
          },
          {
            id: 'book-massage',
            label: 'Réserver un massage',
            action: 'book-service',
            payload: { category: 'massage' }
          }
        ]
      }
    ],
    context: {
      preferredLanguage: 'fr',
      timeOfDay: 'afternoon'
    }
  },
  {
    id: 'spa-booking-request',
    serviceType: 'spa',
    title: 'Demande de réservation spa',
    botResponses: [
      {
        id: 'spa-booking-response',
        content: `Parfait ! Je serais ravie de vous aider à réserver votre moment de détente.

Pour vous proposer les meilleurs créneaux disponibles, pourriez-vous me préciser :

• Le type de soin souhaité (massage, soin visage, manucure...)
• Votre préférence d'horaire
• Pour combien de personnes

Nos services les plus populaires aujourd'hui sont le Modelage 60' et notre Massage à deux en suite privée.`,
        triggers: ['massage', 'soin', 'spa', 'réserver', 'booking'],
        quickActions: [
          {
            id: 'massage-duo',
            label: 'Massage à deux',
            action: 'book-service',
            payload: { serviceId: 'massage-duo' }
          },
          {
            id: 'modelage-60',
            label: 'Modelage 60\'',
            action: 'book-service',
            payload: { serviceId: 'modelage-60' }
          }
        ]
      }
    ],
    context: {
      preferredLanguage: 'fr',
      timeOfDay: 'afternoon'
    }
  }
];

// Scénarios prédéfinis pour le room service
export const ROOM_SERVICE_SCENARIOS: ChatScenario[] = [
  {
    id: 'room-service-welcome',
    serviceType: 'room-service',
    title: 'Accueil Room Service',
    botResponses: [
      {
        id: 'room-service-welcome-response',
        content: `Bonjour ! 👨‍🍳

Bienvenue au Room Service de l'Hôtel Oceania Paris.

Notre cuisine est à votre service 24h/24. Que puis-je vous préparer aujourd'hui ?

• Menu du jour avec nos spécialités
• Petit-déjeuner continental
• Collations et boissons
• Menu enfant`,
        quickActions: [
          {
            id: 'view-menu',
            label: 'Voir la carte',
            action: 'open-menu',
            payload: { type: 'room-service-menu' }
          },
          {
            id: 'breakfast',
            label: 'Petit-déjeuner',
            action: 'view-info',
            payload: { category: 'breakfast' }
          }
        ]
      }
    ],
    context: {
      preferredLanguage: 'fr',
      timeOfDay: 'morning'
    }
  },
  {
    id: 'room-service-order',
    serviceType: 'room-service',
    title: 'Commande Room Service',
    botResponses: [
      {
        id: 'room-service-order-response',
        content: `Excellente idée ! 🍴

Notre carte du jour propose :

**Formule Brunch** - 36,50 €
Pain perdu, œufs brouillés, saumon fumé

**Salade César** - 18,90 €
Romaine, parmesan, croûtons, sauce maison

**Ravioles du Dauphiné** - 18,90 €
Sauce truffe et parmesan

Livraison en chambre sous 25-30 minutes. Des frais de service de 10€ s'appliquent.

Que souhaitez-vous commander ?`,
        triggers: ['commander', 'menu', 'carte', 'manger', 'food'],
        quickActions: [
          {
            id: 'brunch',
            label: 'Formule Brunch',
            action: 'book-service',
            payload: { itemId: 'formule-brunch' }
          },
          {
            id: 'caesar',
            label: 'Salade César',
            action: 'book-service',
            payload: { itemId: 'salade-cesar' }
          }
        ]
      }
    ],
    context: {
      preferredLanguage: 'fr',
      timeOfDay: 'afternoon'
    }
  }
];

// Scénarios prédéfinis pour le housekeeping
export const HOUSEKEEPING_SCENARIOS: ChatScenario[] = [
  {
    id: 'housekeeping-welcome',
    serviceType: 'housekeeping',
    title: 'Accueil Housekeeping',
    botResponses: [
      {
        id: 'housekeeping-welcome-response',
        content: `Bonjour ! 🧹

Je suis Bell, votre assistante pour les services d'entretien.

Comment puis-je vous aider aujourd'hui ?

• Demande de ménage supplémentaire
• Remplacement de serviettes/draps
• Demande d'articles d'accueil
• Signaler un problème dans la chambre`,
        quickActions: [
          {
            id: 'extra-cleaning',
            label: 'Ménage supplémentaire',
            action: 'book-service',
            payload: { type: 'cleaning' }
          },
          {
            id: 'towels-replacement',
            label: 'Nouvelles serviettes',
            action: 'book-service',
            payload: { type: 'towels' }
          },
          {
            id: 'report-issue',
            label: 'Signaler un problème',
            action: 'call-staff',
            payload: { type: 'maintenance' }
          }
        ]
      }
    ],
    context: {
      preferredLanguage: 'fr',
      timeOfDay: 'afternoon'
    }
  }
];

// Scénarios prédéfinis pour la conciergerie
export const CONCIERGE_SCENARIOS: ChatScenario[] = [
  {
    id: 'concierge-welcome',
    serviceType: 'concierge',
    title: 'Accueil Conciergerie',
    botResponses: [
      {
        id: 'concierge-welcome-response',
        content: `Bonjour ! 🔑

Je suis Bell, votre concierge virtuelle à l'Hôtel Oceania Paris.

Comment puis-je vous assister aujourd'hui ?

• Réservations de restaurants
• Informations touristiques
• Transport et taxis
• Recommandations locales
• Services spéciaux`,
        quickActions: [
          {
            id: 'restaurant-booking',
            label: 'Réserver un restaurant',
            action: 'book-service',
            payload: { type: 'restaurant' }
          },
          {
            id: 'tourist-info',
            label: 'Infos touristiques',
            action: 'view-info',
            payload: { type: 'tourism' }
          },
          {
            id: 'taxi-service',
            label: 'Commander un taxi',
            action: 'call-staff',
            payload: { type: 'transport' }
          }
        ]
      }
    ],
    context: {
      preferredLanguage: 'fr',
      timeOfDay: 'afternoon'
    }
  }
];

// Fonction utilitaire pour obtenir un scénario selon le contexte
export function getScenarioByService(serviceType: string): ChatScenario | null {
  const allScenarios = [
    ...SPA_SCENARIOS, 
    ...ROOM_SERVICE_SCENARIOS, 
    ...HOUSEKEEPING_SCENARIOS,
    ...CONCIERGE_SCENARIOS
  ];
  return allScenarios.find(scenario => 
    scenario.serviceType === serviceType && scenario.id.includes('welcome')
  ) || null;
}

// Récupérer un scénario par son identifiant unique
export function getScenarioById(id: string): ChatScenario | null {
  const allScenarios = [
    ...SPA_SCENARIOS,
    ...ROOM_SERVICE_SCENARIOS,
    ...HOUSEKEEPING_SCENARIOS,
    ...CONCIERGE_SCENARIOS,
  ];
  return allScenarios.find((scenario) => scenario.id === id) || null;
} 