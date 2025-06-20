"use client"

import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemData from "./items.json";
import { useState } from "react";






export default function Page(){

    let itemArray = itemData.map( (item) => ({...item}));

    const [itemList, setItemArray] = useState(itemArray);
    const [sortBy, setSortBy] = useState("name");
    
    const handleAddItem = (itemObj) => {
        setItemArray( [...itemList, itemObj]);
    }

    const sortItems = () => {
        const newArray = [...itemList];

        newArray.sort((a,b) => {
            let itemA = a[sortBy].toUpperCase();
            let itemB = b[sortBy].toUpperCase();
            if (itemA < itemB) return -1;
            if (itemA > itemB) return 1;
            return 0;
        });
        return newArray;
    };

        const handleSortChange = (event) => setSortBy(event.target.value);

        const sortedArray = sortItems();
    
    return(
        <main className="bg-amber-300">
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={sortedArray} sortBy={sortBy} onSortChange={handleSortChange}/>
        </main>
    )
}