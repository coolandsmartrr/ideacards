import React from 'react';
import styles from '../styles/Card.module.css'

export default function Card(props){
  return(
    <span className={`${styles.text} card`}>
      {props.word}
    </span>
  )
}