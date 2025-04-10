import React from 'react';
import ProductCard from '../../components/products/ProductCard/ProductCard';
import './products.css';

export default function ProductsPage() {
  // Dữ liệu mẫu cho các sản phẩm
  const products = [
    {
      id: 1,
      name: 'Syltherine',
      description: 'Stylish cafe chair',
      currentPrice: 2500000,
      originalPrice: 3500000,
      discountPercentage: 30,
      imageUrl: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
    {
      id: 2,
      name: 'Leviosa',
      description: 'Stylish cafe chair',
      currentPrice: 2500000,
      imageUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
    {
      id: 3,
      name: 'Lolito',
      description: 'Luxury big sofa',
      currentPrice: 7000000,
      originalPrice: 14000000,
      discountPercentage: 50,
      imageUrl: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
    {
      id: 4,
      name: 'Respira',
      description: 'Outdoor bar table and stool',
      currentPrice: 5000000,
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    },
  ];

  return (
    <div className="products-page">
      <h1 className="products-title">Sản phẩm nổi bật</h1>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            discountPercentage={product.discountPercentage}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}