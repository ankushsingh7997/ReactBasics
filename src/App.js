// import logo from './logo.svg';
// import './App.css';

import './App.css'
import React,{useState} from 'react'

function Regestration()
{
const[firstName,SetFirstName]=useState("")
const[lastName,SetLastName]=useState("")
const[gender,SetGender]=useState("")
const[country,Setcountry]=useState("India")
const[email,Setemail]=useState(false)

function handleSubmit(e)
{
e.preventDefault()
  if(firstName&&lastName&&gender&& country&&email) {console.log("regestered successfully")
   console.log(`firstName : ${firstName}`)
   console.log(`lastName : ${lastName}`)
   console.log(`gender : ${gender}`)
   console.log(`country : ${country}`)
   console.log(`email : ${email}`)
}
   else{alert("please fill all the fields")}
}


return <div>
<form>
  <div>
  <section>
<label>firstName</label>
<input type={'text'} value={firstName} onChange={(e)=>{SetFirstName(e.target.value.trim())}}></input>

  </section>
  <section>
<label>lastName</label>
<input type={'text'} value={lastName} onChange={(e)=>{SetLastName(e.target.value.trim())}}></input>

  </section>
  <section style={{display:"flex",justifyContent:'space-evenly'}}>
<label>gender</label>
<label > male</label>
<input type={'radio'} name='gender' value={'male'} onChange={(e)=>{SetGender(e.target.value)}}></input>
<label> female</label>
<input type={'radio'} name='gender' value={'female'} onChange={(e)=>{SetGender(e.target.value)}}></input>

  </section>
  <section>
<label>Country</label>
<select onChange={(e)=>{Setcountry(e.target.value)}}>
<option value={'India'}>India</option>
<option value={'China'}>China</option>
<option value={'Pakistan'}>Pakistan</option>
<option value={'Russia'}>Russia</option>
<option value={'Nepal'}>Nepal</option>

</select>

  </section>
  <section>
<label>Do you want to recieve email </label>
<input type={'checkbox'} value={email} onChange={(e)=>{Setemail(!email)}} ></input>


  </section>
  <section><button onClick={handleSubmit}>Submit</button></section>
  </div>
  
</form>



</div>
}



let app='App'
function App()
{
  
  return <div className={app}>
    <div  >
    <Regestration/>
    </div>
  </div>
}



export default App

