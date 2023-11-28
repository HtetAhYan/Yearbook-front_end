import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';

import React, { useEffect, useState } from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useDispatch } from 'react-redux';
const DropDownComponent = ({items, func}: any) => {
  
  const [selectedKeys, setSelectedKeys] = useState(new Set([items[0] || ""]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const dispatch=useDispatch()
useEffect(() => {
    dispatch(func(selectedValue !== items[0]?selectedValue:null));  
}, [selectedValue]);




  return (
    <Dropdown showArrow className='text-black ' backdrop="blur">
      <DropdownTrigger>
        <Button 
          variant='light'
   
                  className="capitalize text-black w-full h-[35px] h1 font-semibold bg-teal-50"
                  radius='sm'
                  endContent={<MdOutlineKeyboardArrowDown />}
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        
        
        aria-label="Single selection example"
          variant="faded"
        disallowEmptySelection
        selectionMode="single"
              selectedKeys={selectedKeys}
              // @ts-ignore
        onSelectionChange={(key:any) => {
          setSelectedKeys(key);

        }}
      >{items && items.map((item:any)=>{
        return <DropdownItem key={item}> {item}</DropdownItem>
      })}

      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDownComponent