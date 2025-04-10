import React from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
  description?: string;
  onAddToCart?: () => void;
}

const ProductCard = ({
  id,
  title,
  price,
  image,
  description,
  onAddToCart,
}: ProductCardProps) => {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        {description && <p className="product-description">{description}</p>}
        <div className="product-price">${price.toFixed(2)}</div>
        <button
          className="add-to-cart-button"
          onClick={onAddToCart}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 