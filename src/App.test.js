import React from 'react';
import { render } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  // Static Rendering using enzyme.
  expect(render(<App />).text()).toContain('save to reload');
});
