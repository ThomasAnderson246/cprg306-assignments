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

    let buttonStyle = "bg-green-500 w-20 rounded active:bg-amber-400 disabled:bg-gray-500";
    return (
        <div>
            <p>
                {count} 
                <button className={buttonStyle} onClick={increment} disabled={count===20}>+</button> 
                <button className={buttonStyle} onClick={decrement} disabled={count===1}>-</button>
            </p>
        </div>
    );
}