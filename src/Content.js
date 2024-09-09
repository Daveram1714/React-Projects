import React from 'react'
import { FaTrashCan } from "react-icons/fa6";


const Content = (items,HandelCheck,HandelDelete) => {
//    const [items,Setitems] = useState(
//      [
//           {
//                id:1,
//                checked:false,
//                item:"Learningreact"
//           },
//           {
//                id:2,
//                checked:false,
//                item:"Learning MongoDb"
//           },
//           {
//                id:3,
//                checked:false,
//                item:"Placements"
//           },
//           {
//                id:4,
//                checked:false,
//                item:"Learning  Subjects"
//           }
//      ]
//    );

//    const Handelcheck = (id) =>{
//      const listitems = items.map((item) =>
//      item.id===id ? {...item , checked : !item.checked} :item)
//      Setitems(listitems)
//      localStorage.setItem("todo-list",JSON.stringify(listitems))
//    }

//    const Handeldelete = (id) => {

//      const listitems  = items.filter((item) =>
//      item.id !== id )
//      Setitems(listitems)
//      localStorage.setItem("todo-list",JSON.stringify(listitems))
//    }



  return ( 

   <main>
     {(items.length) ? (
      <ul>
          {items.map((item) => 
          <li className="item" key={item.id}>
         <input  
          type='checkbox'
          onChange={() => HandelCheck(item.id) }
          checked ={item.checked}
          />
               <label 
               style={(item.checked) ? {textDecoration : 'line-through'}: null}
               
               onClick={() => HandelCheck(item.id)}
               >{item.item}</label>

               <><FaTrashCan 
               onClick={()=> HandelDelete(item.id)}
               role='button'
               tabIndex={0}
               />
               </>
          </li>
          )}
      </ul>
     ) :
     ( <p> Your List is EMpty</p>)
}
   </main>     
)
}

export default Content