import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import Reducer from 'src/reducers';

const store = createStore(Reducer, devToolsEnhancer());

export default store;
