import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Products from './components/Products/Products';
import ProductView from './components/ProductView/ProductView';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/productos' element={<Products />}/>
        <Route path='/productos/:seccionParam' element={<Products />}/>
        <Route path='/productos/subSeccion/:subSeccionParam' element={<Products />}/>
        <Route path='/productos/producto/:id' element={<ProductView />}/>
      </Routes>
    </Router>
  );
}

export default App;

