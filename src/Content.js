import React from 'react'
import { useState } from 'react';


const Content = () => {

     const[name,setName] = useState("Increase");
        function HandelNamechange(){
          const name = ["Earn","Grow","Give"];
          const int = Math.floor(Math.random()*3);
          setName (name[int])
     }



  return ( 

   <main>
        <p>  Let's {name} Money</p>
        <button onClick={HandelNamechange}> Click Me </button>
        
   </main>     
)
}

export default Content