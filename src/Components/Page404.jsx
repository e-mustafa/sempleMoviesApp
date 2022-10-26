import React from 'react'
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { useNavigate } from 'react-router-dom';

import img404 from '../Images/page not found.jpeg'



const Page404 = () => {
   const navigate = useNavigate()


  return (
      <div>
         <Stack  display='flex' justifyContent='center' alignItems='center'  p={2} >
            <img src={img404} alt="page not found" style={{filter: 'grayscale(100%)', width:'100%'}} />
            <Button variant="contained" color='warning' onClick={() => navigate('/1')} >الرجوع للصفحة الرئيسية</Button>
         </Stack>
      </div>
  )
}


export default Page404;