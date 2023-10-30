import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-12  mx-auto px-4 text-emerald-700'>
      <h1 className='text-3xl font-bold text-[#00df9a] cursor-pointer'>DigitalDynamo</h1>
      <ul className='hidden md:flex md:content-between'>
        <li className='p-2  cursor-pointer hover:bg-slate-100 hover:rounded-3xl'>Home</li>
        <li className='p-2  cursor-pointer hover:bg-slate-100 hover:rounded-3xl'>Company</li>
        <li className='p-2  cursor-pointer hover:bg-slate-100 hover:rounded-3xl'>Resources</li>
        <li className='p-2  cursor-pointer hover:bg-slate-100 hover:rounded-3xl'>About</li>
        <li className='p-2  cursor-pointer hover:bg-slate-100 hover:rounded-3xl'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <ul className={nav ? 'fixed left-0 top-0 w-[65%] h-full md:hidden  border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 cursor-pointer'>DigitalDynamo</h1>
          <li  className='p-4 border-b border-gray-600 hover:bg-slate-100 hover:rounded-3xl'>
            <a href="https://www.facebook.com">Home</a>
            </li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:bg-slate-100 hover:rounded-3xl'>Company</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:bg-slate-100 hover:rounded-3xl'>Resources</li>
          <li className='p-4 border-b border-gray-600 cursor-pointer hover:bg-slate-100 hover:rounded-3xl'>About</li>
          <li className='p-4'>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
