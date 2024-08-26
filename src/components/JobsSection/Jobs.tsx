'use client';
import styles from './Jobs.module.scss';
import { Experience } from '@/libs/types';
import { useEffect, useState } from 'react';
import fetchExperiences from '@/libs/experiences/fetchExperiences';
import JobPanel from './JobPanel';

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const Jobs = () => {

  const [ experiences, setExperiences ] = useState<Experience[]>([]);
  const [ selectedJob, setSelectedJob ] = useState<EventTarget & HTMLElement | null>(null); 
  const [ loading, setLoading ] = useState<boolean>(true);


  useEffect(() => {
    if(experiences.length > 0) return;

    fetchExperiences()
    .then((experiences) => {
      setLoading(true);
      setExperiences(experiences);
      setSelectedJob(document.getElementById('0_job_panel'));
    })
    .finally(() => {
      setLoading(false);
    });
  });

  const goToNextJob = () => {
    if (!selectedJob) return;

    const currentJobIndex = parseInt(selectedJob.id.split('_')[0]);
    const nextJobIndex = currentJobIndex + 1;

    if(nextJobIndex > experiences.length - 1) return;

    const nextJob = document.getElementById(`${nextJobIndex}_job_panel`);
    
    nextJob?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    setSelectedJob(nextJob);
  }

  const goToPrevJob = () => {
    if (!selectedJob) return;

    const currentJobIndex = parseInt(selectedJob.id.split('_')[0]);
    const prevJobIndex = currentJobIndex - 1;

    if(prevJobIndex < 0) return;

    const prevJob = document.getElementById(`${prevJobIndex}_job_panel`);
    
    prevJob?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });

    setSelectedJob(prevJob);
  }
  
  const isActive = (index: number) => {
    if (!selectedJob) return false;
    return selectedJob.id === `${index}_job_panel`;
  }

  return (
    <div>
      <section className={styles.jobContainer}>
        { loading ? Array.from({ length: 6 }).map((_, index) => (
          <JobPanel.Skeleton key={`${index}_job`} />
        ))
        : experiences.map((job, index) => (
            <JobPanel index={index} job={job} key={`${index}_job`} setInViewJob={setSelectedJob} />
          ))}
      </section>
      {/* Desktop Only Buttons */}
      <section className={styles.carouselSection}>
        
        {/* map out number of dots based on experience, */}
        <section className={styles.jobDotsSection}>
          { Array.from({ length: experiences.length }).map((_, index) => (
            <span key={index} className={styles.jobDot} style={{
              backgroundColor: isActive(index) ? 'var(--text-primary)' : '#ccc',
            }} 
            onClick={() => {
              const job = document.getElementById(`${index}_job_panel`);
              job?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              });
              setSelectedJob(job);   
            }}
            />
          ))}
        </section>

        <section className={styles.jobButtonSection}>
          <button className={styles.jobButton} onClick={goToPrevJob}>
            <FaChevronLeft />
          </button>
          <button className={styles.jobButton} onClick={goToNextJob}>
            <FaChevronRight />
          </button>
        </section>
      </section>
      <div id="projects" />
    </div>
  )
}

export default Jobs;