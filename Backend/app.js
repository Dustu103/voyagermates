const express= require('express')
const app= express();
const port =2003

app.get('/',(req,res)=>{
    res.send("Home")
})

app.listen(port,()=>{
    console.log("app is listening on port")
})