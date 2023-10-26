import dynamic from 'next/dynamic';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Menu from './Menu';
import LoginBtn from './LoginBtn';

const Logo = dynamic(() => import('@/components/general/Logo'), {
  loading: () => (
    <div className='text-black   bg-opacity-90 backdrop-blur-md w-screen min-h-[7vh] py-4 px-5 '>Loading...</div>
  ),
});

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);


  useLayoutEffect(() => {
    // Use the window object inside a useEffect with client-side rendering in mind.
    if (typeof window !== 'undefined') {
      setShowNavbar(window.location.href !== 'http://localhost:3000/get-started');
    }
  }, []);

  return (
    showNavbar && (
      <div className={ `text-black justify-between items-center w-full h-header py-4 px-6 flex  ${showNavbar ? '' : 'hidden'}`}>
        <Logo />
        <Menu />
        <LoginBtn />
      </div>
    )
  );
};

export default Header;
