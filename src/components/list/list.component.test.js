import React from 'react';
import { shallow } from 'enzyme';

import ListData from './list.component';
import config from './list.component.config';

const props = {
  ...config.defaultProps,
};

let component;

describe(config.displayName, () => {
  beforeEach(() => {
    component = shallow(<ListData {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should render correctly', () => {
    expect(component).toMatchSnapshot();
  });

  test('should render with loading', () => {
    component.setProps({ loading: true });
    expect(component).toMatchSnapshot();
  });
});
