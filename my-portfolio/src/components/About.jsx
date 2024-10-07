import React from 'react';
import mern from './images/mern.png';
import './css/about.css'; 

const About = () => {
  return (
    <div className='bg-gradient-to-br from-black from-50% to-white text-white'>
      <h2 className='text-center text-[30px] md:text-[50px] animated-title'>About Me</h2>
      <div className='flex flex-col md:flex-row gap-12 md:gap-32'>
        <div className='flex-1 md:ml-40'>
          <p className='mt-8 md:mt-20 text-[16px] md:text-[20px] animated-text'>
            Hello! I’m Tasnime Boukhaddeja, a passionate and detail-oriented full stack developer with a knack for building robust and scalable web applications. With a strong foundation in both front-end and back-end technologies, I thrive in environments where I can bring creative ideas to life through code. Innovative full-stack developer with strong problem-solving skills, driven by integrity and a passion for leading impactful AI projects.
          </p>
        </div>
        <div className='flex-1'>
          <img className='h-[150px] w-full md:h-[200px] md:w-[450px] mt-8 md:mt-20 animate-fade-in' src={mern} alt='About' />
        </div>
      </div>
      <section id="skills" className="p-4 md:p-8">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-200 underline decoration-pink-500 decoration-4 underline-offset-4">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            JavaScript
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            Python
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            TypeScript
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            Sequelize
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            MySQL
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            MongoDB
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            React
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            Node.js
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            Next.js
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            Socket.io
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            Express.js
          </div>
          <div className="skill bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
            React Native
          </div>
        </div>
      </div>
    </section>
    
      <section id="soft-skills" className="p-4 md:p-8">
      <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-200 underline decoration-pink-500 decoration-4 underline-offset-4">
        Soft Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
          Collaboration and teamwork
        </div>
        <div className="bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
          Continuous learning
        </div>
        <div className="bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
          Project management
        </div>
        <div className="bg-gray-700 hover:bg-pink-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 p-4 shadow-lg rounded text-center">
          Adaptability
        </div>
      </div>
    </div>
  </section>
  
    </div>
  );
};

export default About;
