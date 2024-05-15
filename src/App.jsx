import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MessagesPage from './pages/Messages';
import JokesPage from './pages/Jokes';

const App = () => {

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/funny" element={<JokesPage />} />
        </Routes>
    </Router>
  );
};

export default App;
