import React,{useState, useEffect} from 'react'
import './App.css'



function App()
{
  const[timer,setTimer]=useState(0)
  const handleTimer=()=>{
 
    
  }
  useEffect(()=>{
    let interval=setInterval(()=>{
      setTimer(timer+1)
    },1000)
  

   return()=> clearInterval(interval)



  })
  
  
  return( 
  <>
    <div className='main'>


        <h1 style={{fontSize:"92px",fontWeight:999}}>{timer}</h1>

        <button className='button-9' onClick={handleTimer}>start timer</button>
    
  

  </div>

     
  
  </>)
  }



export default App

