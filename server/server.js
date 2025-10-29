import express from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//create app
const app=express()

//middelware
app.use(cors()); //cors → to allow your React app to access the API

const dataPath = path.join(__dirname, 'data', 'profiledata.json');
const data=JSON.parse(fs.readFileSync(dataPath,"utf-8"))

console.log(data)
//endpoint
app.get("/api/profile",(req,res)=>{
    res.json(data) 
    // res.send("hii") 
})
//listening server
const port=4000
app.listen(port,()=>{
    console.log(`server is running on port no http://localhost:${port}`)
})