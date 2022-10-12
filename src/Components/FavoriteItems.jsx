import React, {Fragment} from 'react'
import { Avatar, Box, Divider, IconButton, List, ListItem, ListItemButton, Stack, Typography } from '@mui/material'

import emptyImg from '../Images/empty-flat-screen-tv2.png'
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';




export const FavoriteItems = ({toggleDrawer, favoriteMovie, deleteItem}) => {


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
            {favoriteMovie.map(e => (
            <Box key={e.id} >
            <ListItem  disablePadding dir='rtl'>

               <Link to={`/movies/${e.id}`} style={{ display:'flex', flexGrow:1, color:'black', textDecoration:'none'}}  >

                  <ListItemButton onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>

                     <Avatar variant="rounded" sx={{width:'70px', height:'100px', transform:":hover :transform: scale(2)"}}
                     src={`https://image.tmdb.org/t/p/w500${favoriteMovie && e.poster_path}`}
                     alt={favoriteMovie && e.title}
                     />


                     <Box flexGrow={1} px={1} textAlign='right' >
                        <Typography variant="subtitle1" color='darkorange' > {favoriteMovie && e.title} </Typography>
                        <Stack direction='row' justifyContent='space-between'  >
                           <Typography variant="subtitle1" flexGrow={1}> {favoriteMovie && e.runtime} دقيقة </Typography>
                           <Typography variant="subtitle1" flexGrow={1}> {favoriteMovie && e.vote_average} / 10 </Typography>
                        </Stack>
                        {/* <ListItemText primary="Work" secondary="Jan 7, 2014"/> */}
                     </Box>
                  </ListItemButton>
               </Link>

               <IconButton aria-label="delete" onClick={()=> deleteItem(e)} >
                  <FaTrashAlt fontSize={20} />
               </IconButton>

               {/* <Button ml={1} sx={{height:'100%', ml:2, flexShrink:1}} >
               </Button> */}
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
