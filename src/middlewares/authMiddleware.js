// import axios from 'axios';
// // import { SUBMIT_LOGIN, saveUserData } from '../actions/auth';
// // import { FETCH_FAVORITES, fetchFavorites, saveFavorites } from '../actions/recipes';

// const authMiddleware = (store) => (next) => (action) => {
//   // console.log('on a intercepté une action dans le middleware: ', action);

//   switch (action.type) {
//     case SUBMIT_LOGIN: {
//       const { email, password } = store.getState().auth;
//       axios.post('http://localhost:3001/login', { email: email, password: password })
//         .then((response) => {
//           console.log(response);
//           store.dispatch(saveUserData(response.data.logged, response.data.token));
//           store.dispatch(fetchFavorites());
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//       break;
//     }
//     case FETCH_FAVORITES:
//       console.log('on va aller chercher les recettes préférées');
//       axios.post(
//         'http://localhost:3001/favorites',
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${store.getState().auth.token}`,
//           },
//         },
//       )
//         .then((response) => {
//           store.dispatch(saveFavorites(response.data.favorites));
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//       break;
//     default:

//       next(action);
//   }
// };
//   // on passe l'action au suivant (middleware suivant ou reducer)

// export default authMiddleware;
