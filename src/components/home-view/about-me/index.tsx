import React from 'react';
import Heading from '@/components/common/heading';

import programmingImage from '@/assets/images/programming.svg';
import Image from 'next/image';
import AboutMeTab from './tab';
import Container from '@/components/common/container';

const AboutMe = () => {
  return (
    <section id="about-me" className="scroll-m-20 py-2 md:py-10">
      <Container>
        <div className="mb-20 flex justify-center">
          <Heading text={`about me`} />
        </div>
        <div className="flex flex-col gap-10 md:flex-row">
          <div className="flex-1 rounded-md bg-gray-900 p-10">
            <Image src={programmingImage} alt="programming" />
          </div>
          <div className="flex-1">
            <AboutMeTab />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
