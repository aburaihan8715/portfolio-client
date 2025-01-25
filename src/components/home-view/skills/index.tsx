import React from 'react';
import Heading from '@/components/common/heading';
import SkillsTab from './tab';
import Container from '@/components/common/container';

const Skills = () => {
  return (
    <section id="skills" className="scroll-m-20 py-2 md:py-10">
      <Container>
        <div className="mb-20 flex justify-center">
          <Heading text={`Skills`} />
        </div>
        <div className="px-2">
          <SkillsTab />
        </div>
      </Container>
    </section>
  );
};

export default Skills;
