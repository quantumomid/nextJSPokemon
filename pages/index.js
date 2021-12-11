import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PokeDen | Home</title>
        <meta name="keywords" content="pokemons" />
        <meta name="description" content="Information on various pokemons" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Welcome to the Pokemon Den
        </h1>
        <p className={styles.text}>The PokeDen website gives you the ability to find the pokemon of your choice and learn some facts about it.</p>
        <p className={styles.text}>Without any further ado, let us begin!</p>
        <Link href="/pokemons"><a className={styles.btn}>See Pokemons</a></Link>
      </main>
    </div>
  )
}
