import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Motivation from './pages/Motivation'
import Team from './pages/Team'
import Results from './pages/Results'

export default function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Sensityze</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/" style={{"color":"white"}}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{"color":"white"}}>About</Link>
              </li> 
              <li className="nav-item active">
                <Link className="nav-link" to="/motivation" style={{"color":"white"}}>Motivation</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team" style={{"color":"white"}}>Team</Link>
              </li> 
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/results/:score" element={<Results />}/>
          <Route path="/team" element={<Team />}/>
          <Route path="/motivation" element={<Motivation />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  );
}
