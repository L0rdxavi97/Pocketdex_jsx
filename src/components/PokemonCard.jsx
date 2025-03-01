

export default function PokemonCard(storage){
    storage.map((pokemon) => (
        <div key={pokemon} className="p-1 bg-amber-400">
            <h1>{pokemon}</h1>
        </div>
    ))
}