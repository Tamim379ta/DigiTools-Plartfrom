import React from 'react';
import Img1 from '../assets/user.png'
import Img2 from '../assets/package.png'
import Img3 from '../assets/rocket.png'

const Faq = () => {
  return (
    <div className='container mx-auto my-20'>

      <div className='text-center space-y-4'>
        <h1 className='text-4xl  font-bold'>Get Started in 3 Steps</h1>
        <p className='text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 mt-10  gap-10 px-5 lg:px-20 '>

        <div className='shadow-2xl p-5 rounded-2xl space-y-3'>
          <div className='flex justify-between' >
            <div></div>
            <div className='badge badge-primary rounded-4xl p-4 font-semibold'>01</div>
          </div>
          <div className='flex justify-center'>
            <img
            className='bg-zinc-200 p-3 rounded-[50%]'
            src={Img1} alt=""
          />
          </div>
          <div className='text-center space-y-3'>
            <h1 className='text-2xl font-semibold '>Create Account</h1>
            <p>Sign up for free in seconds. No credit card required to get started.</p>
          </div>
        </div>


        <div className='shadow-2xl p-5 rounded-2xl space-y-3'>
          <div className='flex justify-between' >
            <div></div>
            <div className='badge badge-primary rounded-4xl p-4 font-semibold'>01</div>
          </div>
          <div className='flex justify-center'>
            <img
            className='bg-zinc-200 p-3 rounded-[50%]'
            src={Img2} alt=""
          />
          </div>
          <div className='text-center space-y-3'>
            <h1 className='text-2xl font-semibold '>Choose Products</h1>
            <p>Browse our catalog and select the tools that fit your needs.</p>
          </div>
        </div>


        <div className='shadow-2xl p-5 rounded-2xl space-y-3'>
          <div className='flex justify-between' >
            <div></div>
            <div className='badge badge-primary rounded-4xl p-4 font-semibold'>01</div>
          </div>
          <div className='flex justify-center'>
            <img
            className='bg-zinc-200 p-3 rounded-[50%]'
            src={Img3} alt=""
          />
          </div>
          <div className='text-center space-y-3'>
            <h1 className='text-2xl font-semibold '>Start Creating</h1>
            <p>Download and start using your premium tools immediately.</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Faq;