import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';
import Additem from "./Additem";
function App() {

 /* function handelchanhe() {
  const name = ["hi","hello"];
  const int  = Math.floor(Math.random()*2);
  return name[int]
}
*/


const [items,Setitems] = useState(
  [
       {
            id:1,
            checked:false,
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

     const [addItem,SetAddItems] = useState('')

     const newItem = (item) => {
          const id = items.length ? items[items.length - 1].id + 1 : 1;
          const newItems = [...items, { id, checked: false, item }];
          Setitems(newItems);
          localStorage.setItem("DO-TO list", JSON.stringify(newItems));
        }

const HandelCheck = (id) =>{
  const listitems = items.map((item) =>
  item.id===id ? {...item , checked : !item.checked} :item)
  Setitems(listitems)
  localStorage.setItem("To-do list",JSON.stringify(listitems))
}
const HandelDelete =  (id) =>{
  const listitems = items.filter((item) =>
       item.id !==id)
       Setitems(listitems)
     localStorage.setItem("To-do list",JSON.stringify(listitems))
}

const HandelSubmit = (e) =>{
     e.preventDefault()     
     if(!addItem) return ;
     console.log(addItem)
     newItem(addItem)
     SetAddItems('')          
}


  return (
   <div className="App">
      <Header />
      <Additem 
      addItem = {addItem}
      SetAddItems = {SetAddItems}
      HandelSubmit ={HandelSubmit}
      />
      <Content
      items = {items}
      HandelCheck = {HandelCheck}
      HandelDelete  =  {HandelDelete}
      
      />
      <Footer
      length = {items.length}
      />
      
    </div>
  );
}


export default App;
