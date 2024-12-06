import React from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
}

const ProductCard = ({ title, description, price, image, tag }: ProductCardProps) => {
  return (
    <div className="group bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {tag && (
          <span className="absolute top-2 left-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm transform transition hover:scale-105">
            {tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-white text-xl font-semibold mb-2 group-hover:text-emerald-300 transition-colors">
          {title}
        </h3>
        <p className="text-white/70 text-sm mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-white font-bold group-hover:text-emerald-300 transition-colors">
            ${price.toFixed(2)}
          </span>
          <button className="bg-emerald-500 text-white px-4 py-2 rounded-full transition-all duration-300 hover:bg-emerald-400 hover:shadow-lg active:scale-95">
            Order now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;