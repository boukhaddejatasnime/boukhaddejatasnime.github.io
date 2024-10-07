import React from 'react';
import './css/projects.css';
import ween from "./images/ween.png";
import ecommerce from "./images/ecommerce.png";
import refactor from "./images/eco-refactor.png";

const Projects = () => {
  return (
    <div className='bg-gradient-to-br from-black from-50% to-white text-white'>
      <div>
        <h1 className='text-center text-[30px] md:text-[50px] animated-text'>My Projects</h1>

        {/* Ween App */}
        <div className="flex flex-col md:flex-row gap-6 p-6 mt-10 md:mt-32">
          <div className="flex-1">
            <a 
              className="text-2xl md:text-4xl ml-3 mt-6 md:mt-20 animated-text cursor-pointer hover transition-colors duration-300 text-pink-600" 
              href="https://github.com/Theases-App/ween-app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              ween-app
            </a>
            <p className="text-xs md:text-sm ml-3 animated-text mt-1 text-gray-400 font-semibold italic">
              <span className="text-lg">🔗</span> Tap the project name to dive into the details!
            </p>
            <div className="border-t-2 border-white my-4"></div>
            <div>
              <p className="text-base md:text-lg mt-4 ml-3 animated-text">
                Developed an application for reserving spots, organizing events, and purchasing tickets, with a venue map and post-reservation chat room.
              </p>
              <h4 className="mt-6 ml-3 text-xl md:text-2xl animated-text">Technologies Used</h4>
              <ul className="ml-3 mt-4 list-disc list-inside animated-text">
                <li>Front-End: React, React Native, JavaScript, Socket.io, chart.js, Cloudinary, jwt, Google Maps API</li>
                <li>Back-End: Node.js, Express.js</li>
                <li>Database: Sequelize</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img className="h-60 w-60 md:h-80 md:w-80 mt-8 md:mt-30 animated-image" src={ween} alt="ween"/>
          </div>
        </div>

        {/* E-commerce Refactor */}
        <div className="flex flex-col md:flex-row gap-6 p-6 mt-10 md:mt-32">
          <div className="flex-1 flex items-center justify-center">
            <img className="h-60 w-60 md:h-96 md:w-96 mt-8 md:mt-11 animated-image" src={refactor} alt="ecomerce-refactor"/>
          </div>
          <div className="flex-1">
            <a className="text-2xl md:text-4xl ml-3 mt-6 md:mt-20 animated-text" href="https://github.com/project-reformulation/e-commerce-refactor">e-commerce-refactor</a>
            <div className="border-t-2 border-white my-4"></div>
            <div>
              <p className="text-base md:text-lg mt-4 ml-3 animated-text">
              An application with improved product search, robust authentication via cookies, and enhanced profile editing features.
              </p>
              <h4 className="mt-6 ml-3 text-xl md:text-2xl animated-text">Technologies Used</h4>
              <ul className="ml-3 mt-4 list-disc list-inside animated-text">
                <li>Front-End: Next.js, Tailwind CSS, Bootstrap, TypeScript</li>
                <li>Back-End: Node.js, Express.js</li>
                <li>Database: Sequelize</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ShopTEAA */}
        <div className="flex flex-col md:flex-row gap-6 p-6 mt-10 md:mt-32">
          <div className="flex-1">
            <a className="text-2xl md:text-4xl ml-3 mt-6 md:mt-20 animated-text" href="https://github.com/shopsiteTEAA/shopTEAA">shopTEAA</a>
            <div className="border-t-2 border-white my-4"></div>
            <div>
              <p className="text-base md:text-lg mt-4 ml-3 animated-text">
              Provided an eCommerce app that streamlines product browsing, secure checkout, and order management.
              </p>
              <h4 className="mt-6 ml-3 text-xl md:text-2xl animated-text">Technologies Used</h4>
              <ul className="ml-3 mt-4 list-disc list-inside animated-text">
                <li>Front-End: JavaScript, React.js, Bootstrap, Tailwind</li>
                <li>Back-End: Node.js, Express.js</li>
                <li>Database: Sequelize</li>
              </ul>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img className="h-60 w-60 md:h-96 md:w-96 mt-8 md:mt-11 animated-image" src={ecommerce} alt="ecommerce"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
