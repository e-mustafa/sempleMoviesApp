import React, {Fragment} from 'react'
import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material'

import emptyImg from '../Images/empty-flat-screen-tv2.png'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {toggleDrawer, deleteFavoriteItem} from '../Redux/Action'




export const FavoriteItems = () => {

   const dispatch = useDispatch()

   const favoriteMovie = useSelector(state => state.favoriteMovie)




   // delete one movie from Favorite List
   const deleteItem = (m) =>{
      // clone
      let item = favoriteMovie
      // edit
      let newItem = item.filter(e => e.id !== m.id )
      // update
      dispatch(deleteFavoriteItem(newItem))
   }










   return (
      <Fragment>
      {favoriteMovie < 1 ?
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' height='100%'>
         <Typography variant="h5" color='gray' mb={4}> لم تقم باضافة اي افلام </Typography>
         <img src={emptyImg} alt="Empty" width={350} />
      </Box>

      :
      <Box role="presentation"
         //  onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}
         >


         <List  >
            {favoriteMovie && favoriteMovie.map(e => (
            <Box key={e.id} >
            <ListItem  disablePadding dir='rtl'>

               <Link to={`/movies/${e.id}`} style={{ display:'flex', flexGrow:1, color:'black', textDecoration:'none'}}>

                  <ListItemButton onClick={()=> dispatch(toggleDrawer(false))} onKeyDown={()=> dispatch(toggleDrawer(false))} >

                     <Avatar variant="rounded" sx={{width:'70px', height:'100px'}} className="Avatar-FList"
                      src={`https://image.tmdb.org/t/p/w500${favoriteMovie && e.poster_path}`}
                      alt={favoriteMovie && e.title}
                     />


                     <Box flexGrow={1} px={1} textAlign='right' >
                        <Typography variant="subtitle1" color='darkorange' > {favoriteMovie && e.title} </Typography>
                        <Stack direction='row' justifyContent='space-between'  >
                           <Typography variant="subtitle1" flexGrow={1}> {favoriteMovie && e.runtime} دقيقة </Typography>
                           <Typography variant="subtitle1" flexGrow={1}> {favoriteMovie && e.vote_average} / 10 </Typography>
                        </Stack>
                     </Box>
                  </ListItemButton>
               </Link>

               <IconButton aria-label="delete" onClick={()=> deleteItem(e)} >
                  <FaTrashAlt fontSize={20} />
               </IconButton>
            </ListItem>

               <Divider variant="inset" component="li" dir='rtl' sx={{mx:5}} />
            </Box>
            ))}
        </List>
      </Box>
      }
      </Fragment>
   )
}
