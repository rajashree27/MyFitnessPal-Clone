import React, { useEffect, useState } from "react";
import style from "../styling/headerbar.module.css";
import { useNavigate, Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
export const Headertop = () => {
  const navigate = useNavigate();
  const data = JSON.parse(localStorage.getItem(""));

  return (
    <div>
      <div className={style.headcaring}>
        <img
          src="https://i.pinimg.com/originals/53/24/0a/53240a99b0159c5a16937e5ac479f78a.png"
          alt=""
        />
        <div className={style.lscaring}>
          {data ? (
            <h4 className={style.headloging}>Hi, {data.name}</h4>
          ) : (
            <h4>Hi,username</h4>
          )}
          <h5>Help</h5>|<h5>Settings</h5>|
          <h5
            onClick={() => {
              localStorage.removeItem("");

              navigate("/login");
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
