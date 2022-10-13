import React, {Fragment, useEffect} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

import './Styles/App.css';
import MainPage from './Components/MainPage';
import MovieDetails from './Components/MovieDetails';
import NavbarMain from './Components/NavbarMain.jsx'
import Favorite from './Components/Favorite';

import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import {toggleSnackbar, updateLength} from './Redux/Action'
import Page404 from './Components/Page404';







function App() {

   const dispatch = useDispatch()

   const moviesLength = useSelector(state => state.moviesLength)
   const openSnackbar = useSelector(state => state.toggleSnackbar)

   // update favorite badge when add movie to favorite immditely
   useEffect(() => {
      dispatch(updateLength())
   }, [moviesLength])






   const navigate = useNavigate()
   useEffect( () =>{
      window.location.pathname === '/' && navigate(`/${1 || 1}`)
   },[])




   // Local storage managment ------------------------------------------
   // useEffect( () =>{
   //    // get items from localstorage
   //    let favoriteFromLocalStorage = localStorage.getItem('favorite-Movies') || '[]' ;
   //    dispatch(addToFavorite(JSON.parse(favoriteFromLocalStorage)));
   // },[])









   return (
      <Fragment >
         {/* alert for oready added movie to favorie list */}
         <Snackbar open={openSnackbar} autoHideDuration={3000} onClose={()=> dispatch(toggleSnackbar(false))}>
            <Alert onClose={()=> dispatch(toggleSnackbar(false))} severity="warning"  sx={{ width: '100%', fontSize:20 }}>
               هذا الفيلم تم اضافته مسبقا
            </Alert>
         </Snackbar>

         <NavbarMain />
         <Favorite />
         <Routes>
            {/* <Route path='/' element={<MainPage movies={movies} page={page} setPage={setPage} pagesN={pagesN}
             results={results} text={text} />}
            /> */}

            <Route path='/:value' element={<MainPage  />}/>
            <Route path='/Movies/:id' element={<MovieDetails />} />
            <Route path='/*' element={<Page404 />} />

         </Routes>
      </Fragment>
   );
}

export default App;
