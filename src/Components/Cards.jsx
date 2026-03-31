import React, { use, useState } from 'react';
import Card from './Card';
import Carts from './Carts';
import Navbar from './Navbar';

const Cards = ({ dataPromise, }) => {

  const data = use(dataPromise);
  const [cart, setCart] = useState([])




  const [isSelected, setSelected] = useState("products")
  return (

    <div className='container mx-auto mt-20'>

      <Navbar className='disabled:none' cart={cart} />

      <div>
        <div className='text-center space-y-4'>
          <h1 className='text-5xl font-bold'>Premium Digital Tools</h1>
          <p className='text-gray-400'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity</p>
        </div>

        <div className='mt-5 flex justify-center'>
          <button onClick={() => setSelected("products")}
            className={isSelected === "products" ?
              'btn px-10 rounded-3xl  btn-primary' :
              'btn px-10 rounded-3xl'}>Products</button>
          <button onClick={() => setSelected("cart")}
            className={isSelected === "cart" ?
              'btn px-10 rounded-3xl  btn-primary' :
              'btn px-10 rounded-3xl'}>Cart(<span>{cart.length}</span>)</button>
        </div>

        <div>
          {
            isSelected === "products" ?
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-15 p-5 md:p-0 mt-10'>
                {
                  data.map(tools => <Card
                    cart={cart}
                    setCart={setCart}
                    tools={tools} />)
                }
              </div> :

             <Carts cart={cart} setCart={setCart} />

          }
        </div>

      </div>

    </div>
  );
};

export default Cards;