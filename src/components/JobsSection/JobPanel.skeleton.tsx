import styles from './Jobs.module.scss';
import Image from 'next/image';

const JobPanelSkeleton = () => {
  return (
      <section className={styles.jobPanel} onClick={(element) => {
            // if not mobile, do nothing
            if (window.innerWidth < 1080) return;
            // scroll into view
            element.currentTarget.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            })
          }}>
            <span className={styles.loading} style={{
              minWidth: '47px',
              minHeight: '47px',
            }} />
            <section className={styles.jobTextContainer}>
              <span className={styles.loading} style={{
                height: '20px',
                width: '80%',
              }} />
              <span className={styles.loading} style={{ width: '40%'}} />
              <span className={styles.loading} style={{ width: '30%'}} />
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}>
                <span className={styles.loading} style={{ width: '30%'}} />
              </div>
              <span className={styles.loading} style={{ width: '0%'}} />
              <span className={styles.loading} style={{ width: '100%'}} />
              <span className={styles.loading} style={{ width: '95%'}} />
              <span className={styles.loading} style={{ width: '100%'}} />
              <span className={styles.loading} style={{ width: '70%'}} />
            </section>
            <section className={styles.jobTags}>
              <span className={styles.loading}/>
              <span className={styles.loading}/>
            </section>
      </section>
  )
}

export default JobPanelSkeleton;