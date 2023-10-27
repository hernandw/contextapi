import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import { ProviderProduct } from "./components/ContextProduct";


const App = () => {
  return (
    <div>
      <ProviderProduct>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </ProviderProduct>
    </div>
  );
}

export default App
