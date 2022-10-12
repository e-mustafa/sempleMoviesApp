import React, { useEffect } from 'react'
import { Stack } from '@mui/system';

import Pagination from 'react-responsive-pagination';
import '../Styles/ReactPagination.css'


export const ReactPagination = ({page, setPage, pagesN, handlePageChange}) => {


   // function handlePageChange(p) {
   //    // ... do something with `page`
   //    navigate(`/${p}`)
   //    setPage(p || 1);
   //    console.log(p);
   // }





   return (
      <Stack bgcolor='darkorange' alignItems='center' p={2}  >
         <Pagination
          total={pagesN}
          current={page || 1}
          onPageChange={e => handlePageChange(e)}
          nextLabel='التالي'
          previousLabel='السابق'
          aria-current='page'
         />
      </Stack>
   )
}
