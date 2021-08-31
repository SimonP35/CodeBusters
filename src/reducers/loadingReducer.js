import { SET_LOADING } from 'src/actions/loading';

const initialState = {
  loading: false,
};

function loadingReducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_LOADING:
      return {
        loading: !state.loading,
      };
    default:
      return state;
  }
}

export default loadingReducer;
