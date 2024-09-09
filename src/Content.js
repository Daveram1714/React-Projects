import React from 'react'
import { FaTrashCan } from "react-icons/fa6";


const Content = ({items,HandelCheck,HandelDelete}) => {


  
 return ( 

   <main>
      <ul>
          {items.map((item) => 
          <li className="item" key={item.id}>
         <input  
          type='checkbox'
          onChange={() => HandelCheck(item.id) }
          checked ={item.checked}
               style={(item.checked)? {textDecoration:"line-through"} : null}
          />
               <label
               
               >{item.item}</label>
               <FaTrashCan 
               role='button'
               tabIndex={0}
                onClick={() => HandelDelete(item.id)}
               />
               
          </li>
  
          )}
      </ul>
   </main>     
)
}


export default Content