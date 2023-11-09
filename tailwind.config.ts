import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    '.src/components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {  height: {
      "page": "93vh",
    "header": "7vh",
     "screen":"100vh"
    },
    
    screens: {
      'tablet': '768px',
      // => @media (min-width: 640px) { ... }

      'laptop': '968px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1560px',
      // => @media (min-width: 1280px) { ... }
    },
    fontFamily: {
      'pop':[
        'Poppins','sans-serif'
      ]
    },
    extend: {
      backgroundImage: {
        
      },
      
       transform: {
         '45': '45deg',
         '75': '75deg',
      },
       
       
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
}
export default config
