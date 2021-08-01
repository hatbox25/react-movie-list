import React from 'react';
import { shallow } from 'enzyme';
import thunk from 'redux-thunk';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import { movieList } from '../../constant/fixtures';

import HomePageContainer from './home.container';
import HomePage from './home.component';

const mockStore = configureStore([thunk]);
const initialState = {
  movie: {
    data: movieList,
    suggestion: movieList,
    loading: false,
    hasMore: true,
  },
};
const store = mockStore(initialState);

let wrapper;
let instance;

const props = {
  suggestion: movieList,
  movies: movieList,
  loading: false,
  hasMore: false,
  getMovies: jest.fn(),
  getSuggestion: jest.fn(),
};

beforeEach(() => {
  store.dispatch = jest.fn();
  wrapper = shallow(<HomePage {...props} />);
  instance = wrapper.instance();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('HomePage Unit Test', () => {
  describe('onKeywordChange', () => {
    test('Should set correct state', () => {
      wrapper.setState({ keyword: '' });

      instance.onKeywordChange('newKeyword');

      expect(wrapper.state('keyword')).toEqual('newKeyword');
    });
  });

  describe('loadMore', () => {
    test('Should set correct state & load more movie', () => {
      wrapper.setState({ keyword: 'keyword', page: 2 });

      instance.loadMore();

      expect(wrapper.state('page')).toEqual(3);
      expect(props.getMovies).toBeCalledWith('keyword', 3);
    });
  });
});

describe('HomePage Container Snap Test', () => {
  describe('render()', () => {
    test('renders the component', () => {
      wrapper = shallow(<HomePageContainer store={store} {...props} />).dive();
      expect(toJson(wrapper)).toMatchSnapshot();
    });
  });
});
