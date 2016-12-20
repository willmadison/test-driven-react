import React from 'react';
import { render, shallow, mount } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  // Static Rendering using enzyme.
  expect(render(<App />).text()).toContain('save to reload');
});

describe('Customized greetings', () => {
  it('displays custom greetings', () => {
    // Shallow rendering using enzyme.
    const greeting = <h2>What's Up Patna?!</h2>;
    expect(shallow(<App greeting="What's Up Patna?!" />).contains(greeting)).toBe(true);
  });

  it('displays custom greetings with emphasis', () => {
    // Shallow rendering using enzyme.
    const greeting = <h2><em>What's Up Patna?!</em></h2>;
    expect(shallow(<App greeting="What's Up Patna?!" emphasize="true" />).contains(greeting)).toBe(true);
  });

});