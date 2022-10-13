import axios from 'axios'




export  const getMovies =  (page) =>{
   return async (dispatch) =>{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=cd633d9d32696143e8a55048f1c5ebb6&
      language=ar-AR&page=${page}`)
      dispatch({
         type: 'allMovies',
         movies: res.data.results,
         page: res.data.page,
         pagesN: res.data.total_pages,
         results: res.data.total_results
      })
   }
}



export const searchMovies =  (page, text) =>{
   return async (dispatch) =>{
      const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=cd633d9d32696143e8a55048f1c5ebb6&
      language=ar&query=${text}&page=${page}&include_adult=false`)
      dispatch({
         type: 'searchMovies',
         movies: res.data.results,
         page: res.data.page,
         pagesN: res.data.total_pages,
         results: res.data.total_results
      })
   }
}





export const handelText = (e) =>{
   return{
      type: 'handelText',
      text: e,
      page: 1
   }
}


export const getPageFromPaginate = (p) =>{
   return{
      type: 'getPageFromPaginate',
      page: p,
   }
}




export const addToFavorite = (m) =>{
   return{
      type: 'addToFavorite',
      favoriteMovie: m ,
      moviesLength: m.length,
      storage: true
   }
}


export const deleteFavoriteItem = (m) =>{
   return{
      type: 'deleteFavoriteItem',
      favoriteMovie: m,
      moviesLength: m.length,
   }
}



export  const clearFavorite = () =>{
   return{
      type: 'addToFavorite',
      favoriteMovie: [],
   }
}

export  const updateLength = () =>{ // to update favorite badge count
   return{
      type: 'updateLength',
   }
}



export  const toggleDrawer = ( open) => {   // open and close favorite list
   return{
      type: 'toggleDrawer',
      toggleDrawer: open
   }
};


// show aleart Snackbar when moveie oready in favorite list -- while adding item to favorite list
export  const toggleSnackbar = ( open) => {
   return{
      type: 'toggleSnackbar',
      toggleDrawer: open
   }
};





