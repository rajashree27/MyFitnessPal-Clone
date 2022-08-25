import React from "react"
import './App.css';
import { Routes, Route } from "react-router-dom";
import  BlogHomePage from "./pages/BlogHomePage.jsx"
import Recipes_Page from "./pages/Recipes_Page";
function App() {
  return (
    <div className="App">
      {/* <h1>BlogPage</h1> */}
     <Routes>
     <Route path="/recipes" element={<Recipes_Page />} />
     </Routes>
   
   <BlogHomePage/>
  
    </div>
  );
}

export default App;


 