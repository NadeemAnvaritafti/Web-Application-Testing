import React from 'react';
import {render} from '@testing-library/react';
import App from './App';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

test('renders without crashing', () => {
  render(<App />);
});

test('renders the Display Component', () => {
  render(<Display />)
});

test('renders the Dashboard Component', () => {
  render(<Dashboard />)
});

test('hit button', () => {
  const {getByText} = render(<Dashboard />);
  getByText(/hit/i)
});

test('strike button', () => {
  const {getByText} = render(<Dashboard />);
  getByText(/strike/i)
});

test('ball button', () => {
  const {getByText} = render(<Dashboard />);
  getByText(/ball/i)
});

test('foul button', () => {
  const {getByText} = render(<Dashboard />);
  getByText(/foul/i)
});

test('display div wrapping the scoreboard', () => {
  const {getByTestId} = render(<Display />);
  getByTestId('displayDiv')
})