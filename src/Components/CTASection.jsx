import React from 'react';

const CTASection = () => {
  return (
    <div className='bg-primary p-20'>

      <div className='text-center space-y-5'>

        <h1 className='text-4xl font-bold text-white'>Ready to Transform Your Workflow?</h1>

        <p className='text-gray-300'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>

        <div className='flex justify-center gap-5'>
          <button className='btn rounded-3xl bg-white text-primary'>EXplore Products</button>
          <button className='btn btn-outline text-white rounded-3xl'>View Pricing</button>
        </div>

        <p className='text-gray-400'>14-day free trial • No credit card required • Cancel anytime</p>

      </div>
      
    </div>
  );
};

export default CTASection;