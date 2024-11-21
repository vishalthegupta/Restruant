import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { menuPage } from '../../public/frontend_assets/assets';
import addIcon from '../../public/frontend_assets/add_icon_white.png';

function MenuPage() {
  return (
    <div>
      <Navbar />
      <h1 className='p-4 text-center font-bold text-2xl text-red-500'>Discover Your Favorites: A Curated Selection of Top Picks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
        {menuPage.map((product, index) => (
          <div key={index} className="mt-3 card bg-base-100 shadow-xl flex flex-col transition-transform transform hover:scale-105 hover:border border-red-500  duration-300">
            <figure>
              <img
                src={product.image}
                alt={product.menu_name}
                className="h-45 w-full object-cover"
              />
            </figure>
            <div className="card-body flex flex-col">
              <h2 className="card-title font-semibold text-md truncate mr-4 text-red-500">
                {product.name}
              </h2>
              <p className="text-sm text-slate-600 mt-2">
                {product.description || 'Food that touches your soul and makes you feel alive'}
              </p>
              <div className="card-actions flex items-center justify-between mt-auto">
                <div className="text-red-500 font-bold">
                  ${product.price.toFixed(2)} {/* Ensuring price is formatted correctly */}
                </div>
                <a href="#" aria-label={`Add ${product.name} to cart`}>
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-red-300 rounded-full transition-transform transform hover:scale-125 duration-300">
                    <img
                      src={addIcon}
                      alt="Add"
                      className="w-6 h-6"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default MenuPage;
