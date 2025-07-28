import { db } from "../_utils/firebase";
import {collection, getDocs, addDoc, query } from "firebase/firestore";

export async function dbGetItems(userId, itemListStateSetter){
    try {
        const allItemsRef = collection(db, "users", userId, "items");
        const allItemsRefQuery = query(allItemsRef);
        const querySnapshot = await getDocs(allItemsRefQuery);
        let itemList = [];
        querySnapshot.forEach((doc) => {
            let thisItem = {
                id: doc.id,
                ...doc.data()
            }
            itemList.push(thisItem);

        });
        itemListStateSetter(itemList);
    } catch (error) {
        console.log(error);
    }
}

export async function dbAddItem(userId, itemObj){
    try {
        const newItemRef = collection(db, "users", userId, "items");
        const newItemPromise = await addDoc(newItemRef, itemObj);
        console.log(newItemPromise.id);
        return newItemPromise;
        
    } catch (error) {
        console.log(error);
    }
}