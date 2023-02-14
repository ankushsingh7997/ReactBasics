// import logo from './logo.svg';
// import './App.css';

import './App.css'
import React,{useState} from 'react'





function Assignment()
{
  const[data,setData]=useState('')

  function handleEvent(e)
  {
     setData(e.target.value)
    
  }

 return <div>
  <div>
  <textarea value={data} onChange={handleEvent}></textarea></div>
  <button onClick={()=>{setData(data.toUpperCase())}}>change to upperCase</button>
  <p>{data}</p>
 </div>
}





let app='App'
function App()
{
  
  return <div className={app}>
    <div  >
      <Assignment/>
    </div>
  </div>
}



export default App

