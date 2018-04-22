import { combineEpics } from 'redux-observable';
import * as searchEpics from './search/epics';

export default combineEpics(
  ...Object.values(searchEpics)
);
