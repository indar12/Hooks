import React, { useState } from 'react'

const UseStateThree = () => {
    const [name, setName] = useState({firstName:'',lastName:''});
  return (
    <div>
        <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
        <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
        <h1>Your first name is - {name.firstName}</h1>
        <h1>Your last name is - {name.lastName}</h1>
        <h1>{JSON.stringify(name)}</h1>
    </div>
  )
}

export default UseStateThree