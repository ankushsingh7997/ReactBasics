import React,{useState,useRef} from 'react'
import './App.css'


function App()
{
  const input=useRef(null)
  
  const[image,setImage]=useState('')
  const[file,setFile]=useState(null)
  const handleImage=(e)=>{
    setImage(e.target.files[0])
    
    
  }
  const handleClick=()=>{
    input.current.click();
    
    

  }
  const handleSubmit=()=>{
    if(image){
    let reader=new FileReader()
    reader.readAsDataURL(image)

    reader.onloadend=()=>{
      setFile(reader.result)
    }
  }
  console.log(file)
  }

  
  return <div className='maincont'>
    <div onClick={handleClick}className='main'>
      {image?<img src={URL.createObjectURL(image)} alt="image must be curropted"/>:
      
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rwFHWUOYHzwhzoOYei7bEOOc2A4ny50zmQ&usqp=CAU' alt="image must be curropted"/>}
   <input type='file' ref={input}name="file" onChange={handleImage} style={{display:'none'}}/>
   
    </div>
    <button onClick={handleSubmit}>submit</button>
  </div>
}



export default App

