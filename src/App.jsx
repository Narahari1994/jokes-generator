import { useState, useEffect } from "react";
import JokesComponent from "./components/JokesComponent";
import { Link } from "react-router-dom";

function App() {
  const [jokes, setJokes] = useState([]);

  const fetchJokes = async () => {
    const res = await fetch(
      "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
    );
    const data = await res.json();
    setJokes(data.jokes);
  };

  useEffect(() => {
    fetchJokes();
  }, []);

  const handleClick = () => {
    fetchJokes();
  };

  return (
    <div className="max-w-7xl mx-auto h-screen p-4">
      <h1 className="bg-black text-white font-bold p-2 w-full">Jokes</h1>
      {jokes.map((joke) => (
        <JokesComponent key={joke.id} joke={joke.joke} />
      ))}
      <div className="flex justify-center items-center my-3 space-x-3">
        <button
          onClick={handleClick}
          className="capitalize px-2 py-2 border border-none rounded-[4px] bg-cyan-600 text-white font-medium"
        >
          fetch jokes
        </button>
        <button className="capitalize px-2 py-2 border border-none rounded-[4px] bg-red-500 text-white font-medium">
          <Link to="/login">logout</Link>
        </button>
      </div>
    </div>
  );
}

export default App;
