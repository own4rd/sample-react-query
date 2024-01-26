import { Route, Routes } from "react-router-dom";
import { Repositories } from "./pages/Repositories";
import { Repo } from "./pages/Repo";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Repositories />} />
      <Route path="/repositories/*" element={<Repo />} />
    </Routes>
  )
}