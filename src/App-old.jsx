import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  return (
    <>
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
    </>
  )
}

export default App
