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
               id:2,
               checked:false,
               item:"Learning MongoDb"
          },
          {
               id:3,
               checked:false,
               item:"Placements"
          },
          {
               id:4,
               checked:false,
               item:"Learning  Subjects"
          }
     ]
   );

   const Handelcheck = (id) => {
          const listitems = items.map((item) => 
          item.id ===id? {...item,checked : !item.checked}: item
          )     
          Setitems(listitems)

   }

   const Handeldelete =  (id) =>{
     const listitems = items.filter((item) =>
          item.id !==id)
          Setitems(listitems)
   }

  return ( 

   <main>
      <ul>
          {items.map((item) => 
          <li className="item" key={item.id}>
         <input  
          type='checkbox'
          onChange={() => Handelcheck(item.id) }
          checked ={item.checked}
          />
               <label>{item.item}</label>
               <FaTrashCan 
               role='button'
               tabIndex={0}
                onClick={() => Handeldelete(item.id)}
               />
               
          </li>
  
          )}
      </ul>
   </main>     
)
}

export default Content