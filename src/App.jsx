// index.js: The entry point where you render App.

import React from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HabitDashboard from './components/HabitDashboard';
// import HabitDetails from './components/HabitDetails';
// import HabitCreation from './components/HabitCreation';
import { SignupPage } from './components/SignUp';
import { LoginPage } from './components/Login';
const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage/>},
    {
        path: "/login",
        element: <LoginPage/>},
    
    ]);
    
function App() {
  return (
<RouterProvider router={router} />
    // <Router>
    //   <Routes>
    //     <Route path="/signup" element = {<SignupPage/>}/> 
    //     <Route path="/" element={<HabitDashboard />} />
    //     <Route path="/habit/:id" element={<HabitDetails />} />
    //     <Route path="/create-habit" element={<HabitCreation />} />
    //   </Routes>
    // </Router>
  );
}

export default App;