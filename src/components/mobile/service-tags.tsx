"use client";

import { useRef, useEffect, useState } from 'react';

interface ServiceTag {
  id: string;
  icon: string;
  label: string;
}

interface ServiceTagsProps {
  className?: string;
  tags?: ServiceTag[];
  onServiceSelect?: (service: string) => void;
}

export const ServiceTags: React.FC<ServiceTagsProps> = ({
  className = '',
  tags = [
    { id: 'guide', icon: '📑', label: 'Guide' },
    { id: 'amenities', icon: '🏨', label: 'Amenities' },
    { id: 'room-service', icon: '👨‍🍳', label: 'Room Service' },
    { id: 'housekeeping', icon: '🧹', label: 'Housekeeping' },
    { id: 'lost-found', icon: '🔎', label: 'Lost & Found' },
    { id: 'conciergerie', icon: '🔑', label: 'Conciergerie' },
    { id: 'technical-service', icon: '🔧', label: 'Technical Service' },
    { id: 'spa-massage', icon: '🧘', label: 'Spa & Massage' },
    { id: 'book-table', icon: '🍴', label: 'Book a table' },
    { id: 'laundry', icon: '🧺', label: 'Laundry' },
  ],
  onServiceSelect
}) => {
  // État pour suivre l'interaction utilisateur
  const [isPaused, setIsPaused] = useState(false);
  
  // Diviser les tags en deux rangées
  const firstRow = tags.slice(0, 4);
  const secondRow = tags.slice(4);
  
  // Références pour les conteneurs à animer
  const firstRowContainerRef = useRef<HTMLDivElement>(null);
  const secondRowContainerRef = useRef<HTMLDivElement>(null);
  
  // Gestion de l'animation CSS pour un scroll infini fluide
  useEffect(() => {
    const firstContainer = firstRowContainerRef.current;
    const secondContainer = secondRowContainerRef.current;
    
    if (!firstContainer || !secondContainer) return;
    
    // Animation function using requestAnimationFrame for smooth movement
    let animationRunning = true;
    let firstPos = 0;
    let secondPos = 0;
    let animationFrameId: number;
    
    // Calculons les largeurs totales pour le reset fluide
    const firstRowWidth = firstContainer.scrollWidth / 3; // Car on a tripliqué le contenu
    const secondRowWidth = secondContainer.scrollWidth / 3;
    
    const animate = () => {
      if (!isPaused && animationRunning) {
        // Animation speed
        const speed1 = 0.5;
        const speed2 = 0.6; // Slightly different speed for variety
        
        // First row moves left (negative X)
        firstPos -= speed1;
        // Reset position when content is out of view to create infinite loop
        // Vérifie si on a défilé d'une section complète, puis repositionne
        if (firstPos <= -firstRowWidth) {
          firstPos += firstRowWidth;
        }
        
        // Second row moves right (positive X)
        secondPos += speed2;
        // Reset position when content is out of view to create infinite loop
        if (secondPos >= secondRowWidth) {
          secondPos -= secondRowWidth;
        }
        
        // Apply transforms
        firstContainer.style.transform = `translateX(${firstPos}px)`;
        secondContainer.style.transform = `translateX(${secondPos}px)`;
        
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    
    // Start animation
    animationFrameId = requestAnimationFrame(animate);
    
    return () => {
      animationRunning = false;
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);
  
  // Handlers pour les interactions utilisateur
  const handleInteractionStart = () => {
    setIsPaused(true);
  };
  
  const handleInteractionEnd = () => {
    setTimeout(() => {
      setIsPaused(false);
    }, 2000);
  };
  
  const handleTagClick = (tagId: string) => {
    if (onServiceSelect) {
      onServiceSelect(tagId);
    }
  };
  
  // Rendre les tags en triple pour une boucle continue
  const duplicatedFirstRow = [...firstRow, ...firstRow, ...firstRow];
  const duplicatedSecondRow = [...secondRow, ...secondRow, ...secondRow];

  return (
    <div className={`service-tags w-full ${className}`}>
      {/* Première ligne - défilement automatique vers la gauche */}
      <div className="overflow-hidden"
           onMouseDown={handleInteractionStart}
           onTouchStart={handleInteractionStart}
           onMouseUp={handleInteractionEnd}
           onTouchEnd={handleInteractionEnd}
           onMouseLeave={handleInteractionEnd}>
        <div 
          ref={firstRowContainerRef}
          className="inline-flex gap-4 py-1" 
          style={{ whiteSpace: 'nowrap' }}
        >
          {duplicatedFirstRow.map((tag, index) => (
            <div
              key={`${tag.id}-${index}`}
              className="service-tag inline-flex items-center justify-center h-[36px] px-4 whitespace-nowrap cursor-pointer hover:bg-[rgba(250,249,245,0.9)] transition-colors bg-[rgba(234,230,220,0.7)] shadow-sm rounded-full"
              onClick={() => handleTagClick(tag.id)}
            >
              <span className="text-[15px] text-[#65413D]">{tag.icon} {tag.label}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Deuxième ligne - défilement automatique vers la droite */}
      <div className="overflow-hidden"
           onMouseDown={handleInteractionStart}
           onTouchStart={handleInteractionStart}
           onMouseUp={handleInteractionEnd}
           onTouchEnd={handleInteractionEnd}
           onMouseLeave={handleInteractionEnd}>
        <div 
          ref={secondRowContainerRef}
          className="inline-flex gap-4 py-1" 
          style={{ whiteSpace: 'nowrap' }}
        >
          {duplicatedSecondRow.map((tag, index) => (
            <div
              key={`${tag.id}-${index}`}
              className="service-tag inline-flex items-center justify-center h-[36px] px-4 whitespace-nowrap cursor-pointer hover:bg-[rgba(250,249,245,0.9)] transition-colors bg-[rgba(234,230,220,0.7)] shadow-sm rounded-full"
              onClick={() => handleTagClick(tag.id)}
            >
              <span className="text-[15px] text-[#65413D]">{tag.icon} {tag.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceTags; 