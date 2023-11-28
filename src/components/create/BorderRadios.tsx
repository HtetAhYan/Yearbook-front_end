import { Radio, RadioGroup } from '@nextui-org/react';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setBorder } from './structure/CardStructureSlice';
import{LuCrown} from 'react-icons/lu'
const BorderRadios = () => {
    const [selected, setSelected] = React.useState("border-cyan-300 border-[7px]");

  const isInvalidOptions = ["christmas", "san-francisco", "tokyo"];

  const isInvalid = isInvalidOptions.includes(selected);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setBorder(selected));
  
    
  }, [selected]);
  return (
    <><h1>Borders</h1>
      <div className='h-[20vh] p-4 bg-neutral-100 rounded-lg shadow-md '>
            <RadioGroup
      label="Select your favorite border"
          orientation="horizontal"
        
        >
          {Radios.map((option) => (
            <Radio
  
               classNames={{
                control: `${isInvalid ? 'bg-red-500' : ''} h-[15px] w-[15px] `,
                 label:` text-black`,
              }}
              
              key={option.label}
              value={option.value}
              checked={selected === option.value}
              onChange={() => setSelected(option.value)}
            ><div className='flex items-center'>
              {option.label}
             {option.isDisabled && (
<LuCrown className='text-yellow-600' size={20} />
             )}</div>
            </Radio>
          ))}
        
   
    </RadioGroup>
      </div></>
  )
}

export default BorderRadios
export const Radios = [
  {
    label: "cyan",
    value: "border-cyan-500 border-[7px] box",
     isDisabled: false,
  },
  {
    label: "Green",
    value: "border-green-500 border-[7px] box",
     isDisabled: false,
  },
  {
    label: "purple",
    value: "border-purple-500 border-[7px] box",
     isDisabled: false,
  },
  {
    label: "None",
    value: "border-white border-[7px] box",
    isDisabled: false,
  },
  {
    label: "Christmas",
    value: "christmas",
     isDisabled: true,
  },
  {
    label: "Gradient",
    value: "gradient",
     isDisabled: true,
  }, {
    label: "dotted",
    value: "animated-border ",
     isDisabled: true,
  }, {
    label: "dashed",
    value: "animated-dashed",
     isDisabled: true,
  }
]