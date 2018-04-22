import loading from 'constants/loading';
import actionTypes from './actionTypes';

const initialState = {
  results: {
    loading: loading.INITIAL,
    data: [],
    error: null
  }
};

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_STARTED:
      return {
        ...state,
        results: {
          ...state.results,
          loading: loading.STARTED
        }
      };
    case actionTypes.SEARCH_SUCCEEDED:
      return {
        ...state,
        results: {
          ...state.results,
          loading: loading.SUCCEEDED,
          data: action.payload,
          error: null
        }
      };
    case actionTypes.SEARCH_FAILED:
      return {
        ...state,
        results: {
          ...state.results,
          loading: loading.FAILED,
          error: action.payload
        }
      };
    default:
      return state;
  }
}
