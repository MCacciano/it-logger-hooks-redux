import { combineReducers } from 'redux';

import logReducer from './log/log.reducer';

export default combineReducers({
  log: logReducer
});
