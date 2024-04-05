import React from 'react';

function Pricing() {
  return (
    <section className="flex flex-col items-center justify-center pt-20">
    <div className='flex'>
    <h1 className="text-[19px] mb-8 font-poppins font-light mr-4">Monthly</h1>

    <div className="relative inline-block w-[72px] h-[33px] bg-[#161C2D] opacity-[15%] rounded-full shadow-inner">
    <input type="checkbox" className="opacity-0 absolute w-0 h-0" />
    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 inline-block w-[21px] h-[21px] bg-white rounded-full shadow transition-transform duration-300 ease-in-out"></span>
    </div>
    <h1 className="text-[19px] mb-8 font-poppins font-light mx-4">Yearly</h1>
    <h1 className="text-[13px] mb-8 font-poppins mr-4 px-4 p-2 font-semibold rounded-3xl bg-[#473BF0] bg-opacity-10 text-[#473BF0]">SAVE 25%</h1>
    </div>
      <div className="flex gap-4">
        <div className="bg-gray-200 p-4 rounded-lg text-center">
          <p>Hello</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-center">
          <p>Hello</p>
        </div>
        <div className="bg-gray-200 p-4 rounded-lg text-center">
          <p>Hello</p>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
