// import logo from './logo.svg';
// import './App.css';

import './App.css'
import React,{useState} from 'react'


function Countclick()
{
  
   let [count,SetCount]=useState(0)
   const[random,SetRandom]=useState(0)
   function HandleFun()
   {
    SetRandom(Math.floor(Math.random()*10))
    SetCount(count+1)
    if(random==7) {alert(`number metches in ${count+1} clicks`)
SetCount(0)
   }
   }
  return <div>
    <div>
    
    </div>
    {count}
    <div>
    <button onClick={HandleFun}>clickMe</button>
    </div>

  </div>
}


let app='App'
function App()
{
  
  return <div className={app}>
    <div  >
    <Countclick/>
    </div>
  </div>
}



export default App

