import React, {Fragment, useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

import './Styles/App.css';
import MainPage from './Components/MainPage';
import MovieDetails from './Components/MovieDetails';
import NavbarMain from './Components/NavbarMain.jsx'
import Favorite from './Components/Favorite';

import axios from 'axios'
import { Alert, Snackbar } from '@mui/material';
import Page404 from './Components/Page404';









function App() {


   // Favorite togle open and close ----------------------------------
      const [state, setState] = useState({
         right: false,
      });

      const toggleDrawer = ( open) => (event) => {
         if (
         event &&
         event.type === 'keydown' &&
         (event.key === 'Tab' || event.key === 'Shift')
         ) {
         return;
         }

         setState({'right': open });
      };
   // Favorite togle open and close ----------------------------------



   const [movies, setMovies] = useState([])
   const [page, setPage] = useState(1)
   const [pagesN, setPagesN] = useState(1)
   const [results, setResults] = useState(1)

   const [text, setText] = useState('')


   const getMovies = async () =>{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cd633d9d32696143e8a55048f1c5ebb6&
      language=ar-AR&page=${page}`)
      setMovies(res.data.results)
      setPagesN(500)
      setResults(res.data.total_results)
   }


   // handel page number for paginate---------------
   function handlePageChange(p) {
      navigate(`/${p}`)
      // setPage(p || 1);
      setPage(p || 1);
   }
   // ----------------------------------------------




   const searchMoves = async ()=>{
      if(text === '' || undefined){
         getMovies()
      }else{
         const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cd633d9d32696143e8a55048f1c5ebb6&
         language=ar&query=${text}&page=${page}&include_adult=false`)
         setMovies(res.data.results)
         setPagesN(res.data.total_pages)
         setResults(res.data.total_results)
      }
   }


   useEffect( () =>{
      searchMoves()
   },[page, text])






   // Favorite items --------------------------------------------------------------
   const [favoriteMovie, setFavoriteMovie] = useState([])
   const [favoriteMovieLength, setFavoriteMovieLength] = useState(0)


   const [open, setOpen] = useState(false);

   const handleClick = () => {
     setOpen(true);
   };

   const handleClose = (event, reason) => {
     if (reason === 'clickaway') {
       return;
     }

     setOpen(false);
   };





   const addItems = (m) =>{
      // colone
      let items = favoriteMovie
      // edit
      let res = items.find(e => e.id === m.id)
      if(res){
         console.log('item in favorie');
         handleClick()
         // enqueueSnackbar('I love NooNa', { preventDuplicate: true, variant:'warning' })
      }else{
         items.push(m)
         // update
         setFavoriteMovie(items)
      }
      setFavoriteMovieLength(favoriteMovie.length)
   }


   const clearFavoriteList = () =>{  // clear all Favorite List
      setFavoriteMovie([])
   }


   const deleteItem = (m) =>{    // delete one movie from Favorite List
      // clone
      let item = favoriteMovie
      // edit
      let newItem = item.filter(e => e.id !== m.id )
      // update
      setFavoriteMovie(newItem)
   }



   const lengthUpdate = () =>{
      setFavoriteMovieLength(favoriteMovie.length)
   }

   useEffect(() =>{
      lengthUpdate()
   },[favoriteMovie.length])




   // Local storage managment ------------------------------------------
   useEffect( () =>{
      // get items from localstorage
      const favoriteFromLocalStorage = localStorage.getItem('favorite-Movies') || '[]' // '[]'
      favoriteFromLocalStorage && setFavoriteMovie(JSON.parse(favoriteFromLocalStorage))
   },[])

      // set items to localstorage
   useEffect( () =>{
      localStorage.setItem("favorite-Movies",JSON.stringify(favoriteMovie))
   })






   const navigate = useNavigate()
   useEffect( () =>{
      window.location.pathname === '/' && navigate(`${1 || 1}`)
   },[])






   return (
      <Fragment >
         {/* alert for oready added movie to favorie list */}
         <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="warning"  sx={{ width: '100%', fontSize:20 }}>
               هذا الفيلم تم اضافته مسبقا
            </Alert>
         </Snackbar>

         <NavbarMain setText={setText} toggleDrawer={toggleDrawer} favoriteMovie={favoriteMovie}
          favoriteMovieLength ={favoriteMovieLength} handlePageChange={handlePageChange} />
         <Favorite toggleDrawer={toggleDrawer} state={state} favoriteMovie={favoriteMovie}
          clearFavoriteList={clearFavoriteList} deleteItem={deleteItem} setPage={setPage} />
         <Routes>
            {/* <Route path='/' element={<MainPage movies={movies} page={page} setPage={setPage} pagesN={pagesN}
             results={results} text={text} />}
            /> */}
            <Route path='/:value' element={<MainPage movies={movies} page={page} setPage={setPage} pagesN={pagesN}
             results={results} text={text} handlePageChange={handlePageChange}/>}  />

            <Route path='/Movies/:id' element={<MovieDetails addItems={addItems} />} />
            <Route path='/*' element={<Page404 />} />



         </Routes>
      </Fragment>
   );
}

export default App;
