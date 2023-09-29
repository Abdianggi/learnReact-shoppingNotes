import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
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

function Header(){
  return (
    <h1 className='mb-5'>Catatan Belanjaku 📝</h1>
  )
}

function Form({onAddItem}){
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(event) {
    event.preventDefault();

    if(!name) return;
    
    const newItem = {name, quantity, checked: false, id: Date.now()};
    onAddItem(newItem);

    console.log(newItem);

    setName('');
    setQuantity(1);
  }

  const quantityNum = [...Array(20)].map((value, key) => (
    <option value={key + 1}>{key + 1}</option>
  ));

  const darkStyle = 'me-3 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

  return (
    <form className="my-5" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select className={darkStyle} value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {quantityNum}
        </select>
        <input className={darkStyle} value={name} onChange={(e) => setName(e.target.value)}/>
        <button className={darkStyle}>Tambah</button>
      </div>
    </form>
  )
}

function Option(){
  return (
    <div className="mb-5">
      <select className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
  )
}

function Item({item}){
  return (
    <li key={item.id} className={item.checked ? 'line-through' : ''}>
      <input type="checkbox" className='me-3'/>
      <span className='me-3'>{item.quantity} {item.name}</span>
      <button className='bg-red-700 rounded p-1 hover:bg-red-500'>&times;</button>
    </li>
  )
}

function List({items}){
  return (
    <div className="mb-5">
      <ul className='space-y-1 list-disc list-inside text-left'>
        {items.map((item) => 
          <Item item={item} key={item.id} />
        )}
      </ul>
    </div>
  )
}

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

function Footer(){
  return (
    <footer className="">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
  )
}

export default function App() {
  const [items, setItems] = useState(groceryItems);

  function handleAddItem(item){
    setItems([...items, item]);
  }
  return (

    <div className="text-stone-100 text-2xl">
      <Header />
      <Form onAddItem={handleAddItem}/>
      <List items={items}/>
      <Option />
      <Footer />
      <Abdi />
    </div>

  ) 
}
