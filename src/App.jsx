import Home from './pages/Home';
import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Cart from './pages/Cart';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='cart' element={<Cart/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
