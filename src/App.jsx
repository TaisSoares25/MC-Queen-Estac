
import { Cadastro } from "./components/cadastro"
import { Home } from "./components/home"
import { Registro } from "./components/registro"
import { Login } from "./components/layouts/login"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/registro" element={<Registro />} />


      </Routes>

    </BrowserRouter>





  );
}

export default App;
