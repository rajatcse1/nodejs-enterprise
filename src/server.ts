import express, { Request, Response } from "express";
import dotenv from "dotenv";
import baseRoutes from "./modules/routes";
import articleRoutes from "./modules/articles/routes";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/", baseRoutes);
app.use("/articles", articleRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port${process.env.PORT}`);
}).on('error', () => {
    console.error('Server not started !!');
})