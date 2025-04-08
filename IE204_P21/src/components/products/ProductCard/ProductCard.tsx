import React from 'react';
import './ProductCard.css';
import Image from 'next/image';

interface ProductCardProps {
  id: string | number;
  name: string;
  description: string;
  currentPrice: number;
  originalPrice?: number;
  discountPercentage?: number;
  imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  currentPrice,
  originalPrice,
  discountPercentage,
  imageUrl,
}) => {
  // Format price to display with currency symbol
  const formatPrice = (price: number) => {
    return `Rp ${price.toLocaleString()}`;
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <div className="product-image">
          <Image 
            src={imageUrl} 
            alt={name} 
            fill 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
          />
        </div>
        
        {discountPercentage && (
          <div className="discount-badge">
            <span>{`-${discountPercentage}%`}</span>
          </div>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-description">{description}</div>
        
        <div className="product-price">
          <span className="current-price">{formatPrice(currentPrice)}</span>
          {originalPrice && (
            <span className="original-price">{formatPrice(originalPrice)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;