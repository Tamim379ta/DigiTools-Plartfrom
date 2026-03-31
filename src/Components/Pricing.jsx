import React from 'react';

const Pricing = () => {
  return (
    <div className='mt-20 container mx-auto '>
      <div className='text-center space-y-4'>
        <h1 className='text-3xl font-bold '>Simple, Transparent Pricing</h1>
        <p className='text-gray-400'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 md:p-10 gap-10 items-stretch '>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">Starter</h2>
              <p className='text-gray-400'>Perfect for getting started</p>
              <span className="text-xl font-bold">$0 <span className='text-gray-400'>/month</span></span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-[16px]">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Access to 10 free tools</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Basic templates</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Community support</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>1 project per month</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn mt-15 btn-primary btn-block rounded-3xl">Get Started Free</button>
            </div>
          </div>
        </div>

        <div className="card bg-primary text-white shadow-sm relative">
          <div className='badge badge-warning -mt-5 ml-30 p-5 rounded-3xl absolute'>Most Popular</div>
          <div className="card-body">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">Pro</h2>
              <p className='text-gray-400'>Best for professionals</p>
              <span className="text-xl font-bold">$29 <span className='text-gray-400'>/month</span></span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-[16px]">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Access to all premium tools</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Unlimited templates</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Priority support</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Unlimited projects</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Cloud sync</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Advanced analytics</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn  bg-white rounded-3xl btn-block text-primary">Start Pro Trial</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl font-bold">Enterprise</h2>
              <p className='text-gray-400'>For teams and businesses</p>
              <span className="text-xl font-bold">$99 <span className='text-gray-400'>/month</span></span>
            </div>
            <ul className="mt-6 flex flex-col gap-2 text-[16px]">
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Everything in Pro</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Team collaboration</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Custom integrations</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Dedicated support</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>SLA guarantee</span>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                <span>Custom branding</span>
              </li>
            </ul>
            <div className="mt-6">
              <button className="btn btn-primary rounded-3xl btn-block">Contact Sales</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;