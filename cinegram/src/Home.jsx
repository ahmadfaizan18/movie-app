import "./App.css";
import { MovList } from "./components/MovList";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  const handleYourMoviesClick = () => {
    navigate("/your-movies-list");
  };

  return (
    <>
      <div className="main-container">
        <h1 id="Cinegram">CineGram</h1>
        <h3 id="Social-Media-For-Cinephiles">Social Media For Cinephiles</h3>
        <button id="your-movies-button" onClick={handleYourMoviesClick}>
          Your Movies List
        </button>
      </div>
    </>
  );
}
