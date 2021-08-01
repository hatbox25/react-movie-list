import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '.';

describe('App', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('App Snap Test', () => {
    test('should render correctly', () => {
      expect(toJson(shallow(<App />))).toMatchSnapshot();
    });
  });
});
