import loading from 'constants/loading';
import actionTypes from './actionTypes';

const initialState = {
  videos: {
    loading: loading.INITIAL,
    data: [],
    error: null
  }
};

export default function videosReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SEARCH_STARTED:
      return {
        ...state,
        videos: {
          ...state.videos,
          loading: loading.STARTED
        }
      };
    case actionTypes.SEARCH_SUCCEEDED:
      return {
        ...state,
        videos: {
          ...state.videos,
          loading: loading.SUCCEEDED,
          data: action.payload,
          error: null
        }
      };
    case actionTypes.SEARCH_FAILED:
      return {
        ...state,
        videos: {
          ...state.videos,
          loading: loading.FAILED,
          error: action.payload
        }
      };
    default:
      return state;
  }
}
