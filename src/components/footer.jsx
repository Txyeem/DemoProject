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
          <h1 className='text-white pb-7 text-[15px] font-poppins font-light opacity-[65%]'>Column 4</h1>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Privacy Policy</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Terms & Conditions</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">Return Policy</p>
          {/* Add more rows of text for column 4 here */}
        </div>
        <div className='col-span-1'>
          <h1 className='text-white pb-7 text-[15px] font-poppins font-light opacity-[65%]'>Column 5</h1>
          <p className="text-white py-2 text-[17px] font-poppins font-light">support@brainwave.io</p>
          <p className="text-white py-2 text-[17px] font-poppins font-light">+133-394-3439-1435</p>
          {/* Add more rows of text for column 5 here */}
        </div>
      </div>

      <hr className="border-[#292F41] my-4 w-[1020px] mx-auto" />
      <p className="text-white text-center">Hello</p>

    </div>
  );
}

export default Footer;
