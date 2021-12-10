import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div>
                <h1>Logo</h1>
            </div>
            <Link href="/"><a>Home</a></Link>
            <Link href="/pokemons"><a>Pokemons</a></Link>
            <Link href="/about"><a>About</a></Link>
        </nav>
    )
}

export default Navbar;