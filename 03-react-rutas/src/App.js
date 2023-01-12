import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import Error404 from "./pages/Error404";
import Usuario from "./pages/Usuario";
import MenuConceptos from "./components/MenuConceptos";
import Productos from "./pages/Productos";
import ReactTopics from "./pages/ReactTopics";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

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
          <Route exact path="/about" element={<Navigate to="/acerca" />} />
          <Route exact path="/contact" element={<Navigate to="/contacto" />} />
          <Route exact path="/contact" element={<Navigate to="/contacto" />} />
          <Route path="/react/*" element={<ReactTopics />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
