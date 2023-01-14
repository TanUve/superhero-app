import { Routes, Route, BrowserRouter } from "react-router-dom";
import AllCharacters from "./components/AllCharacters";
import Character from "./components/Character";
import DCCharacters from "./components/DCCharacters";
import Home from "./components/Home";
import MarvelCharacters from "./components/MarvelCharacters";
import NewCharacter from "./components/NewCharacter";
import NoPage from "./components/NoPage";
import ModifyCharacter from "./components/ModifyCharacter";
import './assets/page.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<Character />} />
          <Route path="/marvel" element={<MarvelCharacters />} />
          <Route path="/dc" element={<DCCharacters />} />
          <Route path="/new" element={<NewCharacter/>} />
          <Route path='modify/:id' element={<ModifyCharacter />} />
          <Route path="*" element={<NoPage/>} />


        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
//          <Route path="/newCharacter" element={<CreateCharacter />} />
