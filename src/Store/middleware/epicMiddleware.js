import { createEpicMiddleware } from 'redux-observable';
import rootEpic from 'state/epic';

export default createEpicMiddleware(rootEpic);
