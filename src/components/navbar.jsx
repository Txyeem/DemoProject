import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white p-4 flex justify-between items-center lg:mx-[250px] md:mx-[225px] sm:mx-[225px] mx-[225px]">
    <div className="text-black lg:text-[24px] md:text-3xl text-[24px] font-bold">Brainwave.io</div>
    <div className="flex">
      <button className="text-black text-[15px] font-gilroy font-semibold mx-5">Demos</button>
      <button className="text-black text-[15px] font-gilroy font-semibold mx-5">Page</button>
      <button className="text-black text-[15px] font-gilroy font-semibold mx-5">Support</button>
      <button className="text-black text-[15px] font-gilroy font-semibold mx-5">Contact</button>
      <div className="flex items-center">
          <div className="w-[1px] h-[24px] bg-[#473BF0] mx-3 opacity-[18%]"></div>
        </div>
      <button className="text-black text-[15px] font-gilroy font-semibold mx-5">Sign In</button>
      <button className="text-white bg-[#473BF0] px-[30px] py-[12px] ml-2 text-[15px] font-gilroy rounded-lg font-semibold">Sign Up</button>
    </div>
  </nav>
  );
}

export default Navbar;
