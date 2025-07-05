import express from "express";
import dotenv from "dotenv";
import urlRoutes from "./src/routes/url.routes.js";

dotenv.config();

const app = express();

app.use(express.json())

app.listen(process.env.PORT,()=>{
    console.log(`server is runing at the port ${process.env.PORT}`)
})

app.use("/api/shortUrl",urlRoutes);
