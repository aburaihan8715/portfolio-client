'use client';
import React from 'react';
import Heading from '@/components/common/heading';
import ProjectCard from './project-card';
import Container from '@/components/common/container';
import { IProject } from '@/interface/project.interface';
import { config } from '@/config';
import { useQuery } from '@tanstack/react-query';

const Projects = () => {
  const { isPending, error, data } = useQuery({
    queryKey: ['projects'],
    queryFn: () =>
      fetch(`${config.BASE_URL}/api/v1/projects`).then((res) =>
        res.json(),
      ),
  });

  const projects: IProject[] = data?.data || [];

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <section id="projects" className="scroll-m-20 py-2 md:py-10">
      <Container>
        <div className="mb-20 flex justify-center">
          <Heading text={`Projects`} />
        </div>
        <div className="grid grid-cols-1 gap-5 px-2 md:grid-cols-3">
          {projects?.map((project) => (
            <ProjectCard key={project?._id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
