
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {

   const[name,setName]=useState("");

   const handleNameChanger=(event)=>{
    setName(event.target.value);
   }
  return (

    <div>
        {/* Do not remove the main div */}

   <p> Enter your name:</p>
   <input 
     type="text"
     value={name}
     onChange={handleNameChanger}
     />
   <p id="maintitle">{name}? 'Hello {name}!':" "</p>
    </div>
  )
}

export default App
