import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Lodging from "../pages/Lodging";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import LodgingsProvider from "../context/LodgingsContext";
function App() {
  return (
    <BrowserRouter>
      <LodgingsProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Lodging/:id" element={<Lodging />} />
          <Route path="/About" element={<About />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </LodgingsProvider>
    </BrowserRouter>
  );
}

export default App;
