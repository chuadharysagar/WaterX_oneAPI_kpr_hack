import express from 'express';
import cors from 'cors';
import connetDB from './config/db.js';
import { configDotenv } from 'dotenv';

// App  config
configDotenv();
const app = express();
const port =5000;

//middleware
app.use(express.json());
app.use(cors());  // frontend backend connection 

//databse connection 
connetDB();

//API Endpoints





app.get("/",(req,res)=>{
    res.send("Api is working")
})

app.listen(port, ()=>{
   console.log(`API is running on http://localhost:${port}` )
})