import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from 'react';

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

const HandelCheck = (id) =>{
  const listitems = items.map((item) =>
  item.id===id ? {...item , checked : !item.checked} :item)
  Setitems(listitems)
}
const HandelDelete =  (id) =>{
  const listitems = items.filter((item) =>
       item.id !==id)
       Setitems(listitems)
}



  return (
   <div className="App">
      <Header />
      <Content
      items = {items}
      HandelCheck = {HandelCheck}
      HandelDelete  =  {HandelDelete}
      
      />
      <Footer />
      
    </div>
  );
}

export default App;
