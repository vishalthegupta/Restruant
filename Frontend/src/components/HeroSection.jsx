import React from 'react';
import banner_img from '../../public/frontend_assets/Hero_img.jpg'


const HeroSection = () => {
  return (
    <div className="px-16 mt-5">
      <section className="relative bg-gray-100 h-96 flex items-end">
        <img 
          src={banner_img} 
          alt="Hero Background" 
          className="w-full h-full object-cover rounded-md"
        />
        <div className="absolute bottom-10 left-10 text-left bg-opacity-50 p-6 rounded-md">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome to Our Website</h1>
          <p className="text-gray-100 text-md max-w-2xl">
          Experience the best of culinary delights with our diverse menu. Order your favorite dishes and enjoy a delightful dining experience at home.Give your memories something tasty something spicy to remember          </p>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
