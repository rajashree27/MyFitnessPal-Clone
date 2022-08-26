

  

import React from "react"
import "./App.css";
import Header from "./components/Header";
import Headertop from "./components/Headertop";
// import Footer from "./components/Footer/Footer";


import MyHome from "./pages/MyHome";
import MainRoutes from "./routes/MainRoutes";

import { Routes, Route } from "react-router-dom";
import  BlogHomePage from "./pages/BlogHomePage.jsx"
import Recipes_Page from "./pages/Recipes_Page";

function App() {
  return (
    <div>
      {/* <Navbar />
      <Myhome/> */}
      {/* <Footer /> */}
      {/* <Headertop/>
      <Header/>
      <MyHome/>  */}
      <MainRoutes />

      {/* <Routes>
     <Route path="/recipes" element={<Recipes_Page />} />
     </Routes>
   
   <BlogHomePage/> */}

    </div>
  );
}

export default App;


 