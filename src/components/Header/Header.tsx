'use client'
import { useTranslations } from 'next-intl'
import styles from './Header.module.scss'

const Header = () => {

  const t = useTranslations('Header')

  return (
      <div className={styles.container}>
        <span className={styles.header}>Joshua Ahimaz</span>
        <span className={styles.subheader}>Full-Stack Developer @ Sakaba (酒場)<br/>Founder of Reach Card & President of Sunway Blockchain Club</span>
        <span className={styles.subheader}>{t('based-in', { location: 'Kuala Lumpur, Malaysia' })}</span>
      </div>
  )
}

export default Header;