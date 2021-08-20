import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from 'src/reducers';
import authMiddleware from '../middlewares/authMiddleware';

const enhancers = composeWithDevTools(
  applyMiddleware(
    authMiddleware,
    // ... d'autres middlewares
  ),
);
const store = createStore(Reducer, enhancers);

export default store;
