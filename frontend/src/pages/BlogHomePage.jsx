import React from "react";
import TrendingArticles from "./TrendingArticles";
import style from "../styling/Blog.module.css";
import LatestArticles from "./LatestArticles";
const BlogHomePage = () => {
  return (
    <div className={style.blogMainContainer}>
      <TrendingArticles />
      <LatestArticles />
    </div>
  );
};

export default BlogHomePage;