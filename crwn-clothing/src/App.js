import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Router>
        <Routes> {/* This is the equivalent to Switch, in React Router v6 */}
          <Route exact path="/" element={<HomePage/>} />
          <Route path="/hats" element={<HatsPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}


export default App;
