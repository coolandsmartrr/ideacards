import styles from '../styles/Memo.module.css'

export default function Memo(){
  return(
    <div className={styles.memo}>
      <h1>Why this app?</h1>
      <span>Softbank founder Son Masayoshi struck gold by starting a business from three random flash cards he drew.</span>
      <br></br>
      <span>If I recall correctly, he drew &quot;voice&quot;, &quot;dictionary&quot;, &quot;electronics&quot;.</span>
    </div>
  )
}