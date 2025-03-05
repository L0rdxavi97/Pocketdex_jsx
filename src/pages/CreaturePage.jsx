import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function CreaturePage() {
    const {PokeName} = useParams()
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${PokeName}`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching Pokémon:", error));
    }, [PokeName]);

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-4 bg-amber-100 rounded-2xl text-center">
            <img className="size-30" src={data.sprites.front_default} alt={data.name} />
            <p className="font-bold text-xl underline">
                {data.name}
            </p>
            {data.types.map((type) => 
                <p className={'text-xl'}>
                    {type.type.name}
                </p>
                )}
        </div>
    );
}
