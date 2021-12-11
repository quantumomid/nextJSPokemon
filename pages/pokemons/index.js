import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Pokemons.module.css";
import { getHundredPokemonsWithIds } from "../../utils/pokemonUtils";

export const getStaticProps = async() => {
    const hundredPokemonsWithIds = await getHundredPokemonsWithIds();
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
                <title>PokeDen | Pokemons</title>
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

export default Pokemons;