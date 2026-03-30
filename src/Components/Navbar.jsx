import React from 'react';
import { CiShoppingCart } from 'react-icons/ci';

const Navbar = () => {
  return (
    <div className='flex shadow-2xs justify-between container mx-auto text-center py-5'>

      <div>
        <h1 className='text-4xl  font-bold text-blue-500'>DigiTools</h1>
      </div>

      <ul className='hidden  md:flex  text-xl py-2 gap-5'>
        <li><a href="">Products</a></li>
        <li><a href="">Features</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">Testimonials</a></li>
        <li><a href="">FAQ</a></li>
      </ul>

      <div className='flex gap-3  text-center'>
        <CiShoppingCart className='text-2xl mt-3' />
        <button className='btn'>Login</button>
        <button className='btn rounded-3xl btn-primary '>Get Started</button>
      </div>

    </div>
  );
};

export default Navbar;