import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Sobre from './Sobre';
import Servicos from './Servicos';
import Contato from './Contato';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Academia Fitness</h1>
          <nav>
            <ul>
              <li><NavLink exact to="/" activeClassName="active-home" className="nav-link">Início</NavLink></li>
              <li><NavLink to="/sobre" activeClassName="active" className="nav-link">Sobre</NavLink></li>
              <li><NavLink to="/servicos" activeClassName="active" className="nav-link">Serviços</NavLink></li>
              <li><NavLink to="/contato" activeClassName="active" className="nav-link">Contato</NavLink></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
