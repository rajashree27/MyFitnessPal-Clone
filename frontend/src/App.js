import "./App.css";
import Header from "./components/Header";
import Headertop from "./components/Headertop";
import AppPage from "./pages/AppPage";
// import Footer from "./components/Footer/Footer";

import MyHome from "./pages/MyHome";
import MainRoutes from "./routes/MainRoutes";

import { Routes, Route } from "react-router-dom";
import BlogHomePage from "./pages/BlogHomePage.jsx";
import Recipes_Page from "./pages/Recipes_Page";

function App() {
  return (
    <div>
      <Headertop />
      <Header />
      <Routes>
        <Route path="myHome" element={<MyHome />} />
        <Route path="apps" element={<AppPage />} />
      </Routes>
    </div>
  );
}

export default App;
