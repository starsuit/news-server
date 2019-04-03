const dotenv = require("dotenv");
dotenv.config();

const key = process.env.KEY;

const url =
  "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=" + key;

const fetchNews = () => {};
