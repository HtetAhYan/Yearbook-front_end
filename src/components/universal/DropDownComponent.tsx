import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { AnyAction } from '@reduxjs/toolkit';
import React, { useEffect } from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import { useDispatch } from 'react-redux';
const DropDownComponent = ({items, func}: any) => {
  
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([items[0] || ""]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const dispatch=useDispatch()
  useEffect(()=>{
        dispatch(func(selectedValue))
  },[selectedValue])

  return (
    <Dropdown showArrow className='text-black ' backdrop="blur">
      <DropdownTrigger>
        <Button 
                variant='light'
                  className="capitalize text-black h-[35px] h1"
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
      >{items?.map((item:any)=>{
        return <DropdownItem key={item}> {item}</DropdownItem>
      })}

      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDownComponent