// import logo from './logo.svg';
// import './App.css';

import './App.css'
import React,{useState} from 'react'


function Counter()
{
   let [count,SetCount]=useState(0)

  return <div>
    {count}
    <button onClick={()=>{SetCount(count+1)}}>increment</button>
    <button onClick={()=>{if(count>0)SetCount(count-1)}}>decrement</button>

  </div>
}


let app='App'
function App()
{
  
  return <div className={app}>
    <div  >
    <Counter/>
    </div>
  </div>
}



export default App

