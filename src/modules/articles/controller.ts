import { NextFunction, Request, Response } from "express";
import articleService from "./service";
import { successResponse } from "../../utils/responseHelpers";

const createArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const createdArticle = await articleService.createArticle(req.body);
    res
      .status(201)
      .json(successResponse(createdArticle, " Article created successfully."));
  } catch (error) {
    next(error);
  }
};
const getArticles = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const articles = await articleService.getArticles();
    res
      .status(200)
      .json(successResponse(articles, " Articles fetch successfully."));
  } catch (error) {
    next(error);
  }
};
const getArticleById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const article = await articleService.getArticleById(
      parseInt(req.params.id)
    );
    res
      .status(200)
      .json(successResponse(article, " Article fetch successfully."));
  } catch (error) {
    next(error);
  }
};
const updateArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updatedArticle = await articleService.updateArticle(req.body);
    res
      .status(200)
      .json(successResponse(updatedArticle, " Article updated successfully."));
  } catch (error) {
    next(error);
  }
};
const deleteArticle = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deletedArticleId = await articleService.deleteArticle(
      parseInt(req.params.id)
    );
    res
      .status(200)
      .json(
        successResponse(deletedArticleId, " Article created successfully.")
      );
  } catch (error) {
    next(error);
  }
};
export default {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
};
