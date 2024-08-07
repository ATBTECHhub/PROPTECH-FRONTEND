import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import News from '../components/News'
import Features from '../components/Features'

const Home = () => {
  return (
    <>
    <section className="bg-heroImage bg-cover bg-center">
        <Navbar />
        <Herosection />
        
      </section>
      <div>
        <News />
        <Features />
      </div>
    </>
    
    
  )
}

export default Home