/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export async function getStaticProps() {
  const resp = await fetch(
    "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
  );

  return {
    props: {
      pokemon: await resp.json(),
    },
  };
}

interface IPokemon {
  "id": number,
  "name": string,
  "image": string
}

export function Index({ pokemon }: { pokemon: IPokemon[] }) {

  useEffect(() => {
    fetch(
      "http://localhost:3333/search"
    ).then(d => d.json()).then(d => {
      console.log('res--',d);
    }).catch(err=>{console.log(err);
    });

    // return () => {

    // }
  }, [])

  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */


  return (
    <div className={'container'}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      <h2>Pokemon List</h2>
      <div className={styles.grid}>
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              {/* <img
                src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                alt={pokemon.name}
              /> */}
              <h3>{pokemon.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
