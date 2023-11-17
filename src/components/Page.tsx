'use client';
import styles from '@/components/Page.module.scss';
import Jobs from './JobsSection/Jobs';
import Header from './Header/Header';
import ProjectsBanner from './ProjectsSection/ProjectsBanner';
import { useState, useEffect } from 'react';

const Page = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect will only run once after the initial render

  const backgroundColor = scrollPosition > 0.8 * window.innerHeight ? '#0D0D0D' : '#F6F6F6';

  const pageStyle = {
    backgroundColor: backgroundColor,
  };

  return (
    <section className={styles.mainSection} id='main' style={pageStyle}>
      <Header />
      <Jobs />
      <ProjectsBanner />
    </section>
  );
};

export default Page;