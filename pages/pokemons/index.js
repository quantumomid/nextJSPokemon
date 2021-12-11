import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Pokemons.module.css";

export const getStaticProps = async() => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    const hundredPokemons = data.results;

    // Add ids using the url string ending :)
    const hundredPokemonsWithIds = hundredPokemons.reduce((prev, curr) => [...prev, { ...curr, id: getPokemonId(curr.url) }], []);

    return {
        props: {
            pokemons: hundredPokemonsWithIds
        }
    }
}

const Pokemons = ({ pokemons }) => {
    console.log(pokemons);

    return (
        <div>
            <Head>
                <title>Pokemon's Den | Pokemons</title>
                <meta name="keywords" content="pokemons" />
            </Head>
            <h1>All Pokemons</h1>
            { pokemons.map(pokemon => (
                <Link key={pokemon.id} href={"/pokemons/" + pokemon.id}>
                    <a className={styles.single}> 
                        <h3>{ pokemon.name }</h3>
                    </a>
                </Link>
                )
                ) 
            }
        </div>
    )
}

const getPokemonId = (urlString) => {
    const stringSplitted = urlString.split("/");
    // console.log(stringSplitted);
    const stringSplittedLength = stringSplitted.length;
    // Get the second last/penultimate element 
    const pokemonId = stringSplitted[stringSplittedLength-2];
    console.log(pokemonId)
    return pokemonId;
}

export default Pokemons;