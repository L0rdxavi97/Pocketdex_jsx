import React, { useState } from "react";
import usePokemonSearch from "../hooks/usePokemonSearch";
import { usePokemonStorage } from "../hooks/usePokemonStorage";


const Storage = ({}) => {
    const [query, setQuery] = useState("");
    const { results, loading } = usePokemonSearch(query);
    const {storage,addStorage} = usePokemonStorage();

    return (
        <>
            <div className="p-4 bg-amber-200">
                <h2 className="text-xl font-bold">Introducir Pokémon</h2>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Escribe un nombre..."
                    className="border p-2 rounded w-full bg-white"
                />
                {loading && <p className="text-gray-500">Cargando...</p>}
                <ul className="border rounded mt-2 max-h-40 overflow-y-auto bg-white">
                    {results.map((name) => (
                        <li key={name} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => addStorage(name)}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                {storage.map((pokemon) => (
                    <div key={pokemon} className="p-1 bg-amber-400">
                        <h1>{pokemon}</h1>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Storage;