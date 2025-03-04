

export default function PokemonCard({pokemon}){
    return(
        <>
            <div className="p-1 bg-amber-400">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <p>{pokemon.name}</p>
            </div>
        </>
    )
}