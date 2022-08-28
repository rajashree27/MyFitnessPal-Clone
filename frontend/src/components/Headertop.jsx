import React, { useEffect, useState } from "react";
import style from "../styling/headerbar.module.css";
import { useNavigate, Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";

export const Headertop = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem("username"));

  return (
    <div>
      <div className={style.headcaring}>
        <img
          src="https://bit.ly/3pONQwh"
          alt=""
          onClick={()=>navigate("/myHome")}
        />
        <div className={style.lscaring}>
          {data ? (
            <h4 className={style.headloging}>Hi, {data}</h4>
          ) : (
            <h4>Hi there!</h4>
          )}
          <h5>Help</h5>|<h5>Settings</h5>|
          <h5
            onClick={() => {
              localStorage.removeItem("");

              navigate("");
            }}
          >
            Log Out
          </h5>
          |<h6>Follow Us: </h6>
          <a target="_blank" href="https://www.facebook.com/myfitnesspal">
            <h2 style={{ color: "blue" }}>
              <FaFacebook />
            </h2>
          </a>
          <a target="_blank" href="https://twitter.com/myfitnesspal">
            <h2 style={{ color: "blue" }}>
              <BsTwitter />
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Headertop;
