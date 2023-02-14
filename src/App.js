// import logo from './logo.svg';
// import './App.css';

import './App.css'
import React,{useState} from 'react'





function EventHandler()
{
  const[data,setData]=useState('')

  function handleEvent(e)
  {
     setData(e.target.value)
    
  }

 return <div>
  <input type={"text"} value={data} onChange={handleEvent}></input>
 </div>
}





let app='App'
function App()
{
  
  return <div className={app}>
    <div  >
      <EventHandler/>
    </div>
  </div>
}



export default App

