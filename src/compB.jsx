import React, { useContext } from 'react'
// import CompC from './compC'
import { FirstName,LastName } from './App';

const CompB = () => {
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
  return (
    <div>
        
        <h1> hii {fname} {lname}</h1>
        <p>now we are using useContext() Hook</p>
        {/* <CompC/> */}


        </div>
  )
}

export default CompB