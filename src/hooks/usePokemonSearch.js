import { useState, useEffect } from "react";

const usePokemonSearch = (query) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!query) {
            setResults([]);
            return;
        }

        const fetchPokemonList = async () => {
            setLoading(true);
            try {
                const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
                const data = await response.json();
                const filtered = data.results
                    .map(p => p.name)
                    .filter(name => name.includes(query.toLowerCase()))
                    .slice(0, 10); // Máximo 10 resultados

                setResults(filtered);
            } catch (error) {
                console.error("Error fetching Pokémon:", error);
                setResults([]);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonList();
    }, [query]);

    return { results, loading };
};

export default usePokemonSearch;
