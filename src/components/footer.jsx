import React from 'react';

function Footer() {
  return (
<div className='bg-[#161C2D] p-10'>
      <div className="grid grid-cols-5 gap-4 mx-[300px] text-center py-24">
        <div className='col-span-1'>
          <h1 className='text-white pb-7 text-[15px] font-poppins font-light opacity-[65%]'>Company</h1>
          <p className="text-white py-2 text-[17px] font-poppins font-light">About us</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Contact us</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Careers</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Press</p>
          {/* Add more rows of text for column 1 here */}
        </div>
        <div className='col-span-1'>
          <h1 className='text-white pb-7 text-[15px] font-poppins font-light opacity-[65%]'>Product</h1>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Features</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Pricing</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">News</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Help desk</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Support</p>
          {/* Add more rows of text for column 2 here */}
        </div>
        <div className='col-span-1'>
          <h1 className='text-white pb-7 text-[15px] font-poppins font-light opacity-[65%]'>Services</h1>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Digital Marketing</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Content Writing</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">SEO for Business</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">UI Design</p>
          {/* Add more rows of text for column 3 here */}
        </div>
        <div className='col-span-1'>
          <h1 className='text-white pb-7 text-[15px] font-poppins font-light opacity-[65%]'>Legal</h1>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Privacy Policy</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Terms & Conditions</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Return Policy</p>
          {/* Add more rows of text for column 4 here */}
        </div>
        <div className='col-span-1'>
          <h1 className='text-white pb-7 text-[15px] font-poppins font-light opacity-[65%]'>Contact us</h1>
          <p className="text-white py-2 text-[17px] font-poppins font-light">support@brainwave.io</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">+133-394-3439-1435</p>
          {/* Add more rows of text for column 5 here */}
        </div>
      </div>

      <hr className="border-[#292F41] my-4 w-[1020px] mx-auto" />
      <div className="flex justify-between items-center mx-[380px]">
        <p className="text-white opacity-[65%] text-[15px] font-extralight">© 2024 Copyright, All Right Reserved, Made by Tayeem</p>
        
      <div className="flex">

        <div className="mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="17" viewBox="0 0 50 50" fill="#ffffff">
          <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
          </svg>
        </div>

        <div className="mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="17" viewBox="0 0 30 30" fill="#ffffff">
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
        </svg>
        </div>

        <div className="mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="17" viewBox="0 0 50 50" fill="#ffffff">
        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
        </svg>
        </div>

        <div className="mr-4">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="17" viewBox="0 0 50 50" fill="#ffffff">
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg>
        </div>

        </div>


      </div>

      

    </div>
  );
}

export default Footer;
