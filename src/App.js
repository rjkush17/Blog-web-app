import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import {  Route, Routes } from "react-router-dom";
import Blog from "./Blog Pages/Blog";
import NotFoundPage from "./Components/NotFoundPage";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="font-nunito ">
    
     
     <Navbar/>
     <Routes>
      <Route path='/' element={<Hero/>}/>
      <Route path='/blog/:id' element={<Blog/>}/>
      <Route path='/*' element={<NotFoundPage/>}/>
     </Routes>
     <Footer/>
    </div>
    
  );
}

export default App;
