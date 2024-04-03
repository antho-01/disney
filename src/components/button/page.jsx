import React from 'react'
import styles from "@/components/button/page.module.css"

export default function Button({name}) {
  return (
      <button className={styles.button}>{name}</button>
  )
}
