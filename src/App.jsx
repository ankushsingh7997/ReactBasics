import React from 'react'
import './App.css'

// to stop event bubbling we can use e.stopPropogation()

function App()
{
  return( 
  <>
    <div className='main'>
  
        
       <div onClick={(e)=>{console.log("this is div")}} style={{width:'10rem',border:'1px solid red'}}>
        <button onClick={(e)=>{
          e.stopPropagation()
          console.log("this is button")}}>click me</button>
       </div>
   
    
  

  </div>

     
  
  </>)
  }



export default App


