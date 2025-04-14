import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tipos } from "../../data/tipos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export default function CreaturePage() {
    const { PokeName } = useParams();
    const [data, setData] = useState(null);
    const [typeColors] = useState(tipos);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${PokeName}`)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching Pokémon:", error));
    }, [PokeName]);

    if (!data) {
        return <p className="text-center text-2xl">Loading...</p>;
    }

    const getBackgroundColor = () => {
        const pokemonType = data.types[0].type.name;
        return typeColors.find(t => t.name === pokemonType)?.color || "bg-amber-400";
    };

    const getSprites = () => {
        const versions = data.sprites.versions;
        const sprites = [];
        for (const generation in versions) {
            for (const version in versions[generation]) {
                const sprite = versions[generation][version].front_default;
                if (sprite) {
                    sprites.push(sprite);
                }
            }
        }
        return sprites;
    };

    return (
      <div className="py-5 bg-amber-100 min-h-screen flex justify-center px-4 md:px-0">
        <div
          className={`p-4 flex flex-col justify-center items-center text-center w-full max-w-2xl rounded-lg shadow-lg gap-4 ${getBackgroundColor()}`}
        >
          <div className="p-3 bg-amber-100 rounded-xl w-full">
            <h1 className="font-bold text-4xl md:text-5xl underline drop-shadow-2xl">
              {data.name.toUpperCase()}
            </h1>
          </div>

          <div className="p-3 bg-amber-100 rounded-xl w-full flex justify-center">
            <img
              className="w-40 h-40 md:w-50 md:h-50"
              src={data.sprites.front_default}
              alt={data.name}
            />
          </div>

          <div className="p-3 bg-amber-100 rounded-xl w-full">
            <p className="text-2xl underline font-medium">
              {data.types.length > 1 ? "Tipos:" : "Tipo:"}
            </p>
            {data.types.map((type) => (
              <p className="text-xl mt-2" key={type.type.name}>
                {type.type.name}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="p-3 bg-amber-100 rounded-xl">
              <p className="text-2xl underline font-medium">Altura:</p>
              <p className="text-xl my-2">{data.height / 10} m</p>
            </div>
            <div className="p-3 bg-amber-100 rounded-xl">
              <p className="text-2xl underline font-medium">Peso:</p>
              <p className="text-xl my-2">{data.weight / 10} kg</p>
            </div>
          </div>

          <div className="p-3 bg-amber-100 rounded-xl w-full">
            <p className="text-2xl underline font-medium">Experiencia Base:</p>
            <p className="text-xl my-2">{data.base_experience} exp</p>
          </div>

          <div className="p-3 bg-amber-100 rounded-xl w-full flex flex-col items-center">
            <p className="text-2xl underline font-medium">Habilidades:</p>
            <ul className="list-disc list-inside text-left text-xl ">
              {data.abilities.map((ability) => (
                <li key={ability.ability.name}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-amber-100 rounded-xl w-full flex flex-col items-center">
            <p className="text-2xl underline font-medium">Estadísticas:</p>
            <ul className="list-disc list-inside text-left text-xl">
              {data.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-amber-100 rounded-xl w-full flex flex-col items-center">
            <p className="text-2xl underline font-medium">Movimientos:</p>
            <ul className="list-disc list-inside text-left text-xl">
              {data.moves.slice(0, 10).map((move) => (
                <li key={move.move.name}>{move.move.name}</li>
              ))}
            </ul>
          </div>

          <div className="p-3 bg-amber-100 rounded-xl w-full">
            <p className="text-2xl underline font-medium">Sprites de Versiones:</p>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    className="w-full flex justify-center"
                >
                    {getSprites().map((sprite, index) => (
                        <SwiperSlide key={index} className="flex justify-center items-center">
                            <img className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl border-2 border-black" src={sprite} alt={`sprite-${index}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
      </div>
    );
}