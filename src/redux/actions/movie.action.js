import axios from 'axios';
import { SET_LOADING, SET_MOVIES, ADD_MOVIES, SET_SUGGESTION } from '../types';

const BASE_URL = process.env.API_URL;

export const getMovies = (keyword, page) => async (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
  let type = SET_MOVIES;
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        apikey: process.env.API_KEY,
        s: keyword,
        page,
      },
    });

    if (data.Response === 'True') {
      if (page > 1) {
        type = ADD_MOVIES;
      }
      dispatch({ type, payload: data.Search, hasMore: true });
    } else {
      throw 'error';
    }
  } catch (error) {
    dispatch({ type: ADD_MOVIES, payload: [], hasMore: false });
  }
};

export const getSuggestion = (keyword) => async (dispatch) => {
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        apikey: process.env.API_KEY,
        s: keyword,
        page: 1,
      },
    });

    if (data.Response === 'True') {
      dispatch({ type: SET_SUGGESTION, payload: data.Search });
    }
  } catch (error) {
    console.log(error);
  }
};
