import React from 'react'
import style from "../styling/BlogNavFooter.module.css"
import logo from "../Images/fitnesslogo.png"
import * as Icons from "react-icons/fa";
import { Link } from 'react-router-dom';

const Blog_Nav = () => {
  return (
    <div>
        <div className={style.homeicondiv}>
        <Link to="/" ><Icons.FaHome className={style.homeicon} /></Link>  {">"}  Blog
        </div>
        <div style={{textAlign:"center"}}>
        <img src={logo} alt="" />
        </div>
        <div className={style.socialMediaIconDiv}>
        <Icons.FaFacebookSquare className={style.socialMediaIconFB} />
        <Icons.FaTwitterSquare className={style.socialMediaIconTwitter}/>
        <Icons.FaInstagram className={style.socialMediaIconInsta}/>
        <Icons.FaPinterest className={style.socialMediaIconPin}/>
        <hr />
        <Icons.FaSearch className={style.socialMediaIconSearch}/>
        </div>
        <div className={style.SubHeader_Container}>
          <div>RECIPES</div>
          <div>NUTRITION</div>
          <div>WEIGHT LOSS</div>
          <div>FITNESS</div>
          <div>INSPIRATION</div>
          <div>ESSENTIALS</div>
          <div>VIDEO</div>
        </div>
       
    </div>
  )
}

export default Blog_Nav