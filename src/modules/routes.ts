import { Request, Response, Router } from "express";
import logger from "../utils/loggerHelper";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    logger.info("dashboard");
    res.json('I am dashboard.');
})

export default router;