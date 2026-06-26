const express = require('express');
const app = express();

app.get("/api/todos", (req,res)=>{
    res.json([
        {id :1, text: "Learn React"},
        {id: 2, text: "Learn Node.js"}
    ]);
});

app.listen(5000, ()=>{
    console.log("Server running on port 5000");
});