import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importando paginas principales
import Home from "./Components/Home";
import MenuGames from "./Components/MenuGames";
import Team from "./Components/Team";
//Importando paginas de juegos
import PPT from "./Components/Games/PPT"
import Ahorcado from "./Components/Games/Ahorcado"
import Arkanoid from "./Components/Games/Arkanoid"
import PreguntaYRespuesta from "./Components/Games/PreguntaYRespuesta"
import GamePhaser from "./Components/GamePhaser"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Team" element={ <Team/> } />
        <Route path="/MenuGames" element={ <MenuGames/>} />
        <Route path="/PPT" element={ <PPT/>} />
        <Route path="/Ahorcado" element={ <Ahorcado/>} />
        <Route path="/Arkanoid" element={ <Arkanoid/>} />
        <Route path="/PreguntaYRespuesta" element={ <PreguntaYRespuesta/>} />
        <Route path="/GamePhaser" element={ <GamePhaser/>} />
      </Routes>
    </BrowserRouter>
  );
}