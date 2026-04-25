import { Routes, Route, Navigate } from "react-router-dom";
import B2BConstructionPartsApp from "./pages/B2BConstructionPartsApp"; 
import Catalogo from "./pages/Catalogo"; // Tu buscador guiado
import Catalogoproductos from "./pages/catalogoproductos"; // Tu lista de productos

function App() {
  return (
    <Routes>
      <Route path="/" element={<B2BConstructionPartsApp />} />
      
    {/* Estructura limpia para evitar el error de navegación doble */}
      <Route path="/encontrar-pieza">
        <Route index element={<Catalogo />} /> 
        <Route path="catalogo" element={<Catalogoproductos />} />
      </Route>

      {/* Redirección de seguridad */}
      <Route path="*" element={<Navigate to="/" replace />} /> 
    </Routes>
  );
}

export default App;