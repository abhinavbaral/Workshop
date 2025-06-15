import Header from "./components/Header";
import About from "./components/About";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
 <Navbar />
        <Routes>
         
          <Route path="/started" element={<Header />} />
          <Route path="/about-us" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
