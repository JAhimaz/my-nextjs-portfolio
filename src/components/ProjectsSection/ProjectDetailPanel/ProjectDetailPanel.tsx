import { FC, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ProjectDetailPanel.module.scss';
import { Project } from '@/libs/types';
import { useTranslations } from 'next-intl';

type ProjectDetailsProps = {
  projectDetails?: Project;
  changedProject?: string;
};

const ProjectDetailPanel: FC<ProjectDetailsProps> = ({ projectDetails, changedProject }) => {
  const t = useTranslations('Project-Details');
  const [imageLoaded, setImageLoaded] = useState(false);
  const swiperRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (changedProject) {
      // Reset styles when project changes
      setImageLoaded(false);
      if (swiperRef.current) {
        swiperRef.current.style.opacity = '1'; // Reset opacity to 1
      }
    }
  }, [changedProject]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    if (swiperRef.current) {
      // Set opacity to 0 with a transition when image is loaded
      swiperRef.current.style.opacity = '0';
    }
  };

  return (
    <section className={styles.container}>
      <span ref={swiperRef} className={styles.swiper} />

      <span className={styles.header}>{projectDetails ? projectDetails.name : t('projects')}</span>
      <section className={styles.subContainer}>
        <span className={styles.subHeader}>{projectDetails ? projectDetails.subheader: t('subheader')}</span>
        {projectDetails && (
          <div className={styles.projectPreview}>
            <Image
              id="project-preview"
              src={projectDetails.preview}
              fill
              style={{objectFit:"contain"}}
              alt={`project-preview-${projectDetails.name}`}
              priority={true}
              placeholder='blur'
              blurDataURL={projectDetails.preview}
              onLoad={handleImageLoad}
            />
          </div>
        )}
        <span className={styles.description}>
          {projectDetails ? projectDetails.description : t('projectsDescription')}
        </span>
      </section>
    </section>
  );
};

export default ProjectDetailPanel;
