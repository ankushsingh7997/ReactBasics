// import logo from './logo.svg';
// import './App.css';

import './App.css'
import React,{useState} from 'react'

// function base increase marks 







let app='App'
function App()
{
  const[city,SetCity]=useState("")
  function City()
  {return <div>
   my city is : {city}
  </div>}

  function Setcit(mycity)
  {
    SetCity(mycity)
  }
  return <div className={app}>
    <div  >
    
    
    <City/>
    <Changecity Setcit={Setcit}/>
    </div>
  </div>
}

function Changecity(props)
{
  let mycity="srinagar"
  return <div>
  <button onClick={()=>{props.Setcit(mycity)}}> click here</button>
 
  </div>
}

export default App

