import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./componenets/Pages/About";
import Home from "./componenets/Pages/Home";
import Navbar from "./componenets/Layout/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
