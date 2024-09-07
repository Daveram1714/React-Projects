import React from 'react'
import { useState } from 'react';
import { FaTrashCan } from "react-icons/fa6";


const Content = () => {
   const [items,Setitems] = useState(
     [
          {
               id:1,
               checked:true,
               item:"Learningreact"
          },
          {
               id:1,
               checked:true,
               item:"Learning MongoDb"
          },
          {
               id:1,
               checked:true,
               item:"Placements"
          },
          {
               id:1,
               checked:true,
               item:"Learning  Subjects"
          }
     ]
   );


  return ( 

   <main>
      <ul>
          {items.map((item) => 
          <li>
         <input  
          type='checkbox'
          checked ={item.checked}
          />
               <label>{item.item}</label>
               <><FaTrashCan />
               </>
          </li>
  
          )}
      </ul>
   </main>     
)
}

export default Content