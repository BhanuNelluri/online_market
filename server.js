import express from 'express';
import mongoose from 'mongoose';
import customerRoutes from './routes/product_routes.js';
import userRoutes from './routes/user_routes.js';

const app = express();
app.use(express.json());
const dbURL = "mongodb+srv://Devil_420:drlJwJ0yXtUCrgrj@cluster0.q7tft.mongodb.net/OnlineMarket";
mongoose.connect(dbURL)
     .then(()=>{
        console.log("Database Connected");
     })
     .catch(err=>{
        console.log(err)
     })
app.get('/',(req,res)=>{
    res.send("Welcome")
})
app.use('/', customerRoutes);
app.use('/', userRoutes);
app.listen(8080,()=>{
     console.log("App is listening on port 8080")
})
