import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonCard({pokemon, remove}){
    const [sprite, setSprite] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((data) =>setSprite(data.sprites.front_default))
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, [pokemon]);

    return(
        <>
            <div className="p-4 bg-amber-100 rounded-2xl text-center">
                <p className="text-2xl font-bold cursor-pointer w-fit self-end" onClick={()=>remove(pokemon)}>&times;</p>
                <img className="size-50" src={sprite} alt={pokemon} />
                <Link to={`/storage/${pokemon}`}>
                <p className="font-bold text-xl underline">
                    {pokemon}
                </p>
                </Link>
                
            </div>
        </>
    )
}