const express = require("express") 
const todo = express()
const bodyParser  = require("body-parser")

todo.use(bodyParser.json())




todo.listen(5000, function(){
    console.log("Connection Establihed .....");
    }  )

