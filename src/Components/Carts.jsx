import React, { use, useState } from 'react';
import Cart from './Cart';

const Carts = ({ dataPromise }) => {

  const data = use(dataPromise);

  const [isSelected, setSelected] = useState("products")
  return (
    <div className='container mx-auto mt-20'>

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
              'btn px-10 rounded-3xl'}>Cart</button>
        </div>

        <div>
          {
            isSelected === "products" ?
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-15 p-5 md:p-0 mt-10'>
                {
                  data.map(tools => <Cart tools={tools} />)
                }
              </div> :

              ""

          }
        </div>

      </div>

    </div>
  );
};

export default Carts;