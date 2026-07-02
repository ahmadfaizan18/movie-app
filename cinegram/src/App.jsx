import { BrowserRouter } from "react-router-dom";
import { Home } from "./Home";
import { Routes, Route } from "react-router-dom";
import { MovList } from "./components/MovList";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/your-movies-list" element={<MovList />} />
    </Routes>
  );
}
