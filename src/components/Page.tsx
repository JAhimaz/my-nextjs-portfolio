'use client';
import styles from '@/components/Page.module.scss';
import Jobs from './JobsSection/Jobs';
import Header from './Header/Header';
import ProjectsBanner from './ProjectsSection/ProjectsBanner';

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