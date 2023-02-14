// import logo from './logo.svg';
// import './App.css';
// // import Profile from './profile';

// import Profile from './functionalComponent';
// let app="App"
// function App() {
//   return (
//     <div className={app}>
      
        
//         <Profile text="Welcome" data={{name:" Ankush"}}/>
        
     
      
//     </div>
//   );
// }

// export default App;
import './App.css'
import React,{useState} from 'react'

// function base increase marks 

function Markss()
{
const[marks,SetMarks]=useState(10)





  return <div>
     <p> my marks : {marks}</p>
     <button onClick={()=>{SetMarks(marks+10)}}>increase marks</button>
  </div>
}

// class base increase marks
class Marks extends React.Component
{
  constructor(){
    super()
  this.state={marks:10}
  }

  render(){
    return <div>
      <p>marks is : {this.state.marks}</p>
      <button onClick={()=>{this.setState({marks:this.state.marks+10
      })}}>increase marks</button>
    </div>
  }

}





let app='App'
function App()
{
  return <div className={app}>
    <div  >
    
    <Marks/>
    <Markss/>
    </div>
  </div>
}

export default App

