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
        let cleanedItemName = itemName.trim();
        const commaIndex = cleanedItemName.indexOf(',');

        if (commaIndex !== -1) {
            cleanedItemName = cleanedItemName.substring(0, commaIndex);
        }

        cleanedItemName = cleanedItemName.replace(/[^a-zA-Z\s]/g, "");
        cleanedItemName = cleanedItemName.trim();
        cleanedItemName = cleanedItemName.toLowerCase();
        setSelectedItemName(cleanedItemName);
    };

    return(
        <main className="bg-amber-300 min-h-screen p-4">
            <HomeButton/>
            <NewItem onAddItem={handleAddItem}/>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"> 
                <div className="flex flex-col">
                    
                    <ItemList onItemSelect={handleItemSelect} items={itemList}/>
                </div>
                <div className="overflow-y-auto"> 
                    {selectedItemName && <MealIdeas ingredient={selectedItemName}/> }
                </div>
            </div>
        </main>
    );
}  
            
            
                
                
                
                
                        