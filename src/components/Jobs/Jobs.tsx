import styles from './Jobs.module.scss';
import Image from 'next/image';
import { BiSolidCalendar } from 'react-icons/bi';

const Jobs = () => {

  const jobs = [
    // till 10
    1, 2, 3, 4, 5
  ]

  return (
    <section className={styles.jobContainer}>
      {jobs.map((job, index) => (
        <section className={styles.jobPanel} key={index} onClick={(element) => {
          // if not mobile, do nothing
          if (window.innerWidth < 1080) return;
          // scroll into view
          element.currentTarget.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          })
        }}
    
        style={{
          animationDelay: `${index * 0.1}s`,
        }}
        >
          <Image 
          src="https://pbs.twimg.com/profile_images/1585456410338283520/t4PcR5MN_400x400.jpg" 
          className={styles.jobImage}
          width={47}
          height={47}
          alt={`company-logo-${index}`} 
          />
          <section className={styles.jobTextContainer}>
            <span className={styles.jobTextTitle}>Full-stack Web3 Engineer</span>
            <span className={styles.jobText}>Sakaba</span>
            <span className={styles.jobText}>Tokyo, Japan</span>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <BiSolidCalendar className={styles.jobTextIcon} />
              <span className={styles.jobText}>Apr 2023 - Present</span>
            </div>
            <span className={styles.jobText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</span>
          </section>
          <section className={styles.jobTags}>
            <div className={styles.jobTagPill}>React.JS</div>
            <div className={styles.jobTagPill}>This is a tag</div>
          </section>
        </section>
      ))}
    </section>
  )
}

export default Jobs;