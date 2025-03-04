import { useState } from "react";

export const usePokemonStorage = () => {
  const [storage, setStorage] = useState([]);

  async function addStorage(name) {
    try {
      const pokemon = await info(name); // Wait for the Pokémon data
      setStorage((prevStorage) => [...prevStorage, pokemon]);
    } catch (error) {
      console.error("Error fetching Pokémon:", error);
    }
  }

  async function info(name) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (!response.ok) {
        throw new Error(`Pokémon not found: ${name}`);
      }
      const data = await response.json();
      return data; // Returns full Pokémon data
    } catch (error) {
      console.error("Fetch error:", error);
      return null;
    }
  }

  return {
    storage,
    addStorage,
    info,
  };
};
