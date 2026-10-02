import dotenv from "dotenv";
dotenv.config();

import connectDb from "./src/db/index.js";

await connectDb();