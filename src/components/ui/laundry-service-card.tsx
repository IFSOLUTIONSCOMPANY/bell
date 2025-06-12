"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface LaundryServiceCardProps {
  title: string;
  price: string;
  image: string;
  category: string;
  onQuantityChange: (quantity: number) => void;
}

export function LaundryServiceCard({
  title,
  price,
  image,
  category,
  onQuantityChange
}: LaundryServiceCardProps) {
  const [quantity, setQuantity] = useState(0);

  const handleQuantityChange = (newQuantity: number) => {
    const finalQuantity = Math.max(0, newQuantity);
    setQuantity(finalQuantity);
    onQuantityChange(finalQuantity);
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3">
        {/* Image */}
        <div className="w-16 h-16 bg-gray-100 rounded-xl overflow-hidden flex-shrink-0">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm leading-tight">
            {title}
          </h3>
          <p className="text-xs text-gray-500 mt-1">
            {category}
          </p>
          <p className="font-semibold text-bell-primary text-sm mt-1">
            {price}
          </p>
        </div>

        {/* Contrôles de quantité */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleQuantityChange(quantity - 1)}
            disabled={quantity <= 0}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Minus size={16} className="text-gray-600" />
          </button>
          
          <span className="w-8 text-center font-semibold text-gray-900">
            {quantity}
          </span>
          
          <button
            onClick={() => handleQuantityChange(quantity + 1)}
            className="w-8 h-8 rounded-full bg-bell-primary flex items-center justify-center"
          >
            <Plus size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
} 