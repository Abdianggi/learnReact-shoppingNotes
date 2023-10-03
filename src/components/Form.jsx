import { useState } from "react";

export default function Form({onAddItem}){
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
        <h3>What we buy today?</h3>
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
  