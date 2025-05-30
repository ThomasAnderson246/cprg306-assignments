"use client";

import { useState } from "react";

export default function NewItem(){
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount(count+1);
    }

    const decrement = () => {
        setCount(count-1);
    }

    let buttonStyle = "bg-green-500 w-20 rounded hover:bg-green-300 hover:cursor-pointer active:bg-amber-400 disabled:bg-gray-500 disabled:cursor-not-allowed";
    return (
        <div>
            <p>
                Count: {count} 
                <button className={buttonStyle} onClick={increment} disabled={count===20}>+</button> 
                <button className={buttonStyle} onClick={decrement} disabled={count===1}>-</button>
            </p>
        </div>
    );
}