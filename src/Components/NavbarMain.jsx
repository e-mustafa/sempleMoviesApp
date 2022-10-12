import React from 'react'
import { Container, InputBase, Button, Badge, InputAdornment, IconButton } from '@mui/material';
import { Box } from '@mui/system';

import {Link, useNavigate} from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";





export default function NavebarMain({setText, toggleDrawer, favoriteMovie, setPage, favoriteMovieLength, handlePageChange}) {
   const navigate = useNavigate()



   return (
      <Box bgcolor='darkorange' py={1}  position='static' mb={8} >
         <Container>
            <Box display='flex' justifyContent='space-around' alignItems='center'>

               <Button variant="text" color="error" onClick={toggleDrawer( true)}>
                  <Badge badgeContent={favoriteMovieLength && favoriteMovieLength} color="info">
                     <FaHeart title='Favorite list' fontSize='30px'/>
                  </Badge>
               </Button>

               <InputBase
                sx={{ mx: 2,  bgcolor:'white', borderRadius:25, height:45, pr:2,  flexGrow:1 }} dir='rtl'
                placeholder="بحث"
                onChange={(e)=> {
                  setText(e.currentTarget.value);
                  navigate(`/1`);
                  // setPage(pramsPage.value || 1)
                  handlePageChange(1);
                }}
                endAdornment={
                  <InputAdornment position="end">
                     <IconButton  aria-label="search" edge="end" >
                        <FaSearch fontSize={25} />
                        {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                     </IconButton>
                  </InputAdornment>
               }
               />

               <Box sx={{cursor:'pointer'}}  >
                  <Link to='/' style={{color:'white', textDecoration:'none', fontSize:25}}>
                     MyMovies
                  </Link>
               </Box>
            </Box>
         </Container>
      </Box>
   )
}
