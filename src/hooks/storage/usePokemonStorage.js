import { useState } from "react";

export const usePokemonStorage = () => {
  const [storage, setStorage] = useState([]);

  function addStorage(name) {
    setStorage((prevStorage) => [...prevStorage, name]);
  }

  function removeStorage(name) {
    setStorage((prevStorage) => prevStorage.filter((pokemon) => pokemon!== name));
  }

  return {
    storage,
    addStorage,
    removeStorage
  };
};
