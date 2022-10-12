import React, { useEffect, useState } from 'react'
import { Container, Stack } from '@mui/system'
import { Box, Button, Card, CardMedia, Grid, LinearProgress, Link, Typography } from '@mui/material'

import { FaHeart } from "react-icons/fa";

import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'



const MovieDetails = ({addItems}) => {
   const navigate = useNavigate()
   const pramsId = useParams()

   const [movieData, setMovieData] = useState()
   const [movieVideo, setMovieVideo] = useState()

   const getDetails = async ()=>{
      const res = await axios.get(`
      https://api.themoviedb.org/3/movie/${pramsId.id}?api_key=cd633d9d32696143e8a55048f1c5ebb6&language=ar`)
      .catch((error) =>{
         console.log(error);
      })
      setMovieData(res.data)
   }



   const getVideo = async ()=>{
      const res = await axios.get(`
      https://api.themoviedb.org/3/movie/${pramsId.id}/watch/providers?api_key=cd633d9d32696143e8a55048f1c5ebb6&
      language=ar`)
      .catch((error) =>{
         console.log(error);
      })
      setMovieVideo(res.data.results.AR || res.data.results.US)
   }


   useEffect(()=>{
      getDetails()
      getVideo()
   },[pramsId])



   return (
      <Container>
         <Card sx={{display:'flex',  my:8, direction:'rtl'}}  >
            <Grid container  spacing={4} >
               <Grid item xs={12} lg={4} >
                  <CardMedia
                  component="img"
                  image={`https://image.tmdb.org/t/p/w500${movieData && movieData.poster_path}`} alt={movieData && movieData.title}
                  />
               </Grid>


               <Grid item xs={12} lg={8}  >

                  <Box dir='rtl' p={2} ml={4}  color='orange' height='100%'  textAlign='center'
                   flexDirection='column' justifyContent='center' alignItems='center'
                   sx={{textShadow:'2px 2px 0px #FFFFFF, 3px 3px 0px rgba(0,0,0,0.15), 2px 2px 2px rgba(151,151,151,0)'}}
                  >
                     <Typography  variant="h5"  color='teal' textAlign='right' > معلومات الفيلم </Typography>

                     <Typography variant="h5"  > {movieData && movieData.original_title} </Typography>
                     <Typography variant="h5"   > {movieData && movieData.title} </Typography>
                     <Typography variant="h5"   > تاريخ الانتاج: {movieData && movieData.release_date} </Typography>
                     <Typography variant="h5"   > الشعبية: {movieData && movieData.popularity} </Typography>
                     <Typography variant="h5"   > الشركات المنتجة: {movieData && movieData.production_companies.length} </Typography>
                     <Typography variant="h5"   > مدة الفيلم: {movieData && movieData.runtime}
                      {movieData && (movieData.runtime < 10? " دقائق" : " دقيقة")} </Typography>
                     <Typography variant="h5"   > عدد المقيمين: {movieData && movieData.vote_count} </Typography>
                     <Typography variant="h5"   > التقيم: {movieData && movieData.vote_average} </Typography>

                     <Box sx={{ width: '100%'}} px={4}>
                        <LinearProgress variant="determinate" value={movieData && movieData.vote_average *10}
                         color='warning' sx={{transform:'rotate(180deg)'}} />
                     </Box>

                     <Typography  variant="h5"  color='teal'  textAlign='right' pt={2} > فئات الفيلم </Typography>
                     <Box display='flex' flexDirection='row' justifyContent='center' dir='rtl'  color='orange'>
                        {movieData && movieData.genres.map(e =>(
                           <Typography variant="h5"  ml={2} key={e.id}  >{e.name} </Typography>
                        ))}
                     </Box>

                     {/* add movie to Favorite list */}
                     <Box mt={4}>
                        <Button variant="text" color="error" onClick={() => addItems(movieData)} >
                           <FaHeart title='Add to Favorite' fontSize='30px'/>
                        </Button>
                     </Box>
                  </Box>
               </Grid>
            </Grid>
         </Card>

         <Card sx={{display:'flex',  my:8, direction:'rtl', marginY:4}}  >
            <Grid container  spacing={4} >
               <Grid item xs={12} lg={4} >
                  <CardMedia height='100%'
                   component="img"
                   image={`https://image.tmdb.org/t/p/w500${movieData && movieData.backdrop_path}`}
                   alt={movieData && movieData.title}
                  />
               </Grid>

               <Grid item xs={12} lg={8} >

                  <Box  display='flex' width='100%' flexDirection='column' color="orange"
                   justifyContent='center'textAlign='right'
                   sx={{textShadow:'2px 2px 0px #FFFFFF, 3px 3px 0px rgba(0,0,0,0.15), 2px 2px 2px rgba(151,151,151,0)'}}
                  >
                     <Typography  variant="h5"  color='teal' > قصة الفيلم: </Typography>
                     <Typography variant="h6" p={2}>
                        {movieData &&(movieData.overview.length  >= 1? movieData.overview : 'لا يتوفر قصة لهذا الفيلم')}
                     </Typography>
                  </Box>
               </Grid>
            </Grid>
         </Card>


         <Stack display='flex' direction='row' justifyContent='center' spacing={4} my={4} textAlign='center' >
            <Link href={movieVideo && movieVideo.link} target="_blank" rel="noopener noreferrer" underline='none' >
               <Button variant="contained" color='warning' >صفحة الفيلم</Button>
            </Link>
            <Button variant="contained" color='warning' onClick={() => navigate(-1)} >رجوع</Button>
         </Stack>
      </Container>
   )
}

export default  MovieDetails;