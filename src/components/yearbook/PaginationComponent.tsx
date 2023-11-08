import { Pagination } from '@nextui-org/react';
import React from 'react'

const PaginationComponent = () => {
  return (
      <Pagination loop isCompact color="secondary" className='laptop:r fixed bottom-2 z-20' size='lg'  total={20} classNames={{
          item: 'w-[40px] h-[40px] rounded-full ',
          cursor: 'w-[40px] h-[40px] rounded-full ',
          base: 'w-full flex justify-center  laptop:bg-inherit ',
      }} initialPage={1} />
  );
}

export default PaginationComponent