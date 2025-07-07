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
        
        <div className="flex justify-center items-center mx-auto w-75 h-12 bg-gray-600">
            
                <div className="flex-1 m-2 text-white">Count: {count} </div>
                <div className="flex-1 m-2"><button className={buttonStyle} onClick={increment} disabled={count===20}>+</button> </div>
                <div className="flex-1 m-2"><button className={buttonStyle} onClick={decrement} disabled={count===1}>-</button></div>
                
                
            
        
        </div>
    );
}

