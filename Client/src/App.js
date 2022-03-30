import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Teams from './components/pages/Teams';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import RainbowPlayers from './components/pages/RainbowPlayers/RainbowPlayers';
import FifaPlayers from './components/pages/FifaPlayers/FifaPlayers';
import ValorantPlayers from './components/pages/ValorantPlayers/ValorantPlayers';
import Profile from './components/pages/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/pages/Dashboard';
import ProtectedRouteAdmin from './components/ProtectedRouteAdmin';
import ShoppingCart from './components/pages/ShoppingCart';
import Contact from './components/pages/Contact';

function App() {
  const dispatch = useDispatch()
  const {msg} = useSelector((state) => state.user);
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/teams' element={<Teams/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/sign-up' element={<Register/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/r6players' element={<RainbowPlayers/>} />
          <Route path='/fifaplayers' element={<FifaPlayers/>} />
          <Route path='/valorantplayers' element={<ValorantPlayers/>} />
          <Route path='/shoppingcart' exact element={<ShoppingCart/>} />
          <Route element={<ProtectedRoute/>}>
            <Route path='/profile' element={<Profile/>} />
          </Route>
          <Route element={<ProtectedRouteAdmin/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
          </Route>
          
        </Routes>
    </>
  );
}

export default App;
