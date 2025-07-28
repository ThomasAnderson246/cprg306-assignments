"use client"

import ItemList from "./item-list";
import NewItem from "./NewItem";
import itemData from "./items.json";
import { useState } from "react";
import HomeButton from "@/app/_components/home-button";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page(){
    let itemArray = itemData.map( (item) => ({...item}));

    const [itemList, setItemArray] = useState(itemArray);
    const [selectedItemName, setSelectedItemName] = useState("");
    const {user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    
    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }



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
            {user ? (
                <div>
                        <button 
                        onClick={handleSignOut}
                        className="text-lg bg-green-700 rounded text-white px-2 py-1 mt-4"
                        type="button">Sign Out</button>
                    </div>
            ) : (null)}
            {user ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4"> 
                <div className="flex flex-col">
                    
                    <ItemList onItemSelect={handleItemSelect} items={itemList}/>
                </div>
                <div className="overflow-y-auto"> 
                    {selectedItemName && <MealIdeas ingredient={selectedItemName}/> }
                </div>
            <NewItem onAddItem={handleAddItem}/>
            </div>

            ) : (
                <section>
                    <p>You are not logged in. Must be logged in to view this page.</p>
                </section>
            ) }
            
            
        </main>
    );
}  
            
            
                
                
                
                
                        