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

import Quiz1 from "./Components/GamePreguntaYRespuesta/ComponentsPR/Quiz1"
import Quiz2 from "./Components/GamePreguntaYRespuesta/ComponentsPR/Quiz2"
import Quiz3 from "./Components/GamePreguntaYRespuesta/ComponentsPR/Quiz3"
import Quiz4 from "./Components/GamePreguntaYRespuesta/ComponentsPR/Quiz4"


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
        <Route path="/Quiz1" element={<Quiz1/>}/>
        <Route path="/Quiz2" element={<Quiz2/>}/>
        <Route path="/Quiz3" element={<Quiz3/>}/>
        <Route path="/Quiz4" element={<Quiz4/>}/>
      </Routes>
    </BrowserRouter>
  );
}