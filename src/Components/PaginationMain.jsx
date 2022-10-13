import React, { useEffect } from 'react'
import { Pagination, Stack } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom';





export default function PaginationMain({page, setPage, pagesN}) {
   const navigate = useNavigate()
   const pramsPage = useParams()
   console.log(pramsPage);


   const handleChange = (event, value) => {
      // setPage(value)
      navigate(`/${value}`)
      setPage(pramsPage.value);
      console.log(value);
   }

   useEffect(() => {
      setPage(pramsPage.value || 1);

   })  // ,[pramsPage]

   return (
      <Stack bgcolor='darkorange' alignItems='center' p={2} mt={2}   >

         <Pagination  shape="rounded" variant="outlined"
          count={pagesN}
          defaultPage={1}
          boundaryCount={2}
          siblingCount={0}
          page={page}
          onChange={handleChange}
         />

      </Stack>
   )
}
