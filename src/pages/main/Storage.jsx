import React, { useState } from "react";
import usePokemonSearch from "../../hooks/storage/usePokemonSearch";
import { usePokemonStorage } from "../../hooks/storage/usePokemonStorage";
import PokemonCard from "../../components/storage/PokemonCard";


const Storage = ({}) => {
    const [query, setQuery] = useState("");
    const { results, loading } = usePokemonSearch(query);
    const {storage,addStorage, removeStorage} = usePokemonStorage();

    return (
        <>
            <div className="p-4 bg-amber-200">
                <h2 className="text-xl font-bold">Introducir Pokémon</h2>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Escribe un nombre..."
                    className="border p-2 my-3 rounded w-full bg-white"
                />
                {loading && <p className="text-gray-500">Cargando...</p>}
                <ul className="border rounded mt-2 max-h-40 overflow-y-auto bg-white">
                    {results.map((pokemon) => (
                        <li key={pokemon} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => addStorage(pokemon)}>
                            {pokemon}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="bg-amber-200 min-h-screen">
            <h1 className="text-center text-3xl font-bold underline">Mis Pokémon</h1>
                <div className="flex flex-wrap gap-7 justify-center p-3">
                {
                    storage.length === 0?
                        <p className="font-medium">No tienes Pokémon en tu almacen</p>
                        :
                        storage.map((pokemon) => (
                            <PokemonCard key={pokemon.name} pokemon={pokemon} remove={removeStorage}/>
                        ))
                }
                </div>
            </div>
        </>
    )
}

export default Storage;