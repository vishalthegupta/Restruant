import React from 'react';
import { menu_list } from '../../public/frontend_assets/assets.js';
import { useNavigate } from 'react-router-dom';

function Menu() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/menu/${id}`); // Navigate to the dynamic route with id
  };

  return (
    <>
      <div>
        <section className="py-10">
          <div className="container mx-auto px-6">
            <h1 className='py-3 font-semibold text-xl text-red-500'>Explore Our Menu</h1>
            <p className='mb-6 text-md'>You can choose from a variety of foods at the comfort of your home. Your happiness and You are our first priority.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-8 gap-6">
              {menu_list.map((item) => (
                <div
                  key={item.id}
                  className="overflow-hidden shadow-md cursor-pointer" // Added cursor-pointer for better UX
                  onClick={() => handleClick(item.id)}
                >
                  <img
                    src={item.menu_image}
                    alt={item.menu_name}
                    className="w-full h-30 object-contain rounded-xl"
                  />
                  <div className="p-4 text-center">
                    <h3 className="text-md">{item.menu_name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <hr className='px-12 space-x-6' />
        <h2 className='space-x-12 px-20 mt-5 py-2 ml-4 font-bold text-xl text-red-500'>Top Dishes For You</h2>
      </div>
    </>
  );
}

export default Menu;
