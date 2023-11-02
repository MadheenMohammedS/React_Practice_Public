//import logo from './logo.svg';
import './App.css';
import Signup from './pages/signup/signup.js';
import Home from './pages/home/home.js';
import {Route, Routes, BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
     
      <Router>
        <Routes>
          <Route exact path="/" element={<Signup />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
