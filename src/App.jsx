import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Components/Home";
import Game from "./Components/Games";
import Team from "./Components/Team";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Team" element={ <Team/> } />
        <Route path="/Game" element={ <Game/>} />
      </Routes>
    </BrowserRouter>
  );
}