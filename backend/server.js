import cookieParser from "cookie-parser";
import express from "express";
import cors from 'cors'
import connectDB from "./config/db.js";
import 'dotenv/config' 

import userRouter from "./routes/userRouter.js";
import sellerRouter from "./routes/sellerRouter.js";
const app = express();
const PORT = process.env.PORT || 3000;
await connectDB();
const allowedOrigins = ['http://localhost:5173/']
app.use(express.json());
app.use(cookieParser());

app.use(cors({origin:allowedOrigins,credentials:true}))





app.use('/api/user',userRouter)
app.use('/api/seller',sellerRouter)



app.listen(PORT,()=>{
  console.log(`app is run on this port${PORT}`);
}) 