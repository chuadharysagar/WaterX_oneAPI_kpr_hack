import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';

configDotenv();
const dbURL = process.env.DB_URL;
const connetDB = async()=>{
   await mongoose.connect(dbURL).then(()=>{console.log("DB Connected")}).catch(()=>console.log("Connection error"))
}

export default connetDB;