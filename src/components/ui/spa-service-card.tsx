import React from 'react';
import { AddButton } from './add-button';
import Image from 'next/image';

interface SpaServiceCardProps {
  title: string;
  price: string;
  description?: string;
  image?: string;
  variant?: 'promo' | 'popular' | 'standard';
  onAdd?: () => void;
}

const SpaServiceCard = React.forwardRef<HTMLDivElement, SpaServiceCardProps>(
  ({ title, price, description, image, variant = 'standard', onAdd }, ref) => {
    const getCardStyles = () => {
      switch (variant) {
        case 'promo':
          return {
            container: 'w-full h-[131px] bg-[rgba(250,249,245,0.8)] rounded-[25px] relative overflow-hidden cursor-pointer hover:bg-[rgba(250,249,245,0.9)] transition-colors',
            imageSize: 'w-[131px] h-[131px]',
            imagePosition: 'absolute right-0 top-0',
            contentPadding: 'p-5 pr-[150px]',
            titleSize: 'text-[16px]',
            buttonPosition: 'absolute top-[10px] right-[10px]',
            showDescription: true
          };
        case 'popular':
          return {
            container: 'w-[165px] h-[201px] bg-[rgba(250,249,245,0.8)] rounded-[25px] relative overflow-hidden flex flex-col cursor-pointer hover:bg-[rgba(250,249,245,0.9)] transition-colors',
            imageSize: 'w-[165px] h-[114px]',
            imagePosition: 'relative',
            contentPadding: 'p-5',
            titleSize: 'text-[16px]',
            buttonPosition: 'absolute bottom-[84px] right-[10px]',
            showDescription: false
          };
        case 'standard':
          return {
            container: 'w-full h-[121px] bg-[rgba(250,249,245,0.8)] rounded-[25px] relative overflow-hidden cursor-pointer hover:bg-[rgba(250,249,245,0.9)] transition-colors',
            imageSize: 'w-[100px] h-[121px]',
            imagePosition: 'absolute right-0 top-0',
            contentPadding: 'p-5 pr-[110px]',
            titleSize: 'text-[16px]',
            buttonPosition: 'absolute top-[10px] right-[10px]',
            showDescription: true
          };
      }
    };

    const styles = getCardStyles();

    const handleClick = () => {
      if (onAdd) {
        onAdd();
      }
    };

    return (
      <div ref={ref} className={styles.container} onClick={handleClick}>
        {/* Image */}
        {image && (
          <div className={`${styles.imagePosition} ${styles.imageSize} overflow-hidden`}>
            <Image 
              src={image} 
              alt={title} 
              className="object-cover w-full h-full" 
              width={165} 
              height={201}
              unoptimized
            />
          </div>
        )}

        {/* Contenu */}
        <div className={`${styles.contentPadding} ${variant === 'popular' ? 'flex-1' : ''} relative z-10`}>
          {/* Titre */}
          <h3 className={`${styles.titleSize} font-semibold text-bell-primary leading-[1.5] mb-2 ${variant === 'popular' ? 'line-clamp-2' : ''}`}>
            {title}
          </h3>

          {/* Description (seulement pour promo et standard) */}
          {styles.showDescription && description && (
            <p className="text-[13px] font-light text-[rgba(101,65,61,0.7)] leading-[1.23] line-clamp-2 mb-2">
              {description}
            </p>
          )}

          {/* Prix */}
          <p className={`${variant === 'popular' ? 'text-[13px]' : 'text-[13px]'} font-normal text-[rgba(101,65,61,0.7)]`}>
            {price}
          </p>
        </div>

        {/* Bouton d'ajout */}
        <div className={`${styles.buttonPosition} z-20`}>
          <AddButton 
            onQuantityChange={() => onAdd && onAdd()}
            variant={variant === 'popular' ? 'small' : 'standard'}
          />
        </div>
      </div>
    );
  }
);

SpaServiceCard.displayName = 'SpaServiceCard';

export { SpaServiceCard }; 