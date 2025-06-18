"use client";

import { useEffect, useState, useRef } from "react";
import {
  BotResponse,
  QuickAction,
  getScenarioByService,
  getScenarioById,
} from "@/types/scenarios";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
  quickActions?: QuickAction[];
}

interface ContextualConversationViewProps {
  className?: string;
  serviceType?:
    | "spa"
    | "room-service"
    | "housekeeping"
    | "concierge"
    | "general";
  onQuickAction?: (action: QuickAction) => void;
}

export const ContextualConversationView: React.FC<
  ContextualConversationViewProps
> = ({ className = "", serviceType = "general", onQuickAction }) => {
  // Référence pour le conteneur de messages
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  // État pour simuler une conversation contextuelle
  const [messages, setMessages] = useState<Message[]>([]);

  // État pour la réponse en cours de génération
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState("");
  const [visibleDots, setVisibleDots] = useState(0);
  const [currentBotResponse, setCurrentBotResponse] =
    useState<BotResponse | null>(null);

  // Initialiser le scénario selon le service
  useEffect(() => {
    const scenario = getScenarioByService(serviceType);

    if (scenario && scenario.botResponses.length > 0) {
      // Message d'accueil contextuel
      const welcomeResponse = scenario.botResponses[0];
      setCurrentBotResponse(welcomeResponse);
      setIsGenerating(true);
    }
  }, [serviceType]);

  // Animation séquentielle des points
  useEffect(() => {
    if (!isGenerating) return;

    const animateDots = () => {
      setVisibleDots((prev) => (prev + 1) % 4);
    };

    const interval = setInterval(animateDots, 500);
    return () => clearInterval(interval);
  }, [isGenerating]);

  // Effet pour simuler la génération progressive du texte
  useEffect(() => {
    if (!isGenerating || !currentBotResponse) return;

    const fullResponse = currentBotResponse.content;

    const initialDelay = setTimeout(() => {
      let currentIndex = 0;

      const addNextChar = () => {
        if (currentIndex < fullResponse.length) {
          setGeneratedText(fullResponse.substring(0, currentIndex + 1));
          currentIndex++;

          const typingSpeed = Math.random() * 30 + 20;
          setTimeout(addNextChar, typingSpeed);
        } else {
          // Ajouter la réponse complète aux messages
          setIsGenerating(false);

          setMessages((prev) => [
            ...prev,
            {
              id: (prev.length + 1).toString(),
              content: fullResponse,
              isUser: false,
              timestamp: new Date(),
              quickActions: currentBotResponse.quickActions,
            },
          ]);

          setGeneratedText("");
          setCurrentBotResponse(null);
        }
      };

      addNextChar();
    }, 1200);

    return () => clearTimeout(initialDelay);
  }, [isGenerating, currentBotResponse]);

  // Faire défiler automatiquement vers le bas
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  }, [messages, generatedText, isGenerating]);

  // Gérer les actions rapides
  const handleQuickAction = (action: QuickAction) => {
    if (onQuickAction) {
      onQuickAction(action);
    }

    // Ajouter un message utilisateur simulé
    const userMessage: Message = {
      id: (messages.length + 1).toString(),
      content: `J'ai sélectionné : ${action.label}`,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Déclencher une réponse contextuelle selon l'action
    setTimeout(() => {
      handleContextualResponse(action);
    }, 800);
  };

  // Générer une réponse contextuelle selon l'action
  const handleContextualResponse = (action: QuickAction) => {
    let response: BotResponse | undefined;

    // On tente d'abord de trouver un scénario correspondant à l'action
    let nextScenarioId: string | null = null;

    if (serviceType === 'spa' && ['open-menu', 'book-service'].includes(action.action)) {
      nextScenarioId = 'spa-booking-request';
    }
    if (serviceType === 'room-service' && action.action === 'open-menu') {
      nextScenarioId = 'room-service-order';
    }

    if (nextScenarioId) {
      const nextScenario = getScenarioById(nextScenarioId);
      if (nextScenario) {
        response = nextScenario.botResponses[0];
      }
    }

    // Fallback générique si aucun scénario trouvé
    if (!response) {
      response = {
        id: 'default-response',
        content: `Je vous remercie pour votre message. Un membre de notre équipe va vous contacter sous peu pour finaliser votre demande.

Puis-je vous aider sur un autre sujet ?`,
        quickActions: [
          { id: 'new-request', label: 'Nouvelle demande', action: 'view-info', payload: { type: 'services' } }
        ]
      };
    }

    if (response) {
      setCurrentBotResponse(response);
      setIsGenerating(true);
    }
  };

  // Fonction pour formater le texte avec des sauts de ligne
  const formatText = (text: string, isUser: boolean) => {
    if (isUser) {
      return text;
    }

    const paragraphs = text.split("\n\n");
    return (
      <>
        {paragraphs.map((paragraph, i) => (
          <p key={i} className={i > 0 ? "mt-4" : ""}>
            {paragraph.split("\n").map((line, j) => (
              <span key={j}>
                {line}
                {j < paragraph.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        ))}
      </>
    );
  };

  // Titre contextuel selon le service
  const getServiceTitle = () => {
    switch (serviceType) {
      case "spa":
        return "Spa & Massage";
      case "room-service":
        return "Room Service";
      case "housekeeping":
        return "Housekeeping";
      case "concierge":
        return "Conciergerie";
      default:
        return "Bell Assistant";
    }
  };

  return (
    <div className="fixed inset-0 z-20 pt-[110px] pb-[120px] flex flex-col bg-[#F2F1EA]">
      {/* En-tête contextuel */}
      <div className="px-6 py-3 bg-[rgba(234,230,220,0.9)] border-b border-[rgba(101,65,61,0.1)]">
        <h2 className="text-lg font-['Jubilat'] text-bell-primary text-center">
          {getServiceTitle()}
        </h2>
      </div>

      {/* Zone de messages scrollable */}
      <div
        ref={messagesContainerRef}
        className={`flex-1 overflow-y-auto px-6 py-4 ${className}`}
      >
        {/* Messages existants */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${
              message.isUser ? "justify-end mb-4 mt-4" : "justify-start mb-2"
            }`}
          >
            {message.isUser ? (
              <div className="max-w-[80%] bg-[rgba(242,241,234,0.8)] border-t-white border-1 rounded-[18px] bell-shadow p-[7px_14px]">
                <p className="font-['Acumin'] text-[17.3px] leading-[1.27] text-[#65413D]">
                  {formatText(message.content, true)}
                </p>
              </div>
            ) : (
              <div className="max-w-[90%]">
                <div className="rounded-[18px] shadow p-4 bg-white">
                  <div className="font-['Jubilat'] text-[17.3px] text-[#65413D] leading-relaxed space-y-4">
                    {formatText(message.content, false)}
                  </div>
                </div>

                {/* Actions rapides */}
                {message.quickActions && message.quickActions.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3 ml-4">
                    {message.quickActions.map((action) => (
                      <button
                        key={action.id}
                        onClick={() => handleQuickAction(action)}
                        className="px-4 py-2 bg-bell-primary text-white text-sm rounded-full hover:bg-bell-primary/90 transition-colors"
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Texte en cours de génération */}
        {isGenerating && (
          <>
            {generatedText && (
              <div className="flex justify-start mb-2">
                <div className="max-w-[90%] rounded-[18px] shadow p-4 bg-white">
                  <div className="font-['Jubilat'] text-[17.3px] text-[#65413D] leading-relaxed space-y-4">
                    {formatText(generatedText, false)}
                  </div>
                </div>
              </div>
            )}

            {/* Indicateur de saisie */}
            {!generatedText && (
              <div className="flex mt-3 ml-2 mb-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className={`w-[10px] h-[10px] rounded-full mr-1 transition-opacity duration-200 ${
                      index < visibleDots ? "opacity-100" : "opacity-30"
                    }`}
                    style={{
                      backgroundColor: "rgba(242,147,13,0.9)",
                    }}
                  />
                ))}
              </div>
            )}
          </>
        )}

        {/* Message d'erreur */}
        <div className="text-right mb-16 mt-2">
          <p className="text-[8.7px] text-[rgba(101,65,61,0.33)] leading-[1.25]">
            Bell peut commettre des erreurs.
            <br />
            Veuillez vérifier les réponses importantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContextualConversationView;
