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
      <section className={styles.projectContainer} 
      onClick={(element) => {

              // set as currently selected
              setSelectedProject(project);

              element.currentTarget.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
              })
            }}>
              <span className={styles.projectTitle}>
                {project.name}
              </span>
              <span className={styles.projectSubheader}>
                {project.subheader}
              </span>
              <section className={styles.projectTags}>
              { project.tags.slice(0,5).map((tag, index) => (
                <span key={index} className={styles.projectTagPill}>
                  {tag}
                </span>
              ))}
              </section>
              <span className={styles.projectImageContainer} 
              style={{
                backgroundImage: `url(${project.preview})`,
              }} />
      </section>
    )
  }, { Skeleton: ProjectPanelSkeleton }
)


export default ProjectPanel;