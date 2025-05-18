import express from "express";

const app = express();


app.get("/",(req,res)=>{

  res.send(`<h1>This is Pranshu Chauhan</h1>`)

})


const PORT = 8000;

app.listen(PORT,()=>{
  console.log(`app is run on this port${PORT}`);
})