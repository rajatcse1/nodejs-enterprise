import { delay } from "../../utils/common";
import { Article } from "./model";

let articles: Article[] = [
  {
    id: 1,
    title: "article one",
    content: "artical one content",
  },
];

const create = async (article: Article): Promise<Article> => {
  await delay(1000);
  const articleToAdd = { ...article, id: ++articles.length };
  console.log(
    "%csrcmodulesarticles\repository.ts:15 articles",
    "color: #007acc;",
    articles
  );
  console.log(
    "%csrcmodulesarticles\repository.ts:16 articleToAdd",
    "color: #007acc;",
    articleToAdd
  );
  articles.push({ ...articleToAdd });
  console.log(
    "%csrcmodulesarticles\repository.ts:18 articles",
    "color: #007acc;",
    articles
  );
  return articleToAdd;
};

const findAll = async (): Promise<Article[]> => {
  await delay(1000);
  return articles;
};

const findById = async (id: number): Promise<Article | undefined> => {
  await delay(1000);
  return articles.find((article) => article.id === id);
};

const update = async (article: Article): Promise<Article> => {
  await delay(1000);
  articles = [
    ...articles.filter((article) => article.id !== article.id),
    article,
  ];
  return article;
};

const deleteArticle = async (id: number): Promise<number> => {
  await delay(1000);
  articles = articles.filter((article) => article.id !== id);
  return id;
};

export default {
  create,
  findAll,
  findById,
  update,
  delete: deleteArticle,
};
