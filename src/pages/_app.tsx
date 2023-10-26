import { store } from '@/state/store'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { NextUIProvider } from '@nextui-org/react'


import { Toaster } from 'react-hot-toast'
import dynamic from 'next/dynamic'
const Header=dynamic(() => import('@/components/general/Header'), { loading: () => <div>Loading...</div> });
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store= { store } ><NextUIProvider >
    
      <div className=' dark text-foreground bg-background bg-gradient-to-r from-pink-50 via-cyan-100 to-indigo-100 min-h-screen '> <Header />
          <Toaster/><Component {...pageProps} /></div>
        
    </NextUIProvider> </Provider>)
}
