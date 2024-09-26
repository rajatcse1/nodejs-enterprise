import { Request, Response, Router } from "express";
import { User } from "./entity";
import { PostgresDatasource } from "../../configs/pgDb";

const router = Router();

router.route("/").post(async (req: Request, res: Response) => {
    const user = new User();
      user.name = req.body.name;
      user.email = req.body.email;

      const userRepository = PostgresDatasource.getRepository(User);
      await userRepository.save(user);

      res.status(201).send(user);
});

export default router;