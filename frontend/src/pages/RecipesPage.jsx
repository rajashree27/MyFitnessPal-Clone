import React from 'react'

import BlogSearchBar from "./BlogSearchBar" 
import BlogNav from "./BlogNav"
import Footer from '../components/Footer/Footer'
const RecipesPage = () => {
  return (
    <>
    <BlogNav/>
    <div>
      <BlogSearchBar/>
    </div>
    <Footer />
    </>
  )
}

export default RecipesPage