import React from 'react';
import { AddButton } from './add-button';
import Image from 'next/image';
interface ServiceCardProps {
  title: string;
  price: string;
  description?: string;
  image?: string;
  variant?: 'promo' | 'popular' | 'standard';
  onQuantityChange?: (quantity: number) => void;
}

const ServiceCard = React.forwardRef<HTMLDivElement, ServiceCardProps>(
  ({ title, price, description, image, variant = 'standard', onQuantityChange }, ref) => {
    const getCardStyles = () => {
      switch (variant) {
        case 'promo':
          return {
            container: 'w-full h-[131px] bg-[rgba(250,249,245,0.8)] rounded-[25px] relative overflow-hidden',
            imageSize: 'w-[131px] h-[131px]',
            imagePosition: 'absolute right-0 top-0',
            contentPadding: 'p-5',
            titleSize: 'text-[16px]',
            buttonPosition: 'absolute top-[10px] right-[10px]',
            showDescription: true
          };
        case 'popular':
          return {
            container: 'w-[165px] h-[201px] bg-[rgba(250,249,245,0.8)] rounded-[25px] relative overflow-hidden flex flex-col',
            imageSize: 'w-[165px] h-[114px]',
            imagePosition: 'relative',
            contentPadding: 'p-5',
            titleSize: 'text-[16px]',
            buttonPosition: 'absolute bottom-[84px] right-[10px]',
            showDescription: false
          };
        case 'standard':
          return {
            container: 'w-full h-[121px] bg-[rgba(250,249,245,0.8)] rounded-[25px] relative overflow-hidden',
            imageSize: 'w-[100px] h-[121px]',
            imagePosition: 'absolute right-0 top-0',
            contentPadding: 'p-5',
            titleSize: 'text-[16px]',
            buttonPosition: 'absolute top-[10px] right-[10px]',
            showDescription: true
          };
      }
    };

    const styles = getCardStyles();

    return (
      <div ref={ref} className={styles.container}>
        {/* Image */}
        {image && (
          <div className={`${styles.imagePosition} ${styles.imageSize} overflow-hidden`}>
            <Image src={image} alt={title} className="object-cover w-full h-full" width={100} height={100} />
          </div>
        )}

        {/* Contenu */}
        <div className={`${styles.contentPadding} ${variant === 'popular' ? 'flex-1' : ''}`}>
          {/* Titre */}
          <h3 className={`${styles.titleSize} font-semibold text-bell-primary leading-[1.5] mb-2 ${variant === 'popular' ? 'line-clamp-2' : ''}`}>
            {title}
          </h3>

          {/* Description (seulement pour promo et standard) */}
          {styles.showDescription && description && (
            <p className="text-[13px] font-light text-[rgba(101,65,61,0.7)] leading-[1.23] line-clamp-2 mb-2 pr-[100px]">
              {description}
            </p>
          )}

          {/* Prix */}
          <p className={`${variant === 'popular' ? 'text-[13px]' : 'text-[13px]'} font-normal text-[rgba(101,65,61,0.7)]`}>
            {price}
          </p>
        </div>

        {/* Bouton d'ajout */}
        <div className={styles.buttonPosition}>
          <AddButton 
            onQuantityChange={onQuantityChange}
            variant={variant === 'popular' ? 'small' : 'standard'}
          />
        </div>
      </div>
    );
  }
);

ServiceCard.displayName = 'ServiceCard';

export { ServiceCard }; 