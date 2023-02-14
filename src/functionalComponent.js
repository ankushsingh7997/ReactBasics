import React, { useState } from 'react'

// export default function Profile(prop)
// {
//     const clickMe=()=>{alert("hay there")}
//     return <div><h1 onClick={clickMe}>{prop.text}{prop.data.name}</h1></div>
// }

// show and hide 
export default function Profile()
{
    const[show,setShow]=useState(true)
    

    return <div>
        {show?<h1>hello there</h1>:null}
        <button onClick={()=>{setShow(show?false:true)}}>click me</button>
    </div>
}