import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience' ;
import Project from './components/Project' ;
import ContactUs from './components/ContactUs';

export default function App() {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased'>

      <div className='fixed top-0 -z-10 h-full w-full'>

      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

    
    <div className='container mx-auto px-20'>
      <Navbar/>
      <Hero />
      <About />
      <Technologies />
      <Experience />
      <Project />
      <ContactUs />
    </div>
    </div>
  )
}

