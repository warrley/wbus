import express from "express";
import dotenv from "dotenv"
import { router } from "./routes/router";

dotenv.config();

const app = express();

app.use(router);

const port = process.env.PORT || 3000;
app.listen(3000, () => {
    console.log("server online at " + port + " port");
});