import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Headertop from "./components/Headertop";
import AppPage from "./pages/AppPage";
// import Footer from "./components/Footer/Footer";

import MyHome from "./pages/MyHome";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Myhome/> */}
      {/* <Footer /> */}
      <Headertop />
      <Header />
      
      

      <Routes>
        <Route path="/MyHome" element={<MyHome/>}></Route>
        <Route path="/apps" element={<AppPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
