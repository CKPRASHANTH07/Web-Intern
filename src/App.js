import React from "react";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./home";
import Productindi from "./Productindi";
import Industries from "./Industries";
import Aboutus from "./Aboutus";
import Clientportfolio from "./Clientportfolio";
import Contactus from "./Contactus";

function App() {
  return (
        <Router>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Productindi/>}/>
        <Route path="/Industries" element={<Industries/>}/>
        <Route path="/ClientPortfolio" element={<Clientportfolio/>}/>
         <Route path="/Aboutus" element={<Aboutus/>}/>
         <Route path="/Contactus" element={<Contactus/>}/>
        </Routes>
        </Router>
  );
}

export default App;
