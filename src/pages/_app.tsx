import { RootState, store, wrapper } from '@/state/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider, useSelector } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react'


import { Toaster } from 'react-hot-toast'
import dynamic from 'next/dynamic'


const Header = dynamic(() => import('@/components/general/Header'), { loading: () => <div>Loading...</div> });
const UniversalDropDown = dynamic(() => import('@/components/universal/UniversalDropDown'), { loading: () => <div>Loading...</div> });
const App=({ Component, ...rest }: AppProps)=>{
const { store, props } = wrapper.useWrappedStore(rest);
  const {  pageProps } = props;

 
  return (
       <Provider store={store}>
   <NextUIProvider >
    
              <div className=' dark text-foreground bg-background bg-gradient-to-r from-pink-50 via-cyan-100 to-indigo-100 min-h-screen '> <Header />
                 
          <Toaster/><Component {...pageProps} /></div>
        
    </NextUIProvider> </Provider>)
}
export default App;