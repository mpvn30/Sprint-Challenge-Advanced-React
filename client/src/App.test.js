import React from 'react';
import { render } from '@testing-library/react';
import Nav  from './components/nav';
import App from './App'

test('App renders without crashing', () => {
  render(<App />);
});

test('Nav renders without crashing', () => {
  render(<Nav />);
});
test('Header header is found', () => {
  const { getByTestId } = render(<Nav />);

  getByTestId(/header/i);
});

