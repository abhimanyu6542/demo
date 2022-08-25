import "./App.css";
import React, {useState} from "react";

export default function App() {
const [firstName, setFirstname]=useState("");
const [lastName, setLastname]=useState("");
const [fullname, setFullname]=useState([]);

const submitData=(e)=>{
  e.preventDefault();
  const myData={firstName:firstName, lastName:lastName}
  setFullname([myData])
  setFirstname("");
  setLastname("");

}


  return (
    <div className="App">
     
      <form>
        <input type="text" value={firstName} onChange={(e)=>setFirstname(e.target.value)} />
        <br />
        <input type="text"  value={lastName} onChange={(e)=>setLastname(e.target.value)} />
        <br />
        <button type="submit" onClick={submitData} >Submit</button>
      </form>
      <div>
        Your Full Name is : <br />
    
        {fullname.map((val)=>{
          return(
           <>
           {val.firstName} {val.lastName}
           </>
          )
        })}
        </div>
     
    </div>
  );
}
