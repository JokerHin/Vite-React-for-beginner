import React, {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(c => c + 1) //This arrow function will help in update the previous stage not the current stage
        setCount(c => c + 1)
    }

    const reset = () => {
        setCount(0)
    }

    const decrement = () => {
        setCount(c => c - 1)
    }

    return (
        <>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increase</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>decrease</button>
        </>
    )
}

export default Counter