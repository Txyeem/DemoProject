import React from 'react';
import '../app/globals.css';

function Pricing() {
  return (
    <section className="flex flex-col items-center justify-center pt-20">
    <div className='flex pb-8'>
    <h1 className="text-[19px] mb-8 font-poppins font-light mr-4">Monthly</h1>

    <div className="relative inline-block w-[72px] h-[33px] bg-[#161C2D] opacity-[15%] rounded-full shadow-inner">
    <input type="checkbox" className="opacity-0 absolute w-0 h-0" />
    <span className="absolute left-2 top-1/2 transform -translate-y-1/2 inline-block w-[21px] h-[21px] bg-white rounded-full shadow transition-transform duration-300 ease-in-out"></span>
    </div>
    <h1 className="text-[19px] mb-8 font-poppins font-light mx-4">Yearly</h1>
    <h1 className="text-[13px] mb-8 font-poppins mr-4 px-4 p-2 font-semibold rounded-3xl bg-[#473BF0] bg-opacity-10 text-[#473BF0]">SAVE 25%</h1>
    </div>


      <div className="flex gap-8">

      {/* 1st card */}

      <div className="bg-white border border-[#E7E9ED] p-4 rounded-xl min-w-[349px] min-h-[604px]">
            <p className='p-8 font-poppins font-semibold text-[#473BF0]'>STARTER</p>
            <div className="flex pl-8 mt-4 items-end pt-3">
                <span className="text-[24px] font-poppins font-semibold">$</span>
                <span className="text-8xl font-poppins font-semibold">19</span>
                <span className="text-[17px] font-poppins pl-1">/month</span>
            </div>
            <p className='p-8 text-[15px] font-poppins font-extralight text-[#161C2D] opacity-[70%] pb-12'>billed monthly</p>

            <div className="flex flex-col pl-8">
                <div className="flex items-center py-3">
                    <span className="ml-1 checkmark"></span>
                    <span className="mr-2 ml-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">Commercial License</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="ml-1 checkmark"></span>
                    <span className="mr-2 ml-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">100+ HTML UI Elements</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="ml-1 checkmark"></span>
                    <span className="mr-2 pl-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">01 Domain Support</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="cross"></span>
                    <span className="mr-2 pl-1 text-[17px] font-poppins font-extralight text-[#161C2D] opacity-[70%]">6 Month Premium Support</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="cross"></span>
                    <span className="mr-2 pl-1 text-[17px] font-poppins font-extralight text-[#161C2D] opacity-[70%]">Lifetime Updates</span>
                </div>
            </div>

            <div className='ml-8 pt-6 relative'>
                <button className='py-5 px-7 bg-[#473BF0] bg-opacity-[8%] rounded-xl font-poppins text-[17px] font-semibold text-[#473BF0] relative z-10'>
                    <span className="text">Start Free Trial</span>
                    <span className="arrow-svg pl-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#473BF0" viewBox="0 0 256 256">
                          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                        </svg>
                    </span>
                </button>
            </div>

            <p className='px-8 pt-6 text-[15px] font-poppins font-extralight text-[#161C2D] opacity-[70%] pb-8'>No credit card required</p>
        </div>

        {/* 2nd card */}

        <div className="bg-white border border-[#E7E9ED] p-4 rounded-xl min-w-[349px] min-h-[604px]">
          <p className='p-8 font-poppins font-semibold text-[#473BF0]'>STANDARD</p>
          <div className="flex pl-8 mt-4 items-end pt-3">
                <span className="text-[24px] font-poppins font-semibold">$</span>
                <span className="text-8xl font-poppins font-semibold">49</span>
                <span className="text-[17px] font-poppins pl-1">/month</span>
            </div>
            <p className='p-8 text-[15px] font-poppins font-extralight text-[#161C2D] opacity-[70%] pb-12'>billed monthly</p>

            <div className="flex flex-col pl-8">
                <div className="flex items-center py-3">
                    <span className="ml-1 checkmark"></span>
                    <span className="mr-2 ml-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">Commercial License</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="ml-1 checkmark"></span>
                    <span className="mr-2 ml-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">100+ HTML UI Elements</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="ml-1 checkmark"></span>
                    <span className="mr-2 pl-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">01 Domain Support</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="checkmark"></span>
                    <span className="mr-2 pl-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">6 Month Premium Support</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="cross"></span>
                    <span className="mr-2 pl-3 text-[17px] font-poppins font-extralight text-[#161C2D] opacity-[70%]">Lifetime Updates</span>
                </div>
            </div>

            <div className='ml-8 pt-6 relative'>
                <button className='py-5 px-7 bg-[#473BF0]  rounded-xl font-poppins text-[17px] font-semibold text-white relative z-10'>
                    <span className="text">Start Free Trial</span>
                    <span className="arrow-svg pl-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ffffff" viewBox="0 0 256 256">
                          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                        </svg>
                    </span>
                </button>
            </div>

            <p className='px-8 pt-6 text-[15px] font-poppins font-extralight text-[#161C2D] opacity-[70%] pb-8'>No credit card required</p>
        </div>

        {/* 3rd card */}

        <div className="bg-white border border-[#E7E9ED] p-4 rounded-xl min-w-[349px] min-h-[604px]">
          <p className='p-8 font-poppins font-semibold text-[#473BF0]'>PREMIUM</p>
          <div className="flex pl-8 mt-4 items-end pt-3">
                <span className="text-[24px] font-poppins font-semibold">$</span>
                <span className="text-8xl font-poppins font-semibold">99</span>
                <span className="text-[17px] font-poppins pl-1">/month</span>
            </div>
            <p className='p-8 text-[15px] font-poppins font-extralight text-[#161C2D] opacity-[70%] pb-12'>billed monthly</p>

            <div className="flex flex-col pl-8">
                <div className="flex items-center py-3">
                    <span className="ml-1 checkmark"></span>
                    <span className="mr-2 ml-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">Commercial License</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="ml-1 checkmark"></span>
                    <span className="mr-2 ml-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">100+ HTML UI Elements</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="ml-1 checkmark"></span>
                    <span className="mr-2 pl-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">01 Domain Support</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="checkmark"></span>
                    <span className="mr-2 pl-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">6 Month Premium Support</span>
                </div>
                <div className="flex items-center py-3">
                    <span className="checkmark"></span>
                    <span className="mr-2 pl-3 text-[17px] font-poppins font-extralight text-[#161C2D] ">Lifetime Updates</span>
                </div>
            </div>

            <div className='ml-8 pt-6 relative'>
                <button className='py-5 px-7 bg-[#473BF0] bg-opacity-[8%] rounded-xl font-poppins text-[17px] font-semibold text-[#473BF0] relative z-10'>
                    <span className="text">Start Free Trial</span>
                    <span className="arrow-svg pl-7">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#473BF0" viewBox="0 0 256 256">
                          <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                        </svg>
                    </span>
                </button>
            </div>

            <p className='px-8 pt-6 text-[15px] font-poppins font-extralight text-[#161C2D] opacity-[70%] pb-8'>No credit card required</p>
        </div>

      </div>


    </section>
  );
}

export default Pricing;
