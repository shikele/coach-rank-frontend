import React from 'react';
import './App.css';
import MainPage from "./pages/main-page/main-page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GridPage from "./pages/grid-page/grid-page";

function App() {
  return (
      <Router>
          <div className="App">
              <Routes>
                  <Route path="/" element={<MainPage/>}/>
                  <Route path="/grid" element={<GridPage/>}/>
                  {/* Add more routes as needed */}
              </Routes>
          </div>
      </Router>

  );
}

export default App;
