


const intialValue = {
   movies: [] ,
   page: 1 ,
   pagesN: 1 ,
   results: 0 ,
   text: '',
   // favoriteMovie: [] ,
   favoriteMovie: JSON.parse(localStorage.getItem('favorite-Movies')) || [] ,
   moviesLength: 0 ,

   toggleDrawer: false ,
   toggleSnackbar: false
}



export const MoviesReducer = (state = intialValue, action) => {
   switch (action.type) {
      case 'allMovies' :
         return{
            ...state ,
            movies: action.movies, pagesN: action.pagesN, page:action.page, results: action.results
         };
      case 'searchMovies':
         return{
            ...state ,
            movies: action.movies, pagesN: action.pagesN, page:action.page, results: action.results
         };
         // case 'getDetails':
         //    return{
         //       ...state ,
         //       movies: action.getDetails,
         //    };
         //    case 'getVideo':
         //       return{
         //          ...state ,
         //          movies: action.getVideo,
         //       };
      case 'handelText':
         return{
            ...state ,
            text: action.text,
            page: action.page // when clear search text back to page number 1
         };
      case 'getPageFromPaginate':
         return{
            ...state ,
            page: action.page,
         };
      case 'addToFavorite':
         return{
            ...state ,
            favoriteMovie: action.favoriteMovie,  // state.favoriteMovie.push(action.favoriteMovie)
            moviesLength: state.favoriteMovie.length,
            storage: action.storage ,
         }
      case 'deleteFavoriteItem':
         return{
            ...state ,
            favoriteMovie: action.favoriteMovie,
            moviesLength: state.favoriteMovie.length,

         };
      case 'clearFavorite':
         return{
            ...state ,
            favoriteMovie: action.favoriteMovie,
            moviesLength: state.favoriteMovie.length,

         };
      case 'updateLength':
         return{
            ...state ,
            moviesLength: state.favoriteMovie.length,
         };
      case 'toggleDrawer':
         return  {
            ...state ,
            toggleDrawer: action.toggleDrawer,
         };
         case 'toggleSnackbar':
         return  {
            ...state ,
            toggleSnackbar: action.toggleDrawer,
         };
      default:
         return state ;
   }
}