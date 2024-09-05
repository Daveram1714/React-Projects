import React from 'react'

const Content = () => {
 function Handel(){
    const name = ["hii","hello","how are you"];
    const int = Math.floor(Math.random()*3);
    return name[int]

 }



  return ( 

   <main>
        <p>{Handel()} Daveram</p>
   </main>     
)
}

export default Content