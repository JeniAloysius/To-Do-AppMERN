import {useState} from "react";
export const Counter = () => {
    const [count, setCount] = useState(0);
    const handleincrement = () => {
        setCount(count + 1);
    };
    const handledecrement = () => {
        setCount(count - 1);
    };
    console.log("count: ",count);
return ( 
    <div>
    <h1>{count}</h1> 
        <button onClick={handleincrement}>Increment</button>
        <button onClick={handledecrement}>Decrement</button>
    </div>
    );
};