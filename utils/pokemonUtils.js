
export const getHundredPokemonsWithIds = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    const hundredPokemons = data.results;

    // Add ids using the url string ending :)
    const hundredPokemonsWithIds = hundredPokemons.reduce((prev, curr) => [...prev, { ...curr, id: getPokemonId(curr.url) }], []);
    return hundredPokemonsWithIds;
}

export const getPokemonId = (urlString) => {
    const stringSplitted = urlString.split("/");
    // console.log(stringSplitted);
    const stringSplittedLength = stringSplitted.length;
    // Get the second last/penultimate element 
    const pokemonId = stringSplitted[stringSplittedLength-2];
    console.log(pokemonId)
    return pokemonId;
}