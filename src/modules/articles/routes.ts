import { Request, Response, Router } from "express";
import articleController from "./controller";

const router = Router();

router
  .route("/")
  .get(articleController.getArticles)
  .post(articleController.createArticle);

router
  .route("/:id")
  .get(articleController.getArticleById)
  .put(articleController.updateArticle)
  .delete(articleController.deleteArticle);

export default router;
