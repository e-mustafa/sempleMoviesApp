import { Container, Typography } from '@mui/material'
import React, {Fragment} from 'react'
import MovesPage from './MovesPage'
// import PaginationMain from './PaginationMain'
import { ReactPagination } from './ReactPagination'





export default function MainPage({movies, page, setPage, pagesN, results, text, handlePageChange}) {




   return (
      <Fragment>

         {/* <Stack bgcolor='darkorange' alignItems='center' p={2}  >
            <img src={noInternet} alt="no internet connection" />
            <Typography  variant="h5" textAlign='right' color='teal' mb={4}>
               Check your internet connection and reload this page
            </Typography>
         </Stack> */}

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

         <MovesPage movies={movies} />

         {/* display Pagination if page number more than 1 page */}
         {pagesN > 1 &&
            // <PaginationMain setPage={setPage}  page={page} pagesN={pagesN} />
            <ReactPagination setPage={setPage}  page={page} pagesN={pagesN} handlePageChange={handlePageChange} />
         }

      </Fragment>
  )
}
