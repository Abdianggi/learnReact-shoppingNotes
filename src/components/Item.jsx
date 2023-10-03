import clsx from 'clsx';

export default function Item({item, onDeleteItem, onThroughItem}){
  return (
    <li key={item.id} className={clsx(
      item.checked ? 'line-through' : '',
      'mx-'
    )}>
      <input type="checkbox" className='me-3' onChange={() => onThroughItem(item.id)} checked={item.checked} />
      <span className='me-3'>{item.quantity} {item.name}</span>
      <button className='bg-red-700 rounded p-1 hover:bg-red-500' onClick={() => onDeleteItem(item.id)} >&times;</button>
    </li>
  )
}
