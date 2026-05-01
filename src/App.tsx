import { Routes, Route, Navigate, Link } from "react-router-dom";
import B2BConstructionPartsApp from "./pages/B2BConstructionPartsApp"; 
import Encontrarpieza from "./pages/Encontrarpieza";
import Catalogoproductos from "./pages/catalogoproductos";

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<B2BConstructionPartsApp />} />
        <Route path="/encontrar-pieza" element={<Encontrarpieza />} />
        <Route path="/catalogo" element={<Catalogoproductos />} />
        <Route path="/encontrar-pieza/catalogo" element={<Catalogoproductos />} />

        {/* 🔥 seguridad */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;