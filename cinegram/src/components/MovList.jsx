import { MovieCard } from "./MovieCard";

export function MovList() {
  const movies = [
    {
      imdbid: "tt8814476",
    },
    {
      imdbid: "tt5950044",
    },
    {
      imdbid: "tt10676052",
    },
  ];
  return (
    <div>
      <h1>Your Movies List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbid}>
            <MovieCard imdbid={movie.imdbid} />
          </li>
        ))}
      </ul>
    </div>
  );
}
