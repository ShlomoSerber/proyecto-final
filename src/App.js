import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/Components/Home'
import Products from './Components/Products/Products';
import Navbar from './Components/Navbar/Navbar';

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
