import { combineReducers } from 'redux';

import theDefaultReducer from './Containers/WorkArea/WorkAreaReducer';

const rootReducer = combineReducers({
  theDefaultReducer,
});

export default rootReducer;
