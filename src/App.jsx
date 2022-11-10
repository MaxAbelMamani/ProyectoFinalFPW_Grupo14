import { BrowserRouter, Route, Routes } from "react-router-dom";

//Importando paginas principales
import Home from "./Components/Home";
import MenuGames from "./Components/MenuGames";
import Team from "./Components/Team";
//Importando paginas de otros de juegos
import PPT from "./Components/OtherGames/PPT"
import Ahorcado from "./Components/OtherGames/Ahorcado"
import Arkanoid from "./Components/OtherGames/Arkanoid"
//Importando paginas de juegos principales a presentar
import PreguntaYRespuesta from "./Components/GamePreguntaYRespuesta/PreguntaYRespuesta"
import GamePhaser from "./Components/GamePhaser/GamePhaser"

import QuizDeLaCarrera from "./Components/GamePreguntaYRespuesta/ComponentsPR/QuizDeLaCarrera";

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

        <Route path="/QuizDeLaCarrera" element={<QuizDeLaCarrera/>} />
      </Routes>
    </BrowserRouter>
  );
}