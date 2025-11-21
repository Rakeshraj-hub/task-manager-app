import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import Taskrouter from "./routes/Task.route.js";

dotenv.config();

const PORT = process.env.PORT

const app = express();


app.use(express.json())

//Connecting to Frontend
app.use(cors())

//Routes
app.use('/api/task', Taskrouter)


 // MongoDb Connection
mongoose.connect(process.env.MONGODB_CONN).then(()=>{
    console.log("Database connected");
}).catch(err=>console.log("database connection failed", err))

app.listen(PORT, ()=>{
    console.log("Server running on port", PORT);
})