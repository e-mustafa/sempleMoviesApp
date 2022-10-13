import React, { useEffect } from 'react'
import { Button, Stack, SwipeableDrawer, Typography } from '@mui/material'
import { Box } from '@mui/system';

import { FavoriteItems } from './FavoriteItems';

import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {toggleDrawer, clearFavorite, updateLength} from '../Redux/Action'





const Favorite = () => {

   const dispatch = useDispatch()

   const favoriteMovie = useSelector(state => state.favoriteMovie)
   const openOrClose = useSelector(state => state.toggleDrawer)




   return (
      <div>
         <SwipeableDrawer
            anchor={'right'}
            open={openOrClose}
            onClose={()=> dispatch(toggleDrawer(false))}
            onOpen={()=> dispatch(toggleDrawer(true))}
         >
            <Stack display='flex' flexDirection='column' justifyContent='space-between' width={350} height='100%'>
               <Stack  spacing={2} p={2} boxShadow={2} direction='row' justifyContent='center' >
                  <Typography variant="h6"  textAlign='center' color='error' >
                     <FaHeart/>
                  </Typography>
                  <Typography variant="h6"  textAlign='center' > أفلامي المفضلة </Typography>
               </Stack>

               <Box flexGrow={1} overflow='auto'>
               {/* display Favorite Items list */}
                  <FavoriteItems  />
               </Box>

               <Stack  spacing={2} p={2} boxShadow={4} >
                  <Typography variant="h6"  textAlign='center' > {favoriteMovie && favoriteMovie.length} :عدد الأفلام </Typography>
                  <Button variant="contained" color='warning' onClick={()=> dispatch(clearFavorite())}
                   disabled={favoriteMovie && (favoriteMovie.length > 0? false : true)} >clear</Button>
                   {/* disabled clear button if list is impty */}
               </Stack>
            </Stack>
         </SwipeableDrawer>
      </div>
   );
}

export default Favorite;