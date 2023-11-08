import dynamic from 'next/dynamic';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import Menu from './Menu';
import LoginBtn from './LoginBtn';
import { useSelector } from 'react-redux';
import { RootState } from '@/state/store';
import { useRouter } from 'next/router';

const Logo = dynamic(() => import('@/components/general/Logo'), {
  loading: () => (
    <div className='text-black   bg-opacity-90 backdrop-blur-md w-screen min-h-[7vh] py-4 px-5 '>Loading...</div>
  ),
});


const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const router = useRouter();

     useLayoutEffect(() => {
    let shouldShowNavbar = false;

    for (const route of ['/','/yearbook']) {
      if (router.pathname === route) {
        shouldShowNavbar = true;
        break;
      }
    }

    setShowNavbar(shouldShowNavbar);
  }, [router.pathname]);

  return (
    showNavbar && (
      <div className={ `text-black justify-between items-center w-full  h-header py-4 px-6 flex  ${showNavbar ? '' : 'hidden'}`}>
        <Logo />
 <LoginBtn />
      </div>
    )
  );
};

export default Header;
