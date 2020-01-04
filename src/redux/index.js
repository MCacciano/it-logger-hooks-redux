import { combineReducers } from 'redux';

import logReducer from './log/log.reducer';
import techReducer from './tech/tech.reducer';

export default combineReducers({
  log: logReducer,
  tech: techReducer
});
