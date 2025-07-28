"use client"

import ItemList from "./item-list";
import NewItem from "./NewItem";
import { dbAddItem, dbGetItems } from "../_services/shopping-list-service";
import { useState, useEffect } from "react";
import HomeButton from "@/app/_components/home-button";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";

export default function Page(){


    //const [itemList, setItemArray] = useState(itemArray);
    const [selectedItemName, setSelectedItemName] = useState("");
    const {user, gitHubSignIn, firebaseSignOut } = useUserAuth();
    const [itemList, setItemList] = useState([]);
    
    async function loadItems(){
        if(user) {
            await dbGetItems(user.uid, setItemList)
        }
    }
    
    
    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }



    
    const handleAddItem = async (itemObj) => {
    try {
        if (!user) return;

        await dbAddItem(user.uid, itemObj);
        await loadItems(); 
    } catch (error) {
        console.error("Error adding item:", error);
    }
}
    /*const handleAddItem = async(itemObj) => {
        try {
            if (!user) return;

            const docRef = await dbAddItem(user.uid, itemObj);

            const newItemWithId = {...itemObj, id: docRef.id}

            setItemList((prevItems) => [...prevItems, newItemWithId])
        } catch (error) {
            console.error("Error adding item:", error);
        }
    }*/
    /*const handleAddItem = (itemObj) => {
        setItemList( [...itemList, itemObj]);
    }*/

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
                    
                    <ItemList onItemSelect={handleItemSelect} items={itemList} loadItems={loadItems}/>
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
            
            
                
                
                
                
                        