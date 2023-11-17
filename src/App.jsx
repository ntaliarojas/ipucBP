import  { Routes, Route }  from "react-router-dom";


import  {HeaderB}  from "./components/HeaderB";
import  {ArticleP}  from "./components/ArticleP";
import { AboutBP}  from "./components/AboutBP";
import  {Footer}  from "./components/Footer";
import  {Nosotros}  from "./components/Nosotros";
import  {Gallery}  from "./components/Gallery";



function App() {
  return (
    <main className="bg-white text-black  ">
        <HeaderB />
        <ArticleP />
    <Routes>
    
    <Route path="/AboutBP" element={<AboutBP />}></Route>
    <Route path="/Nosotros" element={<Nosotros />}></Route>
    <Route path="/Gallery" element={<Gallery />}></Route>

    </Routes>
    <Footer />

    </main>
  
  );
}

export default App;
