'use client';
import { Icon } from '@/libs/Icons';
import styles from './FooterSection.module.scss';
import { useTranslations } from 'next-intl'
import Link from 'next/link';

const FooterSection = () => {

  const t = useTranslations('achievements')

  const achievementItems = Array.from({length: 6}, (_, i) => {
    return t(`achievementItems.item${i + 1}`).toString()
  })

  const educationItems = Array.from({length: 3}, (_, i) => {
    return t(`educationItems.item${i + 1}`).toString()
  })

  const technicalSkills = Array.from({length: 14}, (_, i) => {
    return t(`technicalSkills.item${i + 1}`).toString()
  })
  
  return (
    <section className={styles.banner}>
      <section className={styles.itemSection}>
        <h2>{t("technicals")}</h2>
        <section className={styles.pillSection}>
          { technicalSkills.map((item, i) => (
            <div key={i} className={styles.projectTagPill}>{item}</div>
          ))}
        </section>
        <h2>{t("achievements")}</h2>
        <section className={styles.pillSection}>
          { achievementItems.map((item, i) => (
            <div key={i} className={styles.projectTagPill}>{item}</div>
          ))}
        </section>
        <h2>{t("education")}</h2>
        <section className={styles.pillSection}>
          { educationItems.map((item, i) => (
            <div key={i} className={styles.projectTagPill}>{item}</div>
          ))}
        </section>
      </section>
      <section className={styles.socialsList}>
        <Link href="https://github.com/JAhimaz" target='_blank'>
          <Icon icon="Github" className={styles.socialLogo} />
        </Link>
        <Link href="https://www.linkedin.com/in/joshuaahimaz/" target='_blank'>
          <Icon icon="Linkedin" className={styles.socialLogo} />
        </Link>
        <Link href="https://twitter.com/TheCoolerJosh" target='_blank'>
          <Icon icon="Twitter" className={styles.socialLogo} />
        </Link>
      </section>
      <div id="connect" />
    </section>
  )
}

export default FooterSection;