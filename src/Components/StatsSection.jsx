import React from 'react';

const StatsSection = () => {
  return (
    <div className='bg-blue-500  container mx-auto'>

      <div className=" flex justify-evenly p-6  shadow">
        <div className=" text-center text-white">
          <h1 className='text-2xl md:text-4xl font-bold ' >50k+</h1>
          <p className='text-xl md:text-2xl font-semibold'>Active Users</p>
        </div>

         <div className="divider divider-accent lg:divider-horizontal"></div>

        <div className=" text-white text-center">
          <h1 className='text-2xl md:text-4xl font-bold '>200+</h1>
          <p  className='text-xl md:text-2xl font-semibold'>Premium Tools</p>
        </div>

         <div className="divider divider-accent lg:divider-horizontal"></div>

        <div className=" text-white text-center">
         <h1 className='text-2xl md:text-4xl font-bold '>4.9</h1>
         <p className='text-xl md:text-2xl font-semibold'>Rating</p>
        </div>
      </div>

    </div>
  );
};

export default StatsSection;