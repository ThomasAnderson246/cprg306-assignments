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

    const handleItemSelect = () => ();
    return(
        <main className="bg-amber-300">
            <div>
                <HomeButton></HomeButton>
            </div>
           <NewItem onAddItem={handleAddItem}/> 
           <ItemList onItemSelect={handleItemSelect} items={itemList}/> 
           
        </main>
    )
}