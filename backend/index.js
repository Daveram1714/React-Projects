import express from 'express';
import connectDB from "./db/db.js";
import userRoutes from "./route/todo.route.js";

const app = express();
const PORT = 6969


// mongoose.connect("mongodb://127.0.0.1:27017/bike").then(()=>{
//     console.log("DB connected successfully")
// })
// .catch(()=>{
//     console.log("DB connection failed")
// })

connectDB();

app.use(express.json())
// app.use(express.urlencoded({ extended: true }));


app.use("/user",userRoutes)

app.get("/",(res,req)=>{
    res.json({msg:"Hello !."})
} )

app.listen(PORT, ()=>{
    console.log(`Server is running in the Port http://localhost:${PORT}`);
    
})