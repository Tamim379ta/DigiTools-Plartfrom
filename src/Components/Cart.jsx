import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({ c,cart, setCart }) => {
  const handelDeleteBtn = () => {
    const filterCart = cart.filter(f => c.name !== f.name)
    setCart(filterCart)
    toast.error("Item Deleted")
  }

  return (
    <>
      <div className='mt-5'>
        <div className='flex justify-between p-5 rounded-2xl border-2 border-gray-200 bg-base-200' >
          <div className='flex gap-4'>
            <img className='h-10 p-1 shadow-xs rounded-2xl' src={c.image} alt="" />
            <div className='flex flex-col'>
              <h1 className='font-bold '>{c.name}</h1>
              <p>${c.price}</p>
            </div>
          </div>
          <button onClick={() => handelDeleteBtn(c)} className='text-red-500'>Remove</button>
        </div>
      </div>


    </>
  );
};

export default Cart;