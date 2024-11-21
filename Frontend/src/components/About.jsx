import React from 'react';
import about from '../../public/frontend_assets/food_21.png';
import chefIcon from '../../public/frontend_assets/chef.png';
import menuIcon from '../../public/frontend_assets/menuIcon.jpg';
import cateringIcon from '../../public/frontend_assets/catering.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <div>
        <Navbar />
        <div className="mt-3 min-h-screen bg-gray-50 py-10 dark:bg-slate-900 dark:text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center mb-8 text-red-600">About Our Restaurant</h1>

            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <img
                src={about}
                alt="Restaurant"
                className="rounded-lg shadow-lg mb-4 md:mb-0 md:w-1/3"
              />
              <div className="md:w-2/3 md:ml-6">
                <p className="text-lg mb-4">
                  Welcome to our restaurant! We are passionate about offering a diverse menu filled with delicious dishes crafted from the freshest ingredients.
                </p>
                <p className="text-lg">
                  Our commitment to quality and service ensures that every meal is a memorable experience.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-semibold mb-4 text-red-600">Our Mission</h2>
            <p className="text-lg mb-8">
              Our mission is to create a dining experience that brings joy and satisfaction to our customers. We believe in the power of good food to bring people together and create lasting memories.
            </p>

            <h2 className="text-3xl font-semibold mb-4 text-red-600">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white shadow-lg rounded-lg p-6 text-gray-600 hover:scale-105 hover:border border-red-500 transition duration-300 flex flex-col items-center">
                <img src={menuIcon} alt="Delicious Menu" className="w-24 h-24 mb-4" />
                <h3 className="font-bold text-2xl mb-2 text-center">Delicious Menu</h3>
                <p className="text-center">A variety of dishes crafted to suit all tastes and preferences.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-gray-600 hover:scale-105 hover:border border-red-500 transition duration-300 flex flex-col items-center">
                <img src={chefIcon} alt="Seasonal Specials" className="w-24 h-24 mb-4" />
                <h3 className="font-bold text-2xl mb-2 text-center">Seasonal Specials</h3>
                <p className="text-center">Enjoy our chef's seasonal creations and special offers.</p>
              </div>
              <div className="bg-white shadow-lg rounded-lg p-6 text-gray-600 hover:scale-105 hover:border border-red-500 transition duration-300 flex flex-col items-center">
                <img src={cateringIcon} alt="Catering Services" className="w-24 h-24 mb-4" />
                <h3 className="font-bold text-2xl mb-2 text-center">Catering Services</h3>
                <p className="text-center">Let us cater your next event with our customized menus.</p>
              </div>
            </div>

            <h2 className="text-3xl font-semibold mb-4 text-red-600">Join Us</h2>
            <p className="text-lg font-semibold mb-4">
              Whether you're here for a quick bite or a special occasion, we invite you to enjoy our hospitality and delicious food. Thank you for dining with us!
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
