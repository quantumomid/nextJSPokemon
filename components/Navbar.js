import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/images/pokemonLogo.png" alt="Cartoon style red-white pokemon ball" width={72} height={72} />
                <h1>PokeDen</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/pokemons"><a>Pokemons</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
    )
}

export default Navbar;