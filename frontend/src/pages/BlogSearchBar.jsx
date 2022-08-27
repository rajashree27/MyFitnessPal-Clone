import React from 'react'
import style from "../styling/Recipes.module.css"
import * as Icons from "react-icons/fa";
import {recipesSearchData} from "./DropDownData"
import { useState } from 'react';
import TrendingArticles from "./TrendingArticles"

const BlogSearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("")
  return (
    <div>
    <div className={style.recipesContainer}>
        <div className={style.recipesSearchHeading} >
            <h2>Find & Log Healthy Recipes</h2>
        </div>
        <div className={style.recipesSearchBarMainDiv}>
            <div className={style.recipesSearchBarDiv}>
            <div><Icons.FaSearch className={style.recipesSearchIcon} /> </div>
            <div><input type="text" className={style.recipesSearchInput} onChange={(e)=>{setSearchTerm(e.target.value)}} /></div>
            </div>
        </div>
            
        
    </div>
    <div style={{padding:"0% 5%", marginBottom:"4%"}} >
    <TrendingArticles/>
    </div>
    <div>
        {recipesSearchData.filter((val)=>{
            if(searchTerm===""){
                return val
            } else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                return val
            }
        }).map((val,key)=>{
            return (
                <div className={style.RecipesMapCantainer} key={key}>
                    <div className={style.RecipeRatingImage}>
                        <div className={style.RecipeRatingImageForBorder}>
                        <img src={val.imgUrl} alt="" />
                        </div>
                    </div>
                    <div >
                    <h2 className={style.RecipeHeading}>{val.title}</h2>
                    <p className={style.RecipeBy}>{val.by}</p>
                    <p className={style.RecipeRatingStars}> <Icons.FaStar/><Icons.FaStar/><Icons.FaStar/><Icons.FaStar/><Icons.FaRegStar/></p>
                    <p className={style.RecipeDescription} >{val.description}</p>
                    <div className={style.RecipeSocialMediaBox}>
                        <div className={style.RecipeLogit}>LOG IT</div>
                        <div className={style.RecipeLogit}>READ MORE</div>
                        <div  className={style.RecipeSocialMediaIcons}>
                        <Icons.FaFacebookSquare className={style.socialMediaIconFB} />
                        <Icons.FaTwitterSquare className={style.socialMediaIconTwitter}/>
                        <Icons.FaInstagram className={style.socialMediaIconInsta}/>
                        <Icons.FaPinterest className={style.socialMediaIconPin}/>
                        </div>
                    </div>
                    </div>
                    
                </div>
            )
        }) }
        </div>
    </div>
  )
}

export default BlogSearchBar