import React, { useEffect } from 'react'
import { Box, Card, CardMedia, Container, Grid, LinearProgress, Typography } from '@mui/material'
import '../Styles/MovesPage.css'
import { Link } from 'react-router-dom';

import {getMovies, searchMovies} from '../Redux/Action'
import { useDispatch, useSelector } from 'react-redux';


export default function MovesPage() {

   const dispatch = useDispatch()

   const text = useSelector(state => state.text)
   const page = useSelector(state => state.page)
   const pagesN = useSelector(state => state.pagesN)
   const results = useSelector(state => state.results)
   const movies = useSelector(state => state.movies)


   const getMovesData = async (page, text)=>{
      if(text === '' || undefined){
         dispatch(getMovies(page))
      }else{

         dispatch(searchMovies(page, text))
      }
   }



   useEffect( () =>{
      getMovesData(page, text)
   },[page, text])



   const favoriteMovie = useSelector(state => state.favoriteMovie)

   // set items to localstorage
   useEffect( () =>{
      localStorage.setItem('favorite-Movies',JSON.stringify(favoriteMovie))
   })




   return (
      <Container>
            <Grid container spacing={{ xs: 2, md: 3, lg:3 }} my={8}  >
            {movies && movies.map((e) => (
               <Grid item xs={6} md={4} lg={3} key={e.id}>

                  <Card className='movie-Parent' sx={{height:'100%'}} >
                     <Link to={`/movies/${e.id}`}>

                     {/* when hover over card show next box */}
                     <CardMedia
                        component="img" width='100%' height='100%'
                        image={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={e.title}
                        className='movie-Parent'
                     />

                     <Box className='movie-Data' dir='rtl' p={2} color='orange' height='100%' width='100%'
                        flexDirection='column' justifyContent='center' alignItems='center'
                        sx={{textShadow:'1px 1px #fff'}}>

                        <Typography variant="h6"  > {e.original_title} </Typography>
                        <Typography variant="h6"   > {e.title} </Typography>
                        <Typography variant="h6"   > تاريخ الانتاج: {e.release_date} </Typography>
                        <Typography variant="h6"   > الشعبية: {e.popularity} </Typography>
                        {/* <Typography variant="h6"   > h1. {e.vote_count} </Typography> */}
                        <Typography variant="h6"   > عدد المقيمين: {e.vote_count} </Typography>
                        <Typography variant="h6"   > التقيم: {e.vote_average} </Typography>

                        <Box sx={{ width: '100%'}}>
                           <LinearProgress variant="determinate" value={e.vote_average *10} color='warning'
                            sx={{transform:'rotate(180deg)'}} />
                        </Box>

                     </Box>
                     </Link>
                  </Card>
               </Grid>
            ))}
            </Grid>
      </Container>
   )
}
