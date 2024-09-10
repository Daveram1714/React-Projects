import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

const Itemslist = ({items,HandelCheck,HandelDelete}) => {
  return (

<ul>
          {items.map((item) => 
          <li className="item" key={item.id}>
         <input  
          type='checkbox'
          onChange={() => HandelCheck(item.id) }
          checked ={item.checked}
          />
               <label
          style={(item.checked)? {textDecoration:"line-through"} : null}
               
               >{item.item}</label>
               <FaTrashCan 
               role='button'
               tabIndex={0}
                onClick={() => HandelDelete(item.id)}
               />
               
          </li>
          
        )}
        </ul>
  

)
}

export default Itemslist