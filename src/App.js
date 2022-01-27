import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/'
import Navbar from './components/Navbar/';
import Products from './components/Products/';
import ProductView from './components/ProductView/';
import ProductsAdmin from './components/Admin/ProductsAdmin/';
import UsersAdmin from './components/Admin/UsersAdmin/';
import Login from './components/Login/';
import Registro from './components/Registro/';
import Carrito from './components/Carrito/';
import {ToastContainer} from 'react-toastify';

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
        <Route path='/productosAdmin' element={<ProductsAdmin />}/>
        <Route path='/usuariosAdmin' element={<UsersAdmin />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/registro' element={<Registro />}/>
        <Route path='/carrito' element={<Carrito />}/>
      </Routes>
      <ToastContainer/>
    </Router>
  );
}

export default App;

