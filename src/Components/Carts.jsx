import React from 'react';
import Cart from './Cart';
import { CiShoppingCart } from 'react-icons/ci';
import { toast } from 'react-toastify';

const Carts = ({ cart, setCart }) => {

  const totalPrice = cart.reduce((sum, item) => sum + Number(item.price), 0)
  const handelProceed = () => {
    setCart([])
    toast.success("Proceed Success")
  }


  return (
    <div className='shadow-lg rounded-2xl p-5'>
      <h1 className='text-2xl font-bold'>Your Cart</h1>

      {
        cart.length === 0 ?
          (<>
            <div className='text-center py-10 '>
              <CiShoppingCart className='text-8xl container mx-auto' />
              <h1 className='text-2xl'>Your Cart Is Empty</h1>
            </div>
          </>) :
          (
            cart.map(c => {
              return (
                <>
                  <Cart c={c} setCart = {setCart} cart={cart} />

                </>
              )
            })
          )
      }
      {
        cart.length === 0 ? "" :
        <>
          <div className=' flex justify-between p-5'>
            <h1 className='text-xl font-bold'>Total</h1>
            <span className='text-xl font-bold'>$<span>{totalPrice}</span></span>
          </div>

          <div>
            <button
              onClick={() => handelProceed()}
              className='btn btn-block btn-primary rounded-3xl py-5 text-xl'
            >Proceed To Checkout</button>
          </div>
        </>
      }
    </div >
  );
};

export default Carts;