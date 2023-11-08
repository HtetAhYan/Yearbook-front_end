import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import React from 'react'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
const DropDownComponent = ({items}:any) => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([items[0] || ""]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );

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
        onSelectionChange={setSelectedKeys}
      >{items?.map((item:any)=>{
        return <DropdownItem key={item}> {item}</DropdownItem>
      })}

      </DropdownMenu>
    </Dropdown>
  );
}

export default DropDownComponent