import React from 'react';
import Heading from '@/components/common/heading';
import whyImage from '@/assets/images/why.svg';
import Image from 'next/image';
import Accordion from './accordion';
import Container from '@/components/common/container';

const Why = () => {
  return (
    <section id="why" className="scroll-m-20 py-2 md:py-10">
      <Container>
        <div className="mb-20 flex justify-center">
          <Heading text={`Why`} />
        </div>
        <div className="flex flex-col gap-10 px-2 md:flex-row">
          <div className="flex-1 rounded-md p-10">
            <Image className="w-[70%]" src={whyImage} alt="why image" />
          </div>
          <div className="flex-[2] rounded-md bg-gray-900 px-5">
            <Accordion />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Why;
