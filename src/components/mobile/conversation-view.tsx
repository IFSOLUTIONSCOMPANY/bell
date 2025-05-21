"use client";

import { useEffect, useState, useRef } from 'react';

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface ConversationViewProps {
  className?: string;
}

export const ConversationView: React.FC<ConversationViewProps> = ({ 
  className = ''
}) => {
  // Référence pour le conteneur de messages
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  
  // État pour simuler une conversation
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'I would like to book a table for two at my hotel\'s restaurant for tonight please.',
      isUser: true,
      timestamp: new Date()
    }
  ]);
  
  // État pour la réponse en cours de génération
  const [isGenerating, setIsGenerating] = useState(true);
  const [generatedText, setGeneratedText] = useState('');
  const [visibleDots, setVisibleDots] = useState(0);
  
  // La réponse complète que nous voulons afficher progressivement
  const fullResponse = `Good morning!

I'd be delighted to help you reserve a table for two at our restaurant tonight.

Could you please let me know your preferred dining time? Our dinner service runs from 5:30 PM to 10:30 PM (last seating).

We also offer our intimate Chef's Table experience and window seating upon request, subject to availability.`;

  // Animation séquentielle des points
  useEffect(() => {
    if (!isGenerating) return;
    
    // Fonction pour l'animation cyclique des points
    const animateDots = () => {
      setVisibleDots(prev => (prev + 1) % 4); // 0, 1, 2, 3, 0, 1, ...
    };
    
    // Démarrer l'animation avec un intervalle de 500ms
    const interval = setInterval(animateDots, 500);
    
    // Nettoyer l'intervalle quand le composant est démonté
    return () => clearInterval(interval);
  }, [isGenerating]);

  // Effet pour simuler la génération progressive du texte
  useEffect(() => {
    if (!isGenerating) return;
    
    // Délai initial avant de commencer à "taper"
    const initialDelay = setTimeout(() => {
      let currentIndex = 0;
      
      // Fonction pour ajouter un caractère à la fois
      const addNextChar = () => {
        if (currentIndex < fullResponse.length) {
          setGeneratedText(fullResponse.substring(0, currentIndex + 1));
          currentIndex++;
          
          // Vitesse de frappe variable pour un effet plus naturel
          const typingSpeed = Math.random() * 30 + 20; // Entre 20ms et 50ms
          setTimeout(addNextChar, typingSpeed);
        } else {
          // Quand toute la réponse est générée
          setIsGenerating(false);
          
          // Ajouter la réponse aux messages
          setMessages(prev => [
            ...prev,
            {
              id: (prev.length + 1).toString(),
              content: fullResponse,
              isUser: false,
              timestamp: new Date()
            }
          ]);
          
          // Réinitialiser le texte en cours de génération
          setGeneratedText('');
        }
      };
      
      // Commencer à "taper"
      addNextChar();
    }, 1500); // Délai pour simuler la "réflexion" avant de répondre
    
    return () => clearTimeout(initialDelay);
  }, [isGenerating, fullResponse]);

  // Faire défiler automatiquement vers le bas quand de nouveaux messages sont ajoutés
  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, generatedText, isGenerating]);

  // Fonction pour formater le texte avec des sauts de ligne et des paragraphes
  const formatText = (text: string, isUser: boolean) => {
    if (isUser) {
      return text;
    }
    
    // Pour les messages de Bell, formater en paragraphes
    const paragraphs = text.split('\n\n');
    return (
      <>
        {paragraphs.map((paragraph, i) => (
          <p key={i} className={i > 0 ? 'mt-4' : ''}>
            {paragraph.split('\n').map((line, j) => (
              <span key={j}>
                {line}
                {j < paragraph.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
        ))}
      </>
    );
  };

  return (
    <div className="fixed inset-0 z-20 pt-[110px] pb-[120px] flex flex-col bg-[#F2F1EA]">
      {/* Zone de messages scrollable */}
      <div 
        ref={messagesContainerRef}
        className={`flex-1 overflow-y-auto px-6 ${className}`}
      >
        {/* Messages existants */}
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isUser ? 'justify-end mb-4 mt-4' : 'justify-start mb-2'}`}>
            {message.isUser ? (
              <div className="max-w-[80%] bg-[rgba(242,241,234,0.8)] border-t-white border-1 rounded-[18px] bell-shadow p-[7px_14px]">
                <p className="font-['Acumin'] text-[17.3px] leading-[1.27] text-[#65413D]">
                  {formatText(message.content, true)}
                </p>
              </div>
            ) : (
              <div className="max-w-[90%] rounded-[18px] shadow p-4">
                <div className="font-['Jubilat'] text-[17.3px] text-[#65413D] leading-relaxed space-y-4">
                  {formatText(message.content, false)}
                </div>
              </div>
            )}
          </div>
        ))}
        
        {/* Texte en cours de génération */}
        {isGenerating && (
          <>
            {generatedText && (
              <div className="flex justify-start mb-2">
                <div className="max-w-[90%] rounded-[18px] shadow p-4">
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
            Bell can make mistakes.
            <br />
            Please double-check responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationView; 