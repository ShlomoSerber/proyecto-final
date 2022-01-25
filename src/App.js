import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Products from './components/Products/Products';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home />}/>
        <Route path='/productos' element={<Products />}/>
      </Routes>
    </Router>
  );
}

export default App;

