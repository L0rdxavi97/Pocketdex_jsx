import React, { useState } from "react";
import usePokemonSearch from "../hooks/usePokemonSearch";

const Storage = ({}) => {
    const [query, setQuery] = useState("");
    const { results, loading } = usePokemonSearch(query);

    return (
        <>
            <div className="bg-blue-500">
                Hola este es el almacen
            </div>
            <div className="p-4">
            <h2 className="text-xl font-bold">Buscar Pokémon</h2>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Escribe un nombre..."
                className="border p-2 rounded w-full"
            />
            {loading && <p className="text-gray-500">Cargando...</p>}
            <ul className="border rounded mt-2 max-h-40 overflow-y-auto">
                {results.map((name) => (
                    <li key={name} className="p-2 hover:bg-gray-200 cursor-pointer">
                        {name}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Storage;