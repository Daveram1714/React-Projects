import express from "express";

const app  = express();
const PORT = 6969;

app.get("/" , (req,res) => {
    res.json({msg: "Hello"})
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

       