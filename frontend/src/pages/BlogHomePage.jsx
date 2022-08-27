import React from "react";
import TrendingArticles from "./TrendingArticles";
import style from "../styling/Blog.module.css";
import LatestArticles from "./LatestArticles";
import BlogNav from "./BlogNav"
import Footer from "../components/Footer/Footer";
const BlogHomePage = () => {
  return (
    <>
    <BlogNav/>
    <div className={style.blogMainContainer}>
      <TrendingArticles />
      <LatestArticles />
    </div>
    <Footer />
    </>
  );


};

export default BlogHomePage;
