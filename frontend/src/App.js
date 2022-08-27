
import "./App.css";
import Header from "./components/Header";
import Headertop from "./components/Headertop";
import AppPage from "./pages/AppPage";
// import Footer from "./components/Footer/Footer";


import MyHome from "./pages/MyHome";
import MainRoutes from "./routes/MainRoutes";

import { Routes, Route } from "react-router-dom";
import  BlogHomePage from "./pages/BlogHomePage.jsx"
import Recipes_Page from "./pages/Recipes_Page";
import AllRoutes from "./AllRoutes";
import Exercise from "./pages/Exercise/Exercise";
import Cardio from "./pages/Exercise/Cardio";


function App() {
  return (
    <div>
      {/* <Navbar />
      <Myhome/> */}
      {/* <Footer /> */}
      {/* <AllRoutes /> */}
      <Exercise/>
      {/* <Cardio/> */}
      
    </div>
  );
}

export default App;


 