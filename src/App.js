import React from "react";
import { BrowserRouter as Router , Routes,Route } from "react-router-dom";
import Home from "./home";
import Productindi from "./Productindi";
import Industries from "./Industries";
import Aboutus from "./Aboutus";
import Clientportfolio from "./Clientportfolio";
import Contactus from "./Contactus";
import Admin from "./Admin";
import Shippingandlogisticslabels from "./Industriescomponents/Shippingandlogisticslabels";
import Inventorylabels from "./Industriescomponents/Inventorylabels";
import Productlabels from "./Industriescomponents/Productlabels";
import Barcodelabels from "./Industriescomponents/Barcodelabels";
import Foodandbeveragelabels from "./Industriescomponents/Foodandbeveragelabels";
import Pharmaceuticallabels from "./Industriescomponents/Pharmaceuticallabels";
import Retaillabels from "./Industriescomponents/Retaillabels";
import Electroniclabels from "./Industriescomponents/Electroniclabels";
import Securitylabels from "./Industriescomponents/Securitylabels";
import Warehouselabels from "./Industriescomponents/Warehouselabels";
import Safetylabels from "./Industriescomponents/Safetylabels";
import Customlabels from "./Industriescomponents/Customlabels";
import Compliancelabel from "./Industriescomponents/Compliancelabel";

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
         <Route path="/Admin" element={<Admin />}/>
         <Route path='/Industries/Shipping' element={<Shippingandlogisticslabels />}/>
         <Route path='/Industries/Inventory' element={<Inventorylabels/>}/>
         <Route path='/Industries/Product' element={<Productlabels/>}/>
         <Route path='/Industries/Barcode' element={<Barcodelabels/>} />
         <Route path='/Industries/Foodandbeverage' element={<Foodandbeveragelabels/>}/>
         <Route path='/Industries/Pharmaceutical' element={<Pharmaceuticallabels/>}/>
         <Route path='/Industries/Retail' element={<Retaillabels/>}/>
         <Route path='/Industries/Electronic' element={<Electroniclabels/>}/>
         <Route path='/Industries/Security' element={<Securitylabels/>}/>
         <Route path='/Industries/Warehouse' element={<Warehouselabels/>}/>
         <Route path='/Industries/Compliance' element={<Compliancelabel/>}/>
         <Route path='/Industries/Safety' element={<Safetylabels/>}/>
         <Route path='/Industries/Custom' element={<Customlabels/>}/>
        </Routes>
        </Router>
  );
}

export default App;
