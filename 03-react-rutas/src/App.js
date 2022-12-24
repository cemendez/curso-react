import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acerca from "./components/Acerca";
import Home from "./components/Home";
import Users from "./components/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/acerca" element={<Acerca />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
