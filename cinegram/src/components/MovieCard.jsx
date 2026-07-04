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
    <article className="movie-card">
      <img
        className="movie-card__poster"
        src={movie.Poster}
        alt={`${movie.Title} Poster`}
      />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.Title}</h3>
        <p className="movie-card__meta">Year: {movie.Year}</p>
        <p className="movie-card__meta">Genre: {movie.Genre}</p>
        <p className="movie-card__meta">Director: {movie.Director}</p>
        <p className="movie-card__meta">Actors: {movie.Actors}</p>
        <p className="movie-card__plot">Plot: {movie.Plot}</p>
      </div>
    </article>
  );
}
