"use client";

import { useState } from 'react';
import { ContextualConversationView } from '@/components/mobile/contextual-conversation-view';
import { Header, StatusInfoBar } from '@/components/mobile';
import { QuickAction } from '@/types/scenarios';

export default function TestScenariosPage() {
  const [currentService, setCurrentService] = useState<'spa' | 'room-service' | 'housekeeping' | 'concierge' | 'general'>('general');

  const handleQuickAction = (action: QuickAction) => {
    console.log('Action déclenchée:', action);
    alert(`Action: ${action.action} - ${action.label}`);
  };

  return (
    <div className="w-full max-w-[390px] mx-auto bg-[#F2F1EA] min-h-screen relative">
      {/* Header */}
      <Header className="pt-2" />
      <StatusInfoBar />

      {/* Sélecteur de service */}
      <div className="px-4 py-4 bg-white/80 border-b border-gray-200">
        <h1 className="text-xl font-semibold text-bell-primary mb-4">
          Test des Scénarios Bell
        </h1>
        
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCurrentService('spa')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentService === 'spa' 
                ? 'bg-bell-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            🧘 Spa & Massage
          </button>
          
          <button
            onClick={() => setCurrentService('room-service')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentService === 'room-service' 
                ? 'bg-bell-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            👨‍🍳 Room Service
          </button>
          
          <button
            onClick={() => setCurrentService('housekeeping')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentService === 'housekeeping' 
                ? 'bg-bell-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            🧹 Housekeeping
          </button>
          
          <button
            onClick={() => setCurrentService('concierge')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              currentService === 'concierge' 
                ? 'bg-bell-primary text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            🔑 Conciergerie
          </button>
        </div>
      </div>

      {/* Zone de conversation */}
      <div className="relative">
        <ContextualConversationView 
          serviceType={currentService}
          onQuickAction={handleQuickAction}
        />
      </div>
    </div>
  );
} 