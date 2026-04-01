import React, { useState } from 'react';
import { MdDone } from 'react-icons/md';
import { toast } from 'react-toastify';

const Cart = ({ tools, cart, setCart }) => {

    const [buyTools, setBuyTools] = useState(false)
  

  const handelBuy = (tools) => {

    const isExist = cart.find(f => f.name === tools.name);
    if(isExist){
      toast.warning("Item Already Exist")
      return;
    }
    setBuyTools(true);
    setCart([...cart, tools]);
    toast.success("Item added to the cart")

  }

  return (
    <div className='shadow-md rounded-3xl  hover:scale-102 transition duration-300'>

      <div className="p-5">
        <div className='flex justify-between'>
          <div></div>
          <div
           className={`badge p-4 rounded-3xl ${tools.tagType === "new"? "badge-accent" : tools.tagType === "popular" ?"badge-secondary" : "badge-warning" } `}>
           {tools.tag}</div>
        </div>

        <div>
          <img
            className=' shadow-md p-3 rounded-3xl'
            src={tools.image} alt=""
          />
        </div>

        <div className='space-y-3 mt-3'>
          <h1 className='font-bold text-2xl'>{tools.name}</h1>

          <p>{tools.description}</p>

          <p>
            <span className='text-2xl font-bold'>${tools.price}</span>
            <span className='text-xl text-gray-400'>/{tools.period}</span>
          </p>

          <ul>
            <li className='flex font-semibold'>
              <MdDone className='text-green-500 text-2xl'/>
              {tools.features[0]}</li>
            <li className='flex font-semibold'>
              <MdDone className='text-green-500 text-2xl'/>
              {tools.features[1]}</li>
            <li className='flex font-semibold'>
              <MdDone className='text-green-500 text-2xl'/>
              {tools.features[2]}</li>
          </ul>

          <button type="button" onClick={() => handelBuy(tools)} className={`btn btn-block  py-5 rounded-3xl ${buyTools === true ? "btn-success" : "btn-primary"}`}>
            {
              buyTools === true ? "Add To Cart" : "Buy Now"
            }
          </button>

        </div>

      </div>

    </div>
  );
};

export default Cart;