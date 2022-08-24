import "./App.css";
import Header from "./components/Header";
import Headertop from "./components/Headertop";
// import Footer from "./components/Footer/Footer";

import MyHome from "./pages/MyHome";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Myhome/> */}
      {/* <Footer /> */}
      <Headertop/>
      <Header/>
      <MyHome/> 
    </div>
  );
}

export default App;
