import loading from 'constants/loading';
import AsyncReducer from 'utils/AsyncReducer';
import { VideoDuration } from './models';
import actionTypes from './actionTypes';

const initialState = {
  query: {
    queryTerm: '',
    videoDuration: VideoDuration.ANY
  },
  results: {
    loading: loading.INITIAL,
    data: {}
  }
};

const searchAsyncReducer = AsyncReducer(actionTypes.SEARCH, 'results');

export default function searchReducer(state = initialState, action) {
  const newState = searchAsyncReducer(state, action);

  switch (action.type) {
    case actionTypes.SET_QUERY_TERM:
      const { queryTerm } = action.payload;
      return {
        ...newState,
        query: {
          ...newState.query,
          queryTerm
        }
      };
    case actionTypes.SET_VIDEO_DURATION:
      const { videoDuration } = action.payload;
      return {
        ...newState,
        query: {
          ...newState.query,
          videoDuration
        }
      };
    default:
      return newState;
  }
}
