
import React, {useState} from 'react'

export default function () {

    const [input, setInput]= useState("");

    const addMember=(e)=>{
        e.preventDefault();
        setInput(e.target.value)
    }



  return (
   <>
     <div className="conatiner">
        <h1>Frien List</h1>

        <input 
         type="text"  
        
         onChange={(e)=>e.target.value}
         />

          <button onClick={addMember} >Add</button>

        <h4>Friend Lis : <br />
           {input}
         </h4>
     </div>
   </>
  )
}
