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
  const [ changedProject, setChangedProject ] = useState<string | undefined>(undefined);

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

  const handleSelectProject = (project: Project | undefined) => {
    // timeout for 0.5 seconds
    setChangedProject(project?.name || undefined);
    setTimeout(() => {
      setSelectedProject(project);
    }, 500);
  }

  return (
    <section className={styles.banner}>
      <ProjectDetailPanel projectDetails={selectedProject} changedProject={changedProject} />
      <ProjectList projects={projects} loading={loading} setSelectedProject={(e) => handleSelectProject(e)} />
    </section>
  )
}

export default ProjectsBanner;