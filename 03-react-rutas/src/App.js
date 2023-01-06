import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <hr />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<Acerca />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
