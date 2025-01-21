import React from 'react';
import Heading from '@/components/common/heading';
import ProjectCard from './project-card';
import Container from '@/components/common/container';
import { IProject } from '@/interface/project.interface';
import { config } from '@/config';

const Projects = async () => {
  const data = await fetch(`${config.BASE_URL}/api/v1/projects`);
  const projectsData = await data.json();
  const projects: IProject[] = projectsData?.data;

  return (
    <section id="projects" className="scroll-m-20 py-2 md:py-10">
      <Container>
        <div className="mb-20 flex justify-center">
          <Heading text={`Projects`} />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {projects?.map((project) => (
            <ProjectCard key={project?._id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
