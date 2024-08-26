'use client';
import { Project } from '@/libs/types';
import ProjectPanel from '../ProjectPanel/ProjectPanel';
import styles from './ProjectList.module.scss';
import { FC } from 'react';
import ProjectPanelSkeleton from '../ProjectPanel/ProjectPanel.skeleton';

type ProjectListProps = {
  projects: Project[];
  setSelectedProject: (project: Project) => void;
  loading: boolean;
}

const ProjectList: FC<ProjectListProps> = ({ projects, setSelectedProject, loading }) => {
  
  return (
    <section className={styles.listContainer}>
      {
        loading ? 
        // fake array of 8
        [...Array(8)].map((_, index) => (
          <ProjectPanelSkeleton key={index} />
        ))
        : 
        projects.map((project, index) => (
          <ProjectPanel key={index} project={project} setSelectedProject={() => setSelectedProject(project)} />
        ))
      }
    </section>
  )
}

export default ProjectList;