// index.js: The entry point where you render App.

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HabitDashboard from './components/HabitDashboard';
import HabitDetails from './components/HabitDetails';
import HabitCreation from './components/HabitCreation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HabitDashboard />} />
        <Route path="/habit/:id" element={<HabitDetails />} />
        <Route path="/create-habit" element={<HabitCreation />} />
      </Routes>
    </Router>
  );
}

export default App;