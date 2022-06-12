import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blogRoutes';
import Router from './routes/userRoutes';

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users" , Router);
app.use("/api/blogs", blogRouter);

mongoose
.connect("mongodb+srv://admin:L4Zon2Z4Ei32cAOW@cluster0.jq2qu.mongodb.net/blogApp?retryWrites=true&w=majority")
.then(() => app.listen(8000))
.then(() => console.log("connected to database"))
.catch((err) => console.log(err))
//L4Zon2Z4Ei32cAOW
