// 
import React, { useState } from 'react'

const UseStateTwo = () => {
    const initialValue = 0;
    const [count, setCount] = useState(initialValue);

    const incrementFive = () =>{
        for(let i=0;i<5;i++)
        {
            // using previous value it can update value from 1,2,..,5 atlast
            setCount(count=>count+1);
        }
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>incrementFive()}>+5</button>
        <button onClick={()=>setCount(count-1)}>-</button>
        <button onClick={()=>setCount(initialValue)}>Reset</button>
    </div>
  )
}

export default UseStateTwo