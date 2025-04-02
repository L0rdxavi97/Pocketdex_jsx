import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PokemonDelDia(){
    let date = new Date;
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let anioMod100 = year % 100;
    let sumaDigitos = (day.toString() + month.toString() + year.toString())
        .split('')
        .map(Number)
        .reduce((a, b) => a + b, 0);

    const pokemon = (day * month) + anioMod100 + sumaDigitos;
    const [sprite, setSprite] = useState(null);
    const [name, setName] = useState("");

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => res.json())
      .then((data) =>{setSprite(data.sprites.front_default); setName(data.name)})
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, [pokemon]);

    return(
        <>
            <div className="flex flex-col p-4 bg-amber-100 rounded-2xl text-center items-center">
                <h2 className='font-bold text-3xl underline'>Pokémon del dia</h2>
                <img className="size-50" src={sprite} alt={name} />
                <Link to={`/storage/${name}`}>
                    <p className="font-bold text-xl underline">
                        {name}
                    </p>
                </Link>
            </div>
        </>
    )
}