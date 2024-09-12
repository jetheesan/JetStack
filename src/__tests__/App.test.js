// src/__tests__/App.test.js

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';  // Adjust the path to your App component

test('renders habit dashboard on default route', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Expect the dashboard component or some text to be on the default route
  expect(screen.getByText(/Your Habits/i)).toBeInTheDocument();
});

test('navigates to habit creation', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  
  // Click on a link or button that navigates to create-habit
  const createHabitLink = screen.getByText(/Create New Habit/i);
  createHabitLink.click();

  // Expect the habit creation component to be displayed after navigation
  expect(screen.getByText(/Create a New Habit/i)).toBeInTheDocument();
});

test('navigates to habit details', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Click on a link to a specific habit
  const habitDetailsLink = screen.getByText(/View Habit 1 Details/i);
  habitDetailsLink.click();

  // Expect habit details to be rendered after navigation
  expect(screen.getByText(/Habit Details/i)).toBeInTheDocument();
});
