import { useState, useEffect } from "react";
export function MovieCard({ imdbid }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_OMDB_API_KEY;
    const url = `https://www.omdbapi.com/?i=${imdbid}&apikey=${apiKey}`;
    const response = async () => {
      const res = await fetch(url);
      return res.json();
    };
    response().then((data) => setMovie(data));
  }, [imdbid]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h3>{movie.Title}</h3>
      <p>Year: {movie.Year}</p>
      <p>Genre: {movie.Genre}</p>
      <p>Director: {movie.Director}</p>
      <p>Actors: {movie.Actors}</p>
      <p>Plot: {movie.Plot}</p>
    </div>
  );
}
