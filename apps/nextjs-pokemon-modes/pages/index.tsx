import { useEffect, useState } from "react";
import Head from 'next/head';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getPokemon() {
      const resp = await fetch(
        "https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json"
      );
      setPokemon(await resp.json());
    }
    getPokemon()
  }, [])

  console.log(pokemon);

  return (
    <div className={'container'}>
      <Head>
        <title>
          Pokemon List
        </title>
      </Head>
      {pokemon.map(mon => <div key={mon.id}>
        <div>{mon.name}</div>
        <img style={{ width: 100 }} src={'https://jherr-pokemon.s3.us-west-1.amazonaws.com/' + mon.image} alt={mon.name} />
      </div>)}
    </div>
  );
}

export default Index;
