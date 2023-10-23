import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Lodging from "../pages/Lodging";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import lodgings from "../data/logements.json";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home lodgings={lodgings} />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Lodging/:id" element={<Lodging lodgings={lodgings} />} />
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
