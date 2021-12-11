import React from "react";
import Head from "next/head";
import { getHundredPokemonsWithIds, getSinglePokemonDetails } from "../../utils/pokemonUtils";
import Image from "next/image";

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
    console.log(pokemon);
    const types = pokemon.types.map(type => <li key={type.slot}>{ type.type.name }</li>)
    const abilities = pokemon.abilities.map(ability => <li key={ability.slot}>{ability.ability.name}</li>)
    return (
        <React.Fragment>
            <Head>
            <title>PokeDen | Pokemon Details</title>
            <meta name="keywords" content="pokemons" />
            </Head>
            <article>
                <h1>{ pokemon.name }</h1>
                {/* <Image src={pokemon.sprites.front_default} alt={`Font view of the pokemon ${pokemon.name}`} width={100} height={100} layout="responsive"/> */}
                <img src={pokemon.sprites.front_default} alt={`Font view of the pokemon ${pokemon.name}`} width={100} height={100}/>
                <p>Weight: { pokemon.weight }</p>
                <h2>Types:</h2>
                <ul>
                    { types }
                </ul>
                <h2>Abilities: </h2>
                <ul>
                    { abilities }
                </ul>
            </article>
        </React.Fragment>
    )
}

export default PokemonDetails;