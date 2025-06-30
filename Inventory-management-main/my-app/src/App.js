import logo from './logo.svg';
import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup.jsx';
import Home from './components/Home/Home.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;


