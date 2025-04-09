import React from 'react';
import ProductCard from '../../components/ui/ProductCard/ProductCard'

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: 'Sytherine',
      description: 'Stylish cafe chair',
      price: 2500000,
      oldPrice: 3500000,
      discount: 30,
      image: '/IE204_P21/public/labubu_1.webp'
    },
  ]
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Sản phẩm</h1>
        <div className="text-sm text-gray-600">
          <span>Trang chủ</span>
          <span className="mx-2">›</span>
          <span>Sản phẩm</span>
        </div>
      </div>

      <div className="bg-[#73C6D9]/[0.2] py-4">
        <div className="max-w-[1200px] mx-auto px-32 flex items-center">
          <div className="w-[180px] flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
            </svg>
            <span className="font-medium">Bộ lọc</span>
          </div>

          <div className="flex-1 flex items-center justify-center gap-8">
            <button className="bg-white px-4 py-2 rounded-md flex items-center gap-2 min-w-[140px] justify-between">
              <span>Loại sản phẩm</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <button className="bg-white px-4 py-2 rounded-md flex items-center gap-2 min-w-[140px] justify-between">
              <span>Màu sắc</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            <button className="bg-white px-4 py-2 rounded-md flex items-center gap-2 min-w-[140px] justify-between">
              <span>Kích thước</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

          <div className="w-[180px] flex items-center justify-end gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
            </svg>
            <button className="bg-white px-4 py-2 rounded-md flex items-center gap-2 min-w-[140px] justify-between">
              <span>Sắp xếp</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <ProductCard 
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </div>
  );
};


export default ProductsPage; 