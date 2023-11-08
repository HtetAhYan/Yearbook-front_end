
import { useInView } from 'framer-motion'
import React, { useEffect, useLayoutEffect, useRef } from 'react'

const TextMasker = (props: any) => {
    const maskRef = useRef(null)
    const isInView = useInView(maskRef, { once: true, margin: "-10px" })
    useEffect(() => {
        console.log(isInView);
        
    },[isInView])
  return (
      <div ref={maskRef} className='overflow-hidden'>
          
          {props.text && props.text.map((txt: any, index: number) => {
              return <div ><h1 {...props} key={index}>{ txt}</h1></div>
          })}
    </div>
  )
}

export default TextMasker