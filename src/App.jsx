import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';
import Nav from './crud/Nav';
import Home from './crud/Home';
import AddGuest from './crud/AddGuest';
const groceryItems = [
  {
    id: 1,
    name: 'Kopi Bubuk',
    quantity: 2,
    checked: true,
  },
  {
    id: 2,
    name: 'Gula Pasir',
    quantity: 5,
    checked: true,
  },
  {
    id: 3,
    name: 'Air Mineral',
    quantity: 3,
    checked: false,
  },
];

function Abdi(){
  const [count, setCount] = useState(5)
  return (
    <div className='mt-20'>
      <div className='justify-center flex'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" className='w-100' target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
      <h1 className='text-emerald-100 text-2xl font-bold'>Abdi Anggi</h1>
      <div className="mt-5">

        <button 
          className='bg-emerald-900 hover:bg-emerald-800 p-2 mt-3 rounded-md text-slate-200 text-md border-emerald-800 border-4' 
          onClick={() => setCount((count) => count + 5)}
        >
          count is {count}
        </button>

      </div>
    </div>
  )
}

function Option(){
  return (
    <div className="mb-5">
      <select className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-max p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
  )
}

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item){
    setItems([...items, item]);
  }

  function handleDeleteItem(id){
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleThroughItem(id){
    setItems((items) => items.map((item) => (item.id === id ? {...item, checked: !item.checked } : item)))
  }
  
  return (

    <div className="flex">
      <Nav/>
      <Routes>
        <Route path='/crud' element={ <Home/> } />
        <Route path='/add' element={ <AddGuest/> } />
        <Route path='/grocery' element={ <Form/> }/>
      </Routes>
      {/* <Home /> */}
      {/* <Form onAddItem={handleAddItem}/>
      <List items={items} onDeleteItem={handleDeleteItem} onThroughItem={handleThroughItem}/>
      <Option />
      <Footer items={items}/>
      <Abdi /> */}
    </div>

  ) 
}
