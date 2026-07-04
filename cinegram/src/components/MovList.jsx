import { useState } from "react";
import { MovieCard } from "./MovieCard";

export function MovList() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const movies = [
    { imdbid: "tt8814476" },
    { imdbid: "tt5950044" },
    { imdbid: "tt10676052" },
  ];

  const handleSearch = async (e) => {
    e?.preventDefault?.();
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const apiKey = import.meta.env.VITE_OMDB_API_KEY;
      const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${encodeURIComponent(
        query,
      )}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True" && data.Search) {
        setResults(data.Search);
      } else {
        setResults([]);
        setError(data.Error || "No results found");
      }
    } catch (err) {
      setError(err.message || "Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Your Movies List</h1>

      <section className="search-section">
        <form className="search-form" onSubmit={handleSearch}>
          <input
            aria-label="Search movies"
            className="search-input"
            placeholder="Search by title (e.g. Inception)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        {loading && <p>Searching...</p>}
        {error && <p style={{ color: "crimson" }}>{error}</p>}
      </section>

      {results.length > 0 && (
        <section className="search-results">
          <h2>Search Results</h2>
          <ul>
            {results.map((r) => (
              <li key={r.imdbID}>
                <MovieCard imdbid={r.imdbID} />
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="saved-movies">
        <h2>Saved Movies</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbid}>
              <MovieCard imdbid={movie.imdbid} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
