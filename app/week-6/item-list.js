"use client"

import Item from "./item";
import { useState } from "react";
import itemList from "./items.json";

export default function ItemList(){

  const [sortBy, setSortBy] = useState("name");

  let itemArray = itemList.map( (item) => ({...item}));

  const handleSortChange = (event) => setSortBy(event.target.value);

  itemArray.sort((a,b) => {
    let itemA = a[sortBy].toUpperCase();
    let itemB = b[sortBy].toUpperCase();
    if(itemA < itemB) return -1
    if(itemA > itemB) return 1;
    return 0;
  })

    
    return(

        
        <div>
          <div>
            <label>Sort By:</label>
            <select onChange={handleSortChange}>
              <option value="name">Item Name</option>
              <option value="category">Category</option>
            </select>
          </div>
            <div>
              {itemArray.map((item) => (
                <Item key={item.id} itemObj={item}/>
               ))}
            </div>
        </div>
    );
}