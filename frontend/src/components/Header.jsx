import React, { useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import MyHome from "../pages/MyHome";

const MainDiv = styled.div`
  height: 86px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 20px;
  box-sizing: border-box;
  // border: 1px solid black;
`;
const UpperDiv = styled.div`
  height: 43px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0066ee;
  gap: 20px;
  color: white;
  font-size: 14px;
  // font-weight: 550;
`;

const LowerDiv = styled.div`
  height: 43px;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background: #00548f;
  gap: 20px;
  font-size: 14px;
  // font-weight: 550;
`;

const Header = () => {
  const [navLinks, setNavLinks] = useState("");
  // console.log(navLinks)

  return (
    <MainDiv>
      <UpperDiv>
        <p>
          <Link
            style={{
              textDecoration: "none",
              color: navLinks === "myHome" ? "black" : "white",
            }}
            onClick={() => setNavLinks("myHome")}
            to="/myHome"
          >
            MY HOME
          </Link>
        </p>
        <p>
          <Link
            style={{
              textDecoration: "none",
              color: navLinks === "foods" ? "black" : "white",
            }}
            onClick={() => setNavLinks("foods")}
            to="/foods"
          >
            FOOD
          </Link>
        </p>
        <p>
          <Link
            style={{
              textDecoration: "none",
              color: navLinks === "exercise" ? "black" : "white",
            }}
            onClick={() => setNavLinks("exercise")}
            to="/exercise"
          >
            EXERCISE
          </Link>
        </p>
        <p>
          <Link
            style={{
              textDecoration: "none",
              color: navLinks === "reports" ? "black" : "white",
            }}
            onClick={() => setNavLinks("reports")}
            to="/reports"
          >
            REPORTS
          </Link>
        </p>
        <p>
          <Link
            style={{
              textDecoration: "none",
              color: navLinks === "apps" ? "black" : "white",
            }}
            onClick={() => setNavLinks("apps")}
            to="/apps"
          >
            APPS
          </Link>
        </p>
        <p>
          <Link
            style={{
              textDecoration: "none",
              color: navLinks === "community" ? "black" : "white",
            }}
            onClick={() => setNavLinks("community")}
            to="/community"
          >
            COMMUNITY
          </Link>
        </p>
        <p>
          <Link
            style={{
              textDecoration: "none",
              color: navLinks === "blog" ? "black" : "white",
            }}
            onClick={() => setNavLinks("blog")}
            to="/blog"
          >
            BLOG
          </Link>
        </p>
        <p>
          <Link
            style={{
              textDecoration: "none",
              color: navLinks === "premium" ? "black" : "white",
            }}
            onClick={() => setNavLinks("premium")}
            to="/premium"
          >
            PREMIUM
          </Link>
        </p>
      </UpperDiv>
      <LowerDiv style={{ display: navLinks === "myHome" ? "flex" : "none" }}>
        <NavLink to="" style={{ textDecoration: "none", color: "white" }}>
          Home
        </NavLink>
        <NavLink to="goals" style={{ textDecoration: "none", color: "white" }}>
          Goals
        </NavLink>
        <NavLink
          to="check-in"
          style={{ textDecoration: "none", color: "white" }}
        >
          Check-In
        </NavLink>
        <NavLink to="mail" style={{ textDecoration: "none", color: "white" }}>
          Mail
        </NavLink>
        <NavLink
          to="profile"
          style={{ textDecoration: "none", color: "white" }}
        >
          Profile
        </NavLink>
        <NavLink
          to="my-blog"
          style={{ textDecoration: "none", color: "white" }}
        >
          My Blog
        </NavLink>
        <NavLink
          to="friends"
          style={{ textDecoration: "none", color: "white" }}
        >
          Friends
        </NavLink>
        <NavLink
          to="settings"
          style={{ textDecoration: "none", color: "white" }}
        >
          Settings
        </NavLink>
      </LowerDiv>
      <LowerDiv style={{ display: navLinks === "foods" ? "flex" : "none" }}>
        <NavLink to="food" style={{ textDecoration: "none", color: "white" }}>
          Food Diary
        </NavLink>
        <NavLink
          to="database"
          style={{ textDecoration: "none", color: "white" }}
        >
          Database
        </NavLink>
        <NavLink
          to="my-foods"
          style={{ textDecoration: "none", color: "white" }}
        >
          My Foods
        </NavLink>
        <NavLink
          to="my-meals"
          style={{ textDecoration: "none", color: "white" }}
        >
          My Meals
        </NavLink>
        <NavLink
          to="receipes"
          style={{ textDecoration: "none", color: "white" }}
        >
          Receipes
        </NavLink>
        <NavLink
          to="settings"
          style={{ textDecoration: "none", color: "white" }}
        >
          Settings
        </NavLink>
      </LowerDiv>
      <LowerDiv style={{ display: navLinks === "exercise" ? "flex" : "none" }}>
        <NavLink
          to="exercise-diary"
          style={{ textDecoration: "none", color: "white" }}
        >
          Exercise Diary
        </NavLink>
        <NavLink
          to="database"
          style={{ textDecoration: "none", color: "white" }}
        >
          Database
        </NavLink>
        <NavLink
          to="my-exercise"
          style={{ textDecoration: "none", color: "white" }}
        >
          My Exercises
        </NavLink>
        <NavLink
          to="settings"
          style={{ textDecoration: "none", color: "white" }}
        >
          Settings
        </NavLink>
      </LowerDiv>
      <LowerDiv style={{ display: navLinks === "reports" ? "flex" : "none" }}>
        <NavLink to="charts" style={{ textDecoration: "none", color: "white" }}>
          Charts
        </NavLink>
        <NavLink
          to="export-data"
          style={{ textDecoration: "none", color: "white" }}
        >
          Export Data
        </NavLink>
      </LowerDiv>
      <LowerDiv style={{ display: navLinks === "apps" ? "flex" : "none" }}>
        <NavLink
          to="app-gallery"
          style={{ textDecoration: "none", color: "white" }}
        >
          App Gallery
        </NavLink>
        <NavLink to="mobile" style={{ textDecoration: "none", color: "white" }}>
          Mobile
        </NavLink>
        <NavLink
          to="tickers"
          style={{ textDecoration: "none", color: "white" }}
        >
          Tickers
        </NavLink>
        <NavLink to="badges" style={{ textDecoration: "none", color: "white" }}>
          Badges
        </NavLink>
        <NavLink to="bmr" style={{ textDecoration: "none", color: "white" }}>
          BMR
        </NavLink>
        <NavLink to="bmi" style={{ textDecoration: "none", color: "white" }}>
          BMI
        </NavLink>
        <NavLink to="steps" style={{ textDecoration: "none", color: "white" }}>
          Steps
        </NavLink>
      </LowerDiv>
      <LowerDiv style={{ display: navLinks === "blog" ? "flex" : "none" }}>
        <NavLink
          to="recipes"
          style={{ textDecoration: "none", color: "white" }}
        >
          Recipes
        </NavLink>
        <NavLink
          to="nutrition"
          style={{ textDecoration: "none", color: "white" }}
        >
          Nutrition
        </NavLink>
        <NavLink
          to="weight-loss"
          style={{ textDecoration: "none", color: "white" }}
        >
          Weight Loss
        </NavLink>
        <NavLink
          to="fitness"
          style={{ textDecoration: "none", color: "white" }}
        >
          Fitness
        </NavLink>
        <NavLink
          to="inspiration"
          style={{ textDecoration: "none", color: "white" }}
        >
          Inspiration
        </NavLink>
        <NavLink
          to="essentials"
          style={{ textDecoration: "none", color: "white" }}
        >
          Essentials
        </NavLink>
        <NavLink to="video" style={{ textDecoration: "none", color: "white" }}>
          Video
        </NavLink>
      </LowerDiv>
      <LowerDiv
        style={{ display: navLinks === "premium" ? "none" : "none" }}
      ></LowerDiv>
    </MainDiv>
  );
};

export default Header;
