import { SET_LOADING, SET_MOVIES, ADD_MOVIES, SET_SUGGESTION } from '../types';

const initialState = {
  data: [],
  suggestion: [],
  loading: false,
  hasMore: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_MOVIES:
      return {
        ...state,
        data: action.payload,
        loading: false,
        hasMore: action.hasMore,
      };
    case ADD_MOVIES:
      return {
        ...state,
        data: [...state.data, ...action.payload],
        loading: false,
        hasMore: action.hasMore,
      };
    case SET_SUGGESTION:
      return {
        ...state,
        suggestion: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
