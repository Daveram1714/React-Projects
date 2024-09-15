import express from "express";

const PORT = 6969;
const app = express()


app.get("/",(res,req) =>{
        res.json({msg : "Helo"})
})


app.listen(PORT , () =>{
    console.log(`The port is running at http://localhost::${PORT}`);
    
})