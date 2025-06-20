"use client";

import { useState } from "react";

export default function NewItem( {onAddItem }){
    
    
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");

    // function to generate a random id
    const generateID = () => Math.random().toString(36).slice(2);
    

    // form controls
    const handleNameChange = (event) => setName(event.target.value);
    
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => 
        {
            event.preventDefault();

            
            const id = generateID();

            let itemObject = {
                itemName: name,
                itemCategory: category,
                itemCount: count,
                itemId: id,

            }

            onAddItem(itemObject);

            setCount(1);
            setName("");
            setCategory("produce");

        }

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    let buttonStyle = "bg-green-500 w-20 rounded hover:bg-green-300 hover:cursor-pointer active:bg-amber-400 disabled:bg-gray-500 disabled:cursor-not-allowed";
    let inputStyle = "border rounded bg-green-500 focus:bg-green-300 text-black";
    let flexBox = "flex justify-center items-center mx-auto w-300 h-12 bg-gray-600"
    
    return (
        <form onSubmit={handleSubmit}>
            <div className={flexBox}>
                <div className="flex-1 m-2 text-white">Count: {count} </div>
                <div className="flex-1 m-2"><button type="button" className={buttonStyle} onClick={increment} disabled={count===20}>+</button> </div>
                <div className="flex-1 m-2"><button type="button" className={buttonStyle} onClick={decrement} disabled={count===1}>-</button></div>
            </div>
            <div className={flexBox}>
                <div className="flex-1 m-2 text-white"><label>Item Name: </label>
                <input
                    className={inputStyle}
                    type="text"
                    onChange={handleNameChange}
                    value={name}
                    required={true}
                />
                </div >  
                
                

                <div className="flex-1 m-1 text-white ">
                    <label>Category: </label>
                    <select onChange={handleCategoryChange} value={category} className={inputStyle}>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen Foods</option>
                        <option value="canned">Canned Goods</option>
                        <option value="dry">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex-1 m-1">
                    <button className={buttonStyle}>Submit</button>
                </div>
            </div>
        </form>
    );
}
        
        