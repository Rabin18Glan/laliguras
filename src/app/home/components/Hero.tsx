import React from 'react';
import 'animate.css'
const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-white  text-center md:py-32 px-8 md:px-32 lg:px-64 py-10  flex flex-col-reverse md:flex-row items-center justify-around" >
     
    <div>
    <h1 className="text-4xl md:text-6xl font-extrabold text-yellow-600 mb-4 animate__animated animate__fadeIn animate__delay-0.5s">Honey from Laliguras Bee Farm</h1>
        <p className="text-lg md:text-2xl text-gray-500 mb-8 animate__animated animate__fadeIn animate__delay-1s">
          Pure & 100% Natural Honey. Beekeeping since 2015.
        </p>
        <a href='/about-us' className="px-8 py-4 hover:text-white bg-orange-500 text-white rounded-full shadow-lg hover:bg-yellow-700 transform transition-transform duration-300 hover:scale-105 animate__animated animate__fadeIn animate__delay-3s">
          Learn More
        </a>
    </div>
        <div className="md:mt-12  animate__animated animate__fadeIn md:animate__delay-2s animate__delay-0.2s">
          <img src="/laliguras/honeyback.png" alt="Honeycomb" className="min-w-60  rounded-lg "/>
        </div>
    </section>
  );
}

export default Hero;
