// single time render []
import React, { useEffect, useState } from 'react'

const UseEffectThree = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log("mouse event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log("useEffect called");
        window.addEventListener('mousemove',logMousePosition);
    },[])
  return (
    <div>
        <h1>Hooks X - {x} Y - {y}</h1>
    </div>
  )
}

export default UseEffectThree;