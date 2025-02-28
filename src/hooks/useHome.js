import { useState, useEffect } from "react";

function useHome() {
  const [joke, setJoke] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, []);

  if (loading) return <p>Cargando chiste...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>😂 Chiste del día</h1>
      {joke.type === "single" ? (
        <p>{joke.joke}</p>
      ) : (
        <p>
          <strong>{joke.setup}</strong>
          <br />
          {joke.delivery}
        </p>
      )}
    </div>
  );
}

export default useHome;
