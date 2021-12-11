import React from "react";
import Head from "next/head";
import { getHundredPokemonsWithIds, getSinglePokemonDetails } from "../../utils/pokemonUtils";

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

export const getStaticProps = async (context) => {
    const id = context.params.id;

    const data = await getSinglePokemonDetails(id);

    return {
        props: {
            pokemon: data
        }
    }
}

const PokemonDetails = ({ pokemon }) => {
    return (
        <React.Fragment>
            <Head>
            <title>Pokemon's Den | Pokemon Details</title>
            <meta name="keywords" content="pokemons" />
            </Head>
            <article>
                <h1>{ pokemon.name }</h1>
            </article>
        </React.Fragment>
    )
}

export default PokemonDetails;