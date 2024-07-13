// import './App.css'

import FooterCard from "./components/Footer";
import Header from "./components/Header";
import "./index.css";
import Home from "./modules/Home";
import {Routes, Route} from 'react-router-dom'
import Product from "./modules/Product";
function App() {
  return (
    <>
      <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/products/:id" element={<Product />}/>
    </Routes>
      {/* <Home /> */}
      <FooterCard />
    </>
  );
}

export default App;
