import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import Error404 from "./pages/Error404";
import Usuario from "./pages/Usuario";
import MenuConceptos from "./components/MenuConceptos";
import Productos from "./pages/Productos";

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
          <Route exact path="/usuario/:username" element={<Usuario />} />
          <Route exact path="/productos" element={<Productos />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
