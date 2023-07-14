import React,{useState,useRef, useEffect} from 'react'
import './App.css'


function App()
{
  const[files,setFiles]=useState(null)
  const[image,setImage]=useState('')
  const input=useRef('')
  const handleDragOver=(e)=>{
    e.preventDefault();
    
    
  }
  const handleDrop=(e)=>{
    e.preventDefault();
   setFiles(e.dataTransfer.files[0]) 
  }
  
  const clickSelectFile=()=>{
    input.current.click();
    

  }
  const handlefile=(e)=>{
   
    setFiles(e.target.files[0])
  
}
const handleSubmit=()=>{
 
    if(files){
      let reader=new FileReader()
      reader.readAsDataURL(files)
  
      reader.onloadend=()=>{
        setImage(reader.result)
      }
      setFiles(null)
    alert('file uploaded successfully')
    }
    else alert('no file to upload')
    
    

}
useEffect(()=>{
  console.log(image)
})
  
  return( 
  <>
    <div className='main' onDragOver={handleDragOver}
    onDrop={handleDrop}>
        
    
  <h1>Drag and Drop Files here</h1>
  { !files?<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_rwFHWUOYHzwhzoOYei7bEOOc2A4ny50zmQ&usqp=CAU'alt='' />:<img src={URL.createObjectURL(files)} alt=''/>}
  
  <input type="file" multiple ref={input} style={{visibility:'hidden'}} onChange={handlefile}/>
  <button onClick={clickSelectFile}>Select Files</button>
  <button className='button-9' onClick={handleSubmit}>submit</button>

  </div>

     
  
  </>)
  }



export default App

