//with one dependencies
import React, { useEffect, useState } from 'react'

const UseEffectTwo = () => {
    const [count, setCount] = useState(0);
    const [name,setName] = useState('');

    useEffect(()=>{
        console.log("useeffect updates");
        document.title = `you clicked ${count} times`;
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}

export default UseEffectTwo