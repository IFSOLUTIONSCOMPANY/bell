"use client";

interface StatusBarProps {
  className?: string;
}

export const StatusBar: React.FC<StatusBarProps> = ({ className = '' }) => {
  // Cette barre est vide car les éléments natifs du téléphone (heure, wifi, batterie) 
  // sont déjà présents sur le téléphone physique
  return (
    <div className={`fixed top-0 left-0 right-0 h-[44px] z-50 ${className}`}>
      {/* Barre de statut vide, les éléments natifs du téléphone s'afficheront par-dessus */}
    </div>
  );
};

export default StatusBar; 