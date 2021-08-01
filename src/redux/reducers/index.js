import { combineReducers } from 'redux';

import moviesReducer from './movies.reducer';

const moduleState = { movie: moviesReducer };

export default combineReducers(moduleState);
