import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react';
import styles from '../styles/Home.module.css'

export const baseUrl = "https://portfolio-backend-mongo-server.herokuapp.com";

export default function Home() {
  const [url, setUrl] = useState('');
  const [id, setId] = useState('');
  return (
    <div className={styles.container}>
      <Head>
        <title>Taptaplit Links</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <form>
          <input className={styles.input} type="text" placeholder="Redirect" onChange={(e) => setUrl(e.target.value)}/>
          <br />
          <br />
          <button className={styles.button} type="submit" onClick={async (e) => {
            e.preventDefault()
            const response = await fetch(`${baseUrl}/link/create`, {
              method: 'POST', // *GET, POST, PUT, DELETE, etc.
              mode: 'cors', // no-cors, *cors, same-origin
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                url: url,
              }) // body data type must match "Content-Type" header
            });
            const res = await response.json();
            setId(res.result._id) // parses JSON response into native JavaScript objects
          }}>Submit</button>
        </form>
        {id && <Link href={`https://${window.document.domain}/${id}`}><p className={styles.idNotfication}>{id}</p></Link>}
      </main>
    </div>
  )
}
