// its working wrongly (unmount)
import React, { useEffect, useState } from 'react'

const UseEffectFour = () => {
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [display,setDisplay] = useState(true);

    const logMousePosition = e =>{
        console.log('mouse event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log('useEffect called');
        window.addEventListener('mousemove',logMousePosition);

        return ()=>{
            console.log("component unmounted");
            window.removeEventListener('mousemove',logMousePosition);
        }
    },[display])

  return (
    <div>
        {
            <div>
                <button onClick={()=>setDisplay(!display)}>Toggle Display</button> 
          
        
                {display && <h1>hooks X- {x} Y= {y}</h1>}
            </div>
           
        }
        
    </div>
  )
}

export default UseEffectFour