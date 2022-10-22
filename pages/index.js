import Head from 'next/head'
import { useState, useEffect } from 'react'

// Components
import Card from './card'
import Memo from './memo'

// Assets
import styles from '../styles/Home.module.css'
import { nouns } from '../utils/nouns'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); 
  // The maximum is exclusive and the minimum is inclusive
}

function generateWord() {
  let numNouns = nouns.length
  let randNum = getRandomInt(0, numNouns)
  return nouns[randNum]
}

function assignNewWords() {
  setWord1(generateWord())
  setWord2(generateWord())
  setWord3(generateWord())
}

export default function Home() {
// TODO: Consodiate setStates in custom hook?
  const [word1, setWord1] = useState();
  const [word2, setWord2] = useState();
  const [word3, setWord3] = useState();

  useEffect(() => {
    assignNewWords()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Startup Idea Generator</title>
        <meta name="description" content="Flashcards to generate startup ideas" />
      </Head>

      <main className={styles.main}>
        
        <h1 className={styles.title}>
          Create the next 🦄
        </h1>

        <div style={{margin: "10px 0"}}></div>

        <div className={styles.grid}>
          <Card word={word1}></Card>
          <Card word={word2}></Card>
          <Card word={word3}></Card>
        </div>

        <div style={{margin: "10px 0"}}></div>

        <input className={styles.button} onClick={assignNewWords} type="button" value="Generate!" />
        <Memo></Memo>
      </main>


      <footer className={styles.footer}>
          Created by&nbsp;
          <a target="_blank" rel="noreferrer" href="https://twitter.com/coolandsmartrr">@coolandsmartrr</a>
          &nbsp;| Source Code on:&nbsp;
          <a target="_blank" rel="noreferrer" href="https://github.com/coolandsmartrr/ideacards">GitHub</a>
      </footer>
    </div>
  )
}
