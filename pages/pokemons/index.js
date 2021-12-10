import Head from "next/head";
import styles from "../../styles/Pokemons.module.css";

export const getStaticProps = async() => {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
    const data = await response.json();
    const hundredPokemons = data.results;

    return {
        props: {
            pokemons: hundredPokemons
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
                <article key={pokemon.name} className={styles.single}>
                    <a>
                        <h3>{ pokemon.name }</h3>
                    </a>
                </article>
                )
                ) 
            }
        </div>
    )
}

export default Pokemons;