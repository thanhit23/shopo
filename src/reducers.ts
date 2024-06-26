/**
 * Combine all reducers in this file and export the combined reducers.
 */
import { combineReducers } from 'redux';

import globalReducer from './pages/App/reducer';

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    global: globalReducer,
    ...injectedReducers,
  });
}
