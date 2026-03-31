import React from 'react';
import HeroImg from '../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaRegDotCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='container mx-auto'>
      <div className="hero space-y-4 bg-base-200 min-h-screen">
        <div className="hero-content gap-10 flex-col lg:flex-row-reverse">
          <img
            src={HeroImg}
          />
          <div>
            <div className="badge badge-outline badge-primary rounded-3xl text-semibold"><FaRegDotCircle /> New: AI-Powered Tools Available</div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold">Supercharge Your <br />Digital Workflow</h1>
            <p className="py-6 text-xl">
              Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.Explore Products
            </p>
            <div className='flex gap-2'>
              <button className="btn btn-primary rounded-3xl ">Explore Products <FaArrowRightLong  /></button>
              <button className='btn flex btn-outline btn-primary rounded-3xl'><CiPlay1 /> Watch Now</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;