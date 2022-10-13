import React from 'react'
import { Stack } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-responsive-pagination';
import { useNavigate} from 'react-router-dom';
import { getPageFromPaginate} from '../Redux/Action';

import '../Styles/ReactPagination.css'


export const ReactPagination = () => {

   const navigate = useNavigate()
   const dispatch = useDispatch()
   // const pramsPage = useParams()


   const pagesN = useSelector(state => state.pagesN)
   const page = useSelector(state => state.page)



   function handlePageChange(page) {
      // ... do something with `page`
      navigate(`/${page}`)
      dispatch(getPageFromPaginate(page))
      // setPage(page);
   }



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
