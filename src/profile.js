import react from 'react'

// // props 
// // object is also passed using prop
// export default class Profile extends react.Component
// {
//     render()
//     {
//         return(
//             <div>
//                 <h1>{this.props.text}</h1>
            
//                 <h1>{this.props.data.name}</h1>

//             </div>
//         )
//     }
// }


// states 
// export default class Profile extends react.Component
// {
//     constructor()
//     {
//         // compulsary to use super keyword 
//         super()
//         this.state={name:"ankush",email:"cu.16@gmail.com",count:0}
//     }
//     // function to change value of state
//      fxn()
//     {
//         this.setState({name:"vishank",count:this.state.count+1})
//     }
//     render()
//     {
//         return (<div>
//             <h1>{this.state.count}</h1> 
//             <h1>{this.state.name}</h1>
//             <h2>{this.state.email}</h2>
//             <button onClick={()=>{this.fxn()}}>Update Name</button>
          
//         </div>
//         )
//     }
// }

// event handeling 
// click Event
export default class Profile extends react.Component
{
    render()
    {
        return <div>
            <h1>hello there</h1>
        </div>
    }
}

