"use client"

import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemData from "./items.json";
import { useState } from "react";
import HomeButton from "../_components/home-button";
import MealIdeas from "./meal-ideas";





export default function Page(){

    let itemArray = itemData.map( (item) => ({...item}));

    const [itemList, setItemArray] = useState(itemArray);
    const [selectedItemName, setSelectedItemName] = useState("");
    
    const handleAddItem = (itemObj) => {
        setItemArray( [...itemList, itemObj]);
    }

    const handleItemSelect = (itemName) => {
        const cleanedItemName = itemName.split(','[0].trim().replace(/[^a-zA-Z]/g,""));
        setSelectedItemName(cleanedItemName);
    };
    return(
        <main className="bg-amber-300 flex">
            <div className="w-1/2 p4">
                <HomeButton/>
                <NewItem onAddItem={handleAddItem}/> 
                <ItemList onItemSelect={handleItemSelect} items={itemList}/> 
             </div>
             <div className="w-1/2 p-4">
                {selectedItemName && <MealIdeas ingredient={selectedItemName}/> }
             </div>
           </main>
    )
}
           
        
           