import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Login from "./pages/Login";
import Faq from "./pages/Faq";

function App() {
  return (
    <BrowserRouter basename="/prueba-react-tailwind/"> 
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="about" element={<About />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
