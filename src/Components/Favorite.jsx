import React from 'react'
import { Button, Stack, SwipeableDrawer, Typography } from '@mui/material'
import { Box } from '@mui/system';

import { FavoriteItems } from './FavoriteItems';

import { FaHeart } from "react-icons/fa";


const Favorite = ({toggleDrawer, state, favoriteMovie, clearFavoriteList, deleteItem}) => {





   return (
      <div>
         <SwipeableDrawer
            anchor={'right'}
            open={state.right}
            onClose={toggleDrawer( false)}
            onOpen={toggleDrawer( true)}
         >
            <Stack display='flex' flexDirection='column' justifyContent='space-between' width={350} height='100%'>
               <Stack  spacing={2} p={2} boxShadow={2} direction='row' justifyContent='center' >
                  <Typography variant="h6"  textAlign='center' color='error' >
                     <FaHeart/>
                  </Typography>
                  <Typography variant="h6"  textAlign='center' > أفلامي المفضلة </Typography>
               </Stack>

               <Box flexGrow={1} overflow='auto'>
               {/* FavoriteItems */}
                  <FavoriteItems favoriteMovie={favoriteMovie} toggleDrawer={toggleDrawer} deleteItem={deleteItem} />
               </Box>

               <Stack  spacing={2} p={2} boxShadow={4} >
                  <Typography variant="h6"  textAlign='center' > {favoriteMovie && favoriteMovie.length} :عدد الأفلام </Typography>
                  <Button variant="contained" color='warning' onClick={clearFavoriteList}
                   disabled={favoriteMovie && (favoriteMovie.length > 0? false : true)} >clear</Button>
                   {/* disabled clear button if list is impty */}
               </Stack>
            </Stack>
         </SwipeableDrawer>
      </div>
   );
}

export default Favorite;