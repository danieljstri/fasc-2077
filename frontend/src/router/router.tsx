import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArtistsView from "@/views/artistasView";
import PalcosView from "@/views/paclosView";

// Componente que renderiza o HTML do amigo via iframe
function Main() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/frontpage/index.html" // Caminho do arquivo dentro de public/
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Home"
      />
    </div>
  );
}

function Artistas() {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src="/artistpage/artista.html" // Caminho do arquivo dentro de public/
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Artistas"
      />
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/artists" element={<ArtistsView />} />
        <Route path="/" element={<Main />} /> {/* Ajuste aqui */}
        <Route path="/palcos" element={<PalcosView />} />
        <Route path="/artistas" element={<Artistas />} />
      </Routes>
    </Router>
  </StrictMode>
);
