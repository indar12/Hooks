// unmounting 
import { useState,useEffect } from 'react'

const UseEffectFive = () => {
    const [count, setCount] = useState(0);
    // if you give prev then you dont want to specific dependencies ie [] only this is needed
    const tick =()=>{
        setCount(prev=>prev+1)
    }
    // if you give only count then you have specific dependencies [count]
    // const tick =()=>{
    //     setCount(count+1)
    // } 
  useEffect(()=>{
    console.log("useeffect")
    const interval=setInterval(tick,1000)
    return ()=>{
        console.log("clearInterval");
        clearInterval(interval)
    }
  },[])
  return (
    <div>
        {count}
    </div>
  )
}

export default UseEffectFive