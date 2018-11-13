import React from 'react';
import renderer from 'react-test-renderer';

import acd from '../src/component/acd.js';

describe('<acd />', () => {
    it('should match the snapshot', () => {
      const component = renderer.create(<acd />).toJSON();
      expect(component).toMatchSnapshot();
    });
  });