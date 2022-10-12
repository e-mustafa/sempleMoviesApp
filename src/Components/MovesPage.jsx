import React from 'react'
import { Box, Card, CardMedia, Container, Grid, LinearProgress, Typography } from '@mui/material'
import '../Styles/MovesPage.css'

// import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function MovesPage({movies, page}) {



   return (
      <Container>
            <Grid container spacing={{ xs: 2, md: 3, lg:3 }} my={8}  >
            {movies.map((e) => (
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
