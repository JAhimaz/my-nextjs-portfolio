import { FC } from 'react';
import styles from './ProjectDetailPanel.module.scss';
import { Project } from '@/libs/types';

type ProjectDetailsProps = {
  projectDetails?: Project;
}

const ProjectDetailPanel: FC<ProjectDetailsProps> = ({ projectDetails }) => {

  return (
    <section className={styles.container}>
      {
        !projectDetails ? (
          <div>Project</div>
        ) : (
          <div>{projectDetails.name}</div>
        )
      }
    </section>
  )
}

export default ProjectDetailPanel;