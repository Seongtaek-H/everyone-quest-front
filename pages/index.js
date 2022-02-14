import { useEffect, useState } from "react";
import Navbar from "../components/Navbar.js";
import Seo from "../components/Seo.js";

const API_KEY = "57bdddeb656e2867e0c133d4a8c70e58";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);

  return (
    <div>
      <Seo title="home" />
      {!movies && <h4>Now Loading...</h4>}
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
}
