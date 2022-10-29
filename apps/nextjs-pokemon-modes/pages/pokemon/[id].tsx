/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Details.module.css";
import { useRouter } from "next/router";

interface Istat {
    name: string
    value: number
}

interface IDetail {
    image: string
    name: string
    stats: Istat[]
    type: string[]
}

export default function Detail() {

    const [pokemon, setPokemon] = useState<IDetail>(null);

    const { query: { id } } = useRouter()

    useEffect(() => {
        async function getPokemon() {
            const resp = await fetch(
                `https://jherr-pokemon.s3.us-west-1.amazonaws.com/pokemon/${id}.json`
            );
            setPokemon(await resp.json());
        }
        if (id) { getPokemon() }
    }, [id])

    if (!pokemon) {
        return null
    }
    
    console.log(pokemon);
    return (
        <div>
            <Head>
                <title>{pokemon.name}</title>
            </Head>
            <div>
                <Link href="/">
                    Back to Home
                </Link>
            </div>
            <div className={styles.layout}>
                <div>
                    <img
                        className={styles.picture}
                        src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                        alt={pokemon.name}
                    />
                </div>
                <div>
                    <div className={styles.name}>{pokemon.name}</div>
                    <div className={styles.type}>{pokemon.type?.join(", ")}</div>
                    <table>
                        <thead className={styles.header}>
                            <tr>
                                <th>Name</th>
                                <th>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {pokemon.stats?.map(({ name, value }) => (
                                <tr key={name}>
                                    <td className={styles.attribute}>{name}</td>
                                    <td>{value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
