import React from 'react'
import Navbar from '.././components/Navbar'
import Menu from '.././components/Menu'
import FoodList from '.././components/FoodList'
import Footer from '.././components/Footer'
import HeroSection from '.././components/HeroSection';

function Home() {
  return (
    <>
    <div>
    <Navbar />
    <HeroSection />
     <Menu />
     <FoodList />
     <Footer /> 
    </div>
    </>
  )
}

export default Home
