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

    let buttonStyle = "bg-green-500 w-20 rounded active:bg-amber-400";
    return (
        <div>
            <p>{count} <button className={buttonStyle} onClick={increment}>+</button> <button className={buttonStyle} onClick={decrement}>-</button></p>
        </div>
    );
}