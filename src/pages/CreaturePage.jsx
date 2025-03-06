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
        <div className="py-5 bg-amber-100 flex flex-col justify-center items-center text-center">
            <h1 className="font-bold text-5xl underline drop-shadow-2xl">{data.name.toUpperCase()}</h1>
            <img className="size-50" src={data.sprites.front_default} alt={data.name} />
            {data.types.map((type) => 
                <p className={'text-xl'}>
                    {type.type.name}
                </p>
                )}
        </div>
    );
}
