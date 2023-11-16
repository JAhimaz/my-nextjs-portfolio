import { useEffect, useState } from 'react';
import styles from './ProjectsBanner.module.scss';
import ProjectDetailPanel from './ProjectDetailPanel/ProjectDetailPanel';
import ProjectList from './ProjectList/ProjectList';
import { Project } from '@/libs/types';
import fetchProjects from '@/libs/projects/fetchProjects';

const ProjectsBanner = () => {

  const [ projects, setProjects ] = useState<Project[]>([]);
  const [ loading, setLoading ] = useState<boolean>(true);
  const [ selectedProject, setSelectedProject ] = useState<Project | undefined>(undefined);

  useEffect(() => {
    if(projects.length > 0) return;

    fetchProjects()
    .then((projects) => {
      setLoading(true);
      setProjects(projects);
    })
    .finally(() => {
      setLoading(false);
    });
  });

  return (
    <section className={styles.banner}>
      <ProjectDetailPanel projectDetails={selectedProject} />
      <ProjectList projects={projects} loading={loading} setSelectedProject={(e) => setSelectedProject(e)} />
    </section>
  )
}

export default ProjectsBanner;