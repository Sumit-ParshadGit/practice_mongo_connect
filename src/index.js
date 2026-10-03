import dotenv from "dotenv";
import connectDb from "./src/db/index.js";
import {app} from "./src/app.js";
dotenv.config({
    path: "./.env"
});

const port = process.env.PORT||8000;
connectDb()
    .then(()=>{
        console.log("Database connected successfully at port:",port);
    })
    .catch((error)=>{
        console.log("Database connection failed:",error);
        process.exit(1);
    })
