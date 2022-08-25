import React, {useState} from "react";
// Importing app.css is css file to add styling 
const Counter = () => {
  //  Counter is a state initialized to 0
  const [counter, setCounter] = useState(0)
  
  // Function is called everytime increment button is clicked
  const handleClick1 = () => {
    // Counter state is incremented
    setCounter(counter + 1)
  }
  
  // Function is called everytime decrement button is clicked
  const handleClick2 = () => {
    // Counter state is decremented
    if(counter !=0) setCounter(counter - 1)
    
  }
  
  return (
    <div >
      Counter App
      <div>
        {counter}
      </div>
      
        <button
          onClick={handleClick1}>Increment</button>
        <button 
          onClick={handleClick2}>Decrement</button>
      
    </div>
  )
}
  
export default Counter;