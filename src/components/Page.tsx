'use client';
import { useTranslations } from 'next-intl';
import styles from '@/components/Page.module.scss';
import Jobs from './Jobs/Jobs';
import Header from './Header/Header';
import ProjectsBanner from './ProjectsBanner/ProjectsBanner';

const Page = () => {

  return (
    <section className={styles.mainSection}>
      <Header />
      <Jobs />
      <ProjectsBanner />
    </section>
  )
}

export default Page;