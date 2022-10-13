import React, {Fragment} from 'react'
import { Container, Typography } from '@mui/material'

import MovesPage from './MovesPage'
// import PaginationMain from './PaginationMain'
import { ReactPagination } from './ReactPagination'

import { useSelector } from 'react-redux'




export default function MainPage() {

   const text = useSelector(state => state.text)
   const results = useSelector(state => state.results)
   const pagesN = useSelector(state => state.pagesN)


   return (
      <Fragment>
         {/* display if there are results  */}
         { text && (
            <Container>
               <Typography  variant="h5" textAlign='right' color='teal' mb={4}>
                  {results < 1? ` ...لا يوجد افلام لعرضها`
                   :
                   ` عدد النتائج: ${results} ${results === 1 || results > 10? ' فيلم'  : ' افلام'}`
                  }
               </Typography>
            </Container>
            )
         }

         <MovesPage  />

         {/* display Pagination if page number more than 1 page */}
         {pagesN > 1 &&
         <div>
            <ReactPagination />
            {/* <PaginationMain setPage={setPage}  page={page} pagesN={pagesN} /> */}
         </div>
         }
      </Fragment>
  )
}
