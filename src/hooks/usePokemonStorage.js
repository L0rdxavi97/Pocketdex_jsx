import { useState } from "react";

export const usePokemonStorage = () => {
  const [storage, setStorage] = useState([]);

  function addStorage(name) {
    setStorage((prevStorage) => [...prevStorage, name]);
  }

  return {
    storage,
    addStorage
  };
};
