"use client"

import Item from "./item";
import { useState } from "react";
import itemList from "./items.json";

export default function ItemList(){

  const [sortBy, setSortBy] = useState("name");

  let itemArray = itemList.map( (item) => [{...item}]);

    
    return(
        <div>
            {itemArray.map((item) => (
              <Item key={item.id} itemObj={item}/>
            ))}
        </div>
    );
}