import "./App.css";
import { Routes, Route } from "react-router-dom";
import SinglePlayer from "./components/SinglePlayer";
import Home from "./components/Home";
import NewPlayerForm from "./components/NewPlayerForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/players/:id" element={<SinglePlayer />} />
        <Route path="/NewPlayerForm" element={<NewPlayerForm />} />
      </Routes>
    </>
  );
}

export default App;
