import React from 'react';

const products = [
  { name: "Acacia Honey", price: "$12.95", imgSrc: "/ascia.jpeg", category: "Honey", rating: 4.5 },
  { name: "Honeycomb", price: "$15.95", imgSrc: "/honeycomb.png", category: "Honey", rating: 4.7 },
  { name: "Wildflower Honey", price: "$13.95", imgSrc: "/wildflowerhoney.jpeg", category: "Honey", rating: 4.6 },
];

const renderStars = (rating:number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.1 2.7 1.3-5.6-4.6-4.5 6.2-.5L10 1l2.2 6.3 6.2.5-4.6 4.5 1.3 5.6L10 15z"/></svg>
      ))}
      {halfStar && (
        <svg className="w-4 h-4 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10 15l-5.1 2.7 1.3-5.6-4.6-4.5 6.2-.5L10 1l2.2 6.3 6.2.5-4.6 4.5 1.3 5.6L10 15z" opacity="0.5"/></svg>
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.293 7.293A1 1 0 014 8V20a1 1 0 001 1h14a1 1 0 001-1V8a1 1 0 00-1.293-.707L12 10.586 5.293 7.293z"/></svg>
      ))}
    </div>
  );
};

const Products = () => {
  return (
    <section className="py-12 bg-gray-100 text-center">
      <h2 className="text-4xl font-extrabold mb-12 text-gray-800">Our Products</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {products.map((product) => (
          <div key={product.name} className="w-96 md:w-1/3 lg:w-1/4 p-4 transform transition-transform hover:scale-105">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={product.imgSrc} alt={product.name} className="w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-700 mb-2">{product.name}</h3>
                <p className="text-lg text-yellow-600 font-semibold mb-2">{product.price}</p>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex items-center justify-center mb-2">
                  {renderStars(product.rating)}
                  <span className="ml-2 text-gray-700 font-semibold">{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
