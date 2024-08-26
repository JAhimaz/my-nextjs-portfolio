'use client';
import Link from 'next/link';
import styles from './Navigation.module.scss';
import { FC } from 'react';

const Navigation = ({ scrollPosition }: {
  scrollPosition: number;
}) => {



  return (
    <section className={styles.navbar} style={{
      backgroundColor: typeof window !== 'undefined' && scrollPosition > 0.9* window.innerHeight ? 'rgba(13, 13, 13, 0.5)' : 'rgba(246, 246, 246, 0.5)',
      color: typeof window !== 'undefined' && scrollPosition > 0.9* window.innerHeight ? 'white' : 'black',
    }}>
      <NavItem url={'#experience'} text={'Experience'} />
      <NavItem url={'#projects'} text={'Projects'} />
      <NavItem url={'#connect'} text={'Connect'} />
    </section>
  )
}

type NavItemProps = {
  url: string;
  text: string;
}

const NavItem: FC<NavItemProps> = ({ url, text }) => {
  return (
    <Link href={url} className={styles.navitem} >
      {text}
    </Link>
  )
}

export default Navigation;