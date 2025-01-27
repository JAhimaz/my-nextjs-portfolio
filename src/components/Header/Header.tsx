'use client'
import { useTranslations } from 'next-intl'
import styles from './Header.module.scss'
import { useEffect, useState } from 'react'

const Header = () => {

  const t = useTranslations('Header')

  // the header is Joshua Ahimaz split into characters, I want it to include a space between the first and last name
  const header = `Joshua Ahimaz`.split('')

  const [secret, setSecret] = useState(false)


  return (
      <div className={styles.container}>
        <section className={styles.headerSection}>
          {
            header.map((letter, index) => (
              <span key={index} className={letter === "A" ? styles.secret : styles.header}>
                {letter === ' ' ? '\u00A0' :
                letter === 'A' ? <div onClick={() => {
                  setSecret(!secret)
                }}>{secret ? '🍜' : letter}</div> : letter}
              </span>
            ))
          }
        </section>
        <span className={styles.subheader}>Customer Experience Advocate @ Alchemy<br/>Founder of Sunway Blockchain Club | CEO of ReachCard</span>
        <span className={styles.subheader}>{t('based-in', { location: 'Kuala Lumpur, Malaysia' })}</span>
      </div>
  )
}

export default Header;