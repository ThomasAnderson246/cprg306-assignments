"use client"

import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemData from "./items.json";
import { useState } from "react";
import HomeButton from "../_components/home-button";






export default function Page(){

    let itemArray = itemData.map( (item) => ({...item}));

    const [itemList, setItemArray] = useState(itemArray);
    
    const handleAddItem = (itemObj) => {
        setItemArray( [...itemList, itemObj]);
    }
    return(
        <main className="bg-amber-300">
            <div>
                <HomeButton></HomeButton>
            </div>
           <NewItem onAddItem={handleAddItem}/> 
           <ItemList items={itemList}/> 
           
        </main>
    )
}