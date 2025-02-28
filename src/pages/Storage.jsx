import React, { useState } from "react";
import usePokemonSearch from "../hooks/usePokemonSearch";

const Storage = ({}) => {
    const [query, setQuery] = useState("");
    const { results, loading } = usePokemonSearch(query);
    const [creature, setCreature] = useState([]);

    return (
        <>
            <div className="p-4 bg-amber-200">
                <h2 className="text-xl font-bold">Introducir criatura</h2>
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
                        <li key={name} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={console.log(name)}>
                            {name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Storage;