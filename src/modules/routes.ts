import { Request, Response, Router } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log(
    "%csrcmodules\routes.ts:6 new Date()",
    "color: #007acc;",
    new Date()
  );
  res.json("I am dashboard 7.");
});

export default router;
