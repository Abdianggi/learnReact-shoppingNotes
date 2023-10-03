import { useState } from "react";
import Item from "./Item";

export default function List({items, onDeleteItem, onThroughItem}){
    return (
      <div className="mb-5">
        <ul className='space-y-1 list-disc list-inside text-left'>
          {items.map((item) => 
            <Item item={item} key={item.id} onDeleteItem={onDeleteItem} onThroughItem={onThroughItem}/>
          )}
        </ul>
      </div>
    )
  }
  