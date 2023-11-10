import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/layouts/header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';
import Nav from './crud/Nav';
import Home from './crud/Home';
import Dashboard from './components/dashboard';
import AddGuest from './crud/AddGuest';
import Grocery from './components/Grocery';

export default function App() {
  
  return (
    <div className="flex">
      <Nav/>
      <Header/>
      <Routes>
        <Route path='/' element={ <Dashboard/> } />
        <Route path='/crud' element={ <Home/> } />
        <Route path='/add' element={ <AddGuest/> } />
        <Route path='/grocery' element={ <Grocery /> }/>
      </Routes>
      {/* <Home /> */}
      
    </div>

  ) 
}
