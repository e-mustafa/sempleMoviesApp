import React from 'react'
import { Container, InputBase, Button, Badge, InputAdornment, IconButton } from '@mui/material';
import { Box } from '@mui/system';
import {Link, useNavigate} from 'react-router-dom'

import { FaHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import { useDispatch, useSelector } from 'react-redux';
import { handelText, toggleDrawer, getPageFromPaginate} from '../Redux/Action';





export default function NavebarMain() {

   const navigate = useNavigate()
   const dispatch = useDispatch()

   const favoriteMovie = useSelector(state => state.favoriteMovie)



   function handelChangeText(e){
      dispatch(handelText(e))
      // setText(e.currentTarget.value);
      navigate(`/${1}`);
      dispatch(getPageFromPaginate(1))
   }



   return (
      <Box bgcolor='darkorange' py={1}  position='static' mb={8} >
         <Container>
            <Box display='flex' justifyContent='space-around' alignItems='center'>

               {/* <UpdateBadge /> */}
               <Button variant="text" color="error" onClick={()=> {dispatch(toggleDrawer(true))}}>

                  <Badge badgeContent={favoriteMovie && favoriteMovie.length} color="info">
                     <FaHeart title='Favorite list' fontSize='30px'/>
                  </Badge>

               </Button>

               <InputBase
                sx={{ mx: 2,  bgcolor:'white', borderRadius:25, height:45, pr:2,  flexGrow:1 }} dir='rtl'
                placeholder="بحث" onChange={(e)=> handelChangeText(e.currentTarget.value)}
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
