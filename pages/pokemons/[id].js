import React from "react";
import Head from "next/head";
import { getHundredPokemonsWithIds } from "../../utils/pokemonUtils";

export const getStaticPaths = async() => {
    const hundredPokemonsWithIds = await getHundredPokemonsWithIds();
    const hundredPokemonsPaths = hundredPokemonsWithIds.map(pokemon => { 
        return {
            params: { id: pokemon.id } 
        }
    });

    return {
        paths: hundredPokemonsPaths,
        fallback: false
    }
}

const PokemonDetails = () => {
    return (
        <React.Fragment>
            <Head>
            <title>Pokemon's Den | Pokemon Details</title>
            <meta name="keywords" content="pokemons" />
            </Head>
            <article>
                <h1>Pokemon Details</h1>
            </article>
        </React.Fragment>
    )
}

export default PokemonDetails;