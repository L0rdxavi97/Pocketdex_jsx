import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { tipos } from "../data/tipos";
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
        return <p>Loading...</p>;
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
        <div className="py-5 bg-amber-100">
            <div className={`p-4 flex flex-col justify-center items-center text-center w-1/2 mx-auto rounded-lg shadow-lg gap-4 ${getBackgroundColor()}`}>
                <div className="p-3 bg-amber-100 rounded-xl w-md">
                    <h1 className="font-bold text-5xl underline drop-shadow-2xl">
                        {data.name.toUpperCase()}
                    </h1>
                </div>
                
                <div className="p-3 bg-amber-100 rounded-xl w-md flex justify-center">
                    <img className="size-50" src={data.sprites.front_default} alt={data.name} />
                </div>
                
                <div className="p-3 bg-amber-100 rounded-xl w-md">
                    {data.types.length > 1 ? <p className="text-2xl text-center underline mb-2 font-medium">Tipos:</p> : <p className="text-2xl text-center underline mb-2 font-medium">Tipo:</p>}
                    {data.types.map((type) => 
                        <p className='text-xl'>
                            {type.type.name}
                        </p>
                    )}
                </div>

                <div className="p-3 bg-amber-100 rounded-xl w-md">
                    <p className="text-2xl text-center underline mb-2 font-medium">
                        Altura:
                    </p>
                    <p className='text-xl'>
                        {data.height/10} m
                    </p>
                </div>

                <div className="p-3 bg-amber-100 rounded-xl w-md">
                    <p className="text-2xl text-center underline mb-2 font-medium">
                        Peso:
                    </p>
                    <p className='text-xl'>
                        {data.weight/10} kg
                    </p>
                </div>

                <div className="p-3 bg-amber-100 rounded-xl w-md">
                    <p className="text-2xl text-center underline mb-2 font-medium">
                        Experiencia Base:
                    </p>
                    <p className='text-xl'>
                        {data.base_experience} exp
                    </p>
                </div>

                <div className="p-3 bg-amber-100 rounded-xl w-md">
                    <p className="text-2xl text-center underline mb-2 font-medium">
                        Habilidades:
                    </p>
                    <div className="flex justify-center">
                        <ul className="list-disc list-inside text-left">
                            {data.abilities.map((ability) => 
                                <li key={ability.ability.name} className="text-xl">
                                    {ability.ability.name}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="p-3 bg-amber-100 rounded-xl w-md">
                    <p className="text-2xl text-center underline mb-2 font-medium">
                        Estadísticas:
                    </p>
                    <div className="flex justify-center">
                        <ul className="list-disc list-inside text-left">
                            {data.stats.map((stat) => 
                                <li key={stat.stat.name} className="text-xl">
                                    {stat.stat.name}: {stat.base_stat}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="p-3 bg-amber-100 rounded-xl w-md">
                    <p className="text-2xl text-center underline mb-2 font-medium">
                        Movimientos:
                    </p>
                    <div className="flex justify-center">
                        <ul className="list-disc list-inside text-left">
                            {data.moves.map((move) => 
                                <li key={move.move.name} className="text-xl">
                                    {move.move.name}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                <div className="p-3 bg-amber-100 rounded-xl w-md">
                    <p className="text-2xl text-center underline mb-2 font-medium">
                        Sprites de Versiones:
                    </p>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        pagination={{ clickable: true }}
                        className="w-full"
                    >
                        {getSprites().map((sprite, index) => (
                            <SwiperSlide key={index} className="flex justify-center">
                                <img className="size-40" src={sprite} alt={`sprite-${index}`} />
                            </SwiperSlide>
                        ))}
                        <div className="swiper-button-next custom-next"></div>
                        <div className="swiper-button-prev custom-prev"></div>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

// Add custom styles for the navigation buttons
const styles = `
.custom-next, .custom-prev {
    background-color: #000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.custom-next::after, .custom-prev::after {
    font-size: 16px;
}
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
