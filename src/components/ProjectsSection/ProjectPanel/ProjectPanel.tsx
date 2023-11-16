import { FC } from 'react';
import styles from './ProjectPanel.module.scss';
import { Project } from '@/libs/types';
import ProjectPanelSkeleton from './ProjectPanel.skeleton';

type ProjectPanelProps = {
  project: Project;
  setSelectedProject: (project: Project) => void;
}

const ProjectPanel = Object.assign(
  (props: ProjectPanelProps) => {
  
    const { project, setSelectedProject } = props;

    return (
      <section className={styles.projectContainer} onClick={(element) => {

              // set as currently selected
              setSelectedProject(project);

              element.currentTarget.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }}>
              {project.name}
      </section>
    )
  }, { Skeleton: ProjectPanelSkeleton }
)


export default ProjectPanel;