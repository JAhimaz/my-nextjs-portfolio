'use client';
import Image from 'next/image';
import { BiSolidCalendar } from 'react-icons/bi';
import styles from './Jobs.module.scss';
import { Experience } from '../../libs/types';
import JobPanelSkeleton from './JobPanel.skeleton';
import getLang from '../../libs/getLang';

type JobProps = {
  index: number;
  job: Experience;
  setInViewJob: (target: EventTarget & HTMLElement) => void;
}

const JobPanel = Object.assign(
  (props: JobProps) => {

    const { index, job, setInViewJob } = props;
    const language = getLang();

    return (
      <section className={styles.jobPanel} key={index} id={`${index}_job_panel`} onClick={(element) => {
            // if not mobile, do nothing
            if (window.innerWidth < 1080) return;
            // scroll into view
            element.currentTarget.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            })

            // set in view
            setInViewJob(element.currentTarget);
          }}
      
          style={{
            animationDelay: `${index * 0.1}s`,
            // on Hover change transform
          }}
          >
            <Image 
            src={job.logo}
            className={styles.jobImage}
            width={47}
            height={47}
            alt={`company-logo-${index}`} 
            />
            { job.active && <div className={styles.active}>Current</div>}
            <section className={styles.jobTextContainer}>
              <span className={styles.jobTextTitle}>{job.role}</span>
              <span className={styles.jobText}>{job.company}</span>
              <span className={styles.jobText}>{job.location}</span>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <BiSolidCalendar className={styles.jobTextIcon} />
                <span className={styles.jobText}>{job.startDate} - {job.endDate}</span>
              </div>
              <span className={styles.jobText}>{
                // check the language
                language === 'en' ? job.description : job.descriptionZH
              }</span>
            </section>
            { job.tags.length > 0 && (
            <section className={styles.jobTags}>
              {job.tags.slice(0, 2).map((tag, index) => {
                return (
                  <div className={styles.jobTagPill} key={index}>{tag}</div>
                )
              })}
              { job.tags.length > 2 && <div className={styles.jobTagPill}>+{job.tags.length - 2}</div>}
            </section>
            )}
      </section>
  )},
  { Skeleton: JobPanelSkeleton }
)
export default JobPanel;