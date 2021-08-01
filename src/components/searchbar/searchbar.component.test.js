import React from 'react';
import { shallow } from 'enzyme';

import Searchbar from './searchbar.component';
import config from './searchbar.component.config';

const props = {
  ...config.defaultProps,
  getMovies: jest.fn(),
  getSuggestion: jest.fn(),
  onChange: jest.fn(),
};

let component;

describe(config.displayName, () => {
  beforeEach(() => {
    component = shallow(<Searchbar {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });
});
