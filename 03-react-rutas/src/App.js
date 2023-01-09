import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import Error404 from "./pages/Error404";
import MenuConceptos from "./components/MenuConceptos";

function App() {
  return (
    <div>
      <h1>React Router</h1>
      <hr />
      <h2>Conceptos Básicos</h2>
      <BrowserRouter>
        <MenuConceptos />
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/acerca" element={<Acerca />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
