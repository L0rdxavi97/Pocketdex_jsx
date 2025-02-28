import { useState, useEffect } from "react";

function ChisteComp() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJoke = () => {
    setLoading(true);
    setError(null);
    fetch("https://v2.jokeapi.dev/joke/Any?lang=es")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener el chiste");
        }
        return response.json();
      })
      .then((data) => {
        setJoke(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  if (loading) return <p>Cargando chiste...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="p-3">
      <h2 className="text-3xl underline font-bold text-center">Chiste Aleatorio</h2>
      {joke.type === "single" ? (
        <p>{joke.joke}</p>
      ) : (
        <p>
          <strong>{joke.setup}</strong>
          <br />
          {joke.delivery}
        </p>
      )}
      <button 
        className="text-white p-2 bg-red-400 hover:bg-red-500 rounded-xl mt-3" 
        onClick={fetchJoke}
      >
        Otro chiste
      </button>
    </div>
  );
}

export default ChisteComp;
