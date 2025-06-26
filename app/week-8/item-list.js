"use client"


import Item from "./item";
import { useState } from "react";


export default function ItemList( {items, onItemSelect}){

  const [sortBy, setSortBy] = useState("name");

  

  const handleSortChange = (event) => setSortBy(event.target.value);

  items.sort((a,b) => {
    let itemA = a[sortBy].toUpperCase();
    let itemB = b[sortBy].toUpperCase();
    if(itemA < itemB) return -1
    if(itemA > itemB) return 1;
    return 0;
  }) 

    
    return(

        <div className="flex flex-col md:flex-row p-w gap-8 items-center">
          <div className="md:w-1/4 flex justify-center">
            <div className="bg-green-600 p-4 rounded-lg mb-4 border border-gray-200">
              <label className="block text-amber-300 text-lg font-bold mb-2">Sort By:</label>
              <select 
              onChange={handleSortChange}
              className="block bg-amber-300 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 ">
                <option value="name">Item Name</option>
                <option value="category">Category</option>
              </select>
            </div>
            </div>
              <div  className="md:w-3/4">
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg_grid-cols-3 gap-4">
                {items.map((item) => (
                  <Item key={item.id} itemObj={item} onClick={onItemSelect}/>
                ))}
                </ul>
              </div>
          </div>
        
    );
}