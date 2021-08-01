import React from 'react';
import { shallow } from 'enzyme';

import Searchbar from './listitem.component';
import config from './listitem.component.config';

const props = {
  ...config.defaultProps,
  onClickImage: jest.fn(),
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
