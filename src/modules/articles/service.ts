import { Article } from "./model";
import repository from "./repository";

const createArticle = async (article: Article): Promise<Article> => {
  if (!article.title || !article.content) {
    throw new Error("All fields required");
  }
  return await repository.create(article);
};

const getArticles = async (): Promise<Article[]> => {
  return await repository.findAll();
};

const getArticleById = async (id: number): Promise<Article | undefined> => {
  return await repository.findById(id);
};

const updateArticle = async (article: Article): Promise<Article> => {
  const deletableItem = await getArticleById(article.id);
  if (!deletableItem) {
    throw new Error("Article not found to update.");
  }
  return await repository.update(article);
};

const deleteArticle = async (id: number): Promise<number> => {
  const deletableItem = await getArticleById(id);
  if (!deletableItem) {
    throw new Error("Article not found to delete.");
  }
  return await repository.delete(id);
};

export default {
  createArticle,
  getArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
};
