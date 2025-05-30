import React, { useState } from 'react';

interface AddButtonProps {
  onQuantityChange?: (quantity: number) => void;
  initialQuantity?: number;
  variant?: 'standard' | 'small';
}

const AddButton = React.forwardRef<HTMLDivElement, AddButtonProps>(
  ({ onQuantityChange, initialQuantity = 0, variant = 'standard' }, ref) => {
    const [quantity, setQuantity] = useState(initialQuantity);
    const [isHovered, setIsHovered] = useState(false);

    const handleAdd = () => {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      onQuantityChange?.(newQuantity);
    };

    const handleRemove = () => {
      if (quantity > 0) {
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
        onQuantityChange?.(newQuantity);
      }
    };

    const handleQuantityClick = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // Styles selon la variante
    const buttonSize = variant === 'small' ? 'w-[30px] h-[30px]' : 'w-[40px] h-[40px]';
    const fontSize = variant === 'small' ? 'text-[16px]' : 'text-[20px]';
    const selectorWidth = variant === 'small' ? 'w-[81px]' : 'w-[145px]';

    // État ADD - Bouton simple avec +
    if (quantity === 0) {
      return (
        <div
          ref={ref}
          className={`${buttonSize} bg-white rounded-full flex items-center justify-center cursor-pointer shadow-[0px_3px_6px_0px_rgba(194,117,10,0.1)] transition-all duration-200 hover:scale-105`}
          onClick={handleAdd}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#F2930D]"
          >
            <path
              d="M8 1V15M1 8H15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>
      );
    }

    // État SELECTOR - Affichage avec - et + quand on survole
    if (quantity > 0 && isHovered) {
      return (
        <div
          ref={ref}
          className={`${selectorWidth} ${buttonSize} bg-white rounded-[25px] flex items-center justify-between px-[10px] shadow-[0px_3px_6px_0px_rgba(194,117,10,0.1)] transition-all duration-200`}
          onMouseLeave={handleMouseLeave}
        >
          {/* Bouton - */}
          <button
            onClick={handleRemove}
            className="w-[20px] h-[20px] flex items-center justify-center text-[#F2930D] hover:bg-[#F2930D] hover:text-white rounded-full transition-colors"
          >
            <svg
              width="14"
              height="2"
              viewBox="0 0 14 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {/* Quantité */}
          <span className={`${fontSize} font-semibold text-bell-primary`}>
            {quantity}
          </span>

          {/* Bouton + */}
          <button
            onClick={handleAdd}
            className="w-[20px] h-[20px] flex items-center justify-center text-[#F2930D] hover:bg-[#F2930D] hover:text-white rounded-full transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1V13M1 7H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      );
    }

    // État QUANTITY - Cercle avec le nombre
    return (
      <div
        ref={ref}
        className={`${buttonSize} bg-[#F2930D] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105`}
        onClick={handleQuantityClick}
        onMouseEnter={() => setIsHovered(true)}
      >
        <span className={`${fontSize} font-semibold text-white`}>
          {quantity}
        </span>
      </div>
    );
  }
);

AddButton.displayName = 'AddButton';

export { AddButton }; 