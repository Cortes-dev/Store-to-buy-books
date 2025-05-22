import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./layouts/Navbar";
import Librerias from "./views/Librerias";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/librerias" element={<Librerias /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;