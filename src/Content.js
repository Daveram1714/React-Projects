import React from 'react'

const Content = () => {
 function Handel(){
    const name = ["hii","hello","how are you"];
    const int = Math.floor(Math.random()*3);
    return name[int]

 }
 const Handelclick = (name) => {
      console.log(`Hello ${name}` );
 } 



  return ( 

   <main>
        <p>{Handel()} Daveram</p>
        <button onClick={() => Handelclick('Daveram')}>Click Me </button>
   </main>     
)
}

export default Content