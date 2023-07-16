import React,{createContext} from 'react'
import './App.css'
import CompA from './CompA'
const FirstName=createContext();
const LastName=createContext();

function App()
{
  return( 
  <>
    <div className='main'>
  <FirstName.Provider value={'Ankush'}>
    <LastName.Provider value={'Singh'}><CompA/></LastName.Provider>
  
  </FirstName.Provider>
        
       
   
    
  

  </div>

     
  
  </>)
  }



export default App
export {FirstName,LastName}

