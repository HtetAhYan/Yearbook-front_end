import { setPage } from '@/state/features/yearbookSlices/yearbookSlice';
import { Pagination } from '@nextui-org/react';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

const PaginationComponent = ({ totalPages }: any) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPage(currentPage - 1));
  }, [currentPage])
  
  return (
    <Pagination loop isCompact color="secondary" className={ `laptop:r fixed bottom-2 z-20 ${totalPages <= 1 ? 'hidden' : ''}`}  size='lg'  total={totalPages} classNames={{
          item: 'w-[40px] h-[40px] rounded-full ',
          cursor: 'w-[40px] h-[40px] rounded-full ',
          base: 'w-full flex justify-center  laptop:bg-inherit ',
      }} initialPage={1} onChange={setCurrentPage}/>
  );
}

export default PaginationComponent