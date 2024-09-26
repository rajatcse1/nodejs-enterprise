import express, { Request, Response } from "express";
import dotenv from "dotenv";
import baseRoutes from "./modules/routes";
import articleRoutes from "./modules/articles/routes";
import userRoutes from "./modules/users/routes";
import morgan from "morgan";
import helmet from "helmet";
import { connectPostgres } from "./configs/pgDb";

dotenv.config();

const app = express();

app.use(express.json());
app.use(morgan('combined'));
app.use(helmet.crossOriginResourcePolicy({ policy: "same-origin" }));

const startServer = async () => {
    try {
        await connectPostgres();

        app.use("/", baseRoutes);
        app.use("/articles", articleRoutes);
        app.use("/users", userRoutes);
    
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port${process.env.PORT}`);
        }).on('error', () => {
            console.error('Server not started !!');
        })
        
    } catch (error) {
        console.error('Error starting the server:', error);
    }
}

startServer();